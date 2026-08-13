import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

describe('Shiba self-host variant', () => {
  it('is selected only through the private build path', () => {
    const pkg = JSON.parse(read('package.json'));
    const variant = read('src/config/variant.ts');
    assert.match(pkg.scripts['build:shiba'], /VITE_VARIANT=shiba/);
    assert.match(pkg.scripts['dev:shiba'], /VITE_VARIANT=shiba/);
    assert.match(variant, /h\.startsWith\('shiba\.'\).*return 'shiba'/s);
  });

  it('registers Shiba feeds and panels in the runtime registries', () => {
    const feeds = read('src/config/feeds.ts');
    const panels = read('src/config/panels.ts');
    assert.match(feeds, /SITE_VARIANT === 'shiba'[\s\S]*SHIBA_FEEDS/);
    assert.match(feeds, /mergeCanonicalFeeds\([\s\S]*SHIBA_FEEDS/);
    assert.match(panels, /shiba:\s+SHIBA_PANELS/);
    assert.match(panels, /shiba:\s+Object\.keys\(VARIANT_PANEL_CONFIGS\.shiba\)/);
  });

  it('enables only panels backed by existing shared components or feeds', () => {
    const shiba = read('src/config/variants/shiba.ts');
    assert.doesNotMatch(shiba, /'shiba-brief':\s*\{[^}]*enabled:\s*true/);
    assert.doesNotMatch(shiba, /'shiba-watchlist-hits':\s*\{[^}]*enabled:\s*true/);
    assert.doesNotMatch(shiba, /'shiba-opportunities':\s*\{[^}]*enabled:\s*true/);
    for (const category of ['ai-models', 'agent-runtimes', 'generative-media', 'social-platforms', 'music-industry', 'watchlist']) {
      assert.match(shiba, new RegExp(`['"]?${category}['"]?: \\[`, 'm'));
      assert.match(shiba, new RegExp(`(?:['"]${category}['"]|${category}):\\s*\\{[^}]*enabled:\\s*true`));
    }
  });

  it('keeps the deployment loopback-only and selects the Shiba Docker build', () => {
    const compose = read('docker-compose.shiba.yml');
    assert.match(compose, /VITE_VARIANT:\s*shiba/);
    assert.match(compose, /127\.0\.0\.1:\$\{WM_PORT:-4010\}:8080/);
    assert.doesNotMatch(compose, /^\s+-\s*"?\$\{WM_PORT/m);
  });
});
