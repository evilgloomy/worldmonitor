# Shiba Watchlist & Feed Plan

Status: prototype design scaffold

This document expands the Shiba Intelligence plan into a source/watchlist
strategy that can be implemented inside the self-hosted World Monitor fork.

The goal is not to collect everything. The goal is to maintain a compact,
high-signal sensor network around the external systems, markets, platforms and
technologies that can materially affect Shiba Company OS decisions.

## Design principles

1. **Primary sources first.** Official release notes, developer changelogs,
   regulator pages, official GitHub releases and program pages should outrank
   discovery/search feeds.
2. **Discovery is allowed, not authoritative.** Search/news feeds are useful for
   finding changes quickly, but consequential actions require source
   verification.
3. **Entity watchlists stay small.** Broad discovery belongs to World Monitor's
   existing feeds. Watchlists are for specific entities Shiba already cares
   about.
4. **Signals beat articles.** Mina should usually see a normalized signal such
   as `breaking-api-change` or `model-release`, not twenty duplicate headlines.
5. **Different signals deserve different latency.** A Discord/Meta OAuth break
   matters faster than a long-term semiconductor market story.
6. **World Monitor observes; Company OS interprets.** Private Shiba strategy,
   financial state and project priorities stay out of the AGPL service.
7. **No automatic task spam.** A signal becomes Plane work only after relevance,
   actionability and deduplication checks.

## Monitoring layers

```text
Layer 0 — primary source
official API/changelog/release/regulator/program
        ↓
Layer 1 — discovery
reputable media, Google News/RSS, ecosystem commentary
        ↓
Layer 2 — World Monitor normalization
entity + signal + freshness + source quality + correlation
        ↓
Layer 3 — Qwen relevance filter
compare with Company OS objectives/projects
        ↓
Layer 4 — verification / research
only when material
        ↓
Layer 5 — Sol synthesis
only for high-value judgment
        ↓
Layer 6 — Plane action / Hyde escalation
```

## Cadence policy

The scaffold defines three target watch cadences:

| Priority | Target | Typical use |
|---|---:|---|
| Critical | 15 min | API/auth/security/platform policy/regulation |
| High | 1 hour | releases, monetization, model/media improvements |
| Normal | 6 hours | funding comparables, hardware supply, long-cycle trends |

These are desired observation windows, not a requirement to hammer every
upstream URL directly. World Monitor's cache/seed architecture should be used
to coalesce work and honor upstream limits.

## P0 watchlists

### 1. AI models

**Entities**

- OpenAI
- Anthropic
- Google DeepMind / Gemini
- Alibaba Qwen
- DeepSeek
- ByteDance AI
- Nous Research
- Meta AI
- Tencent / Hunyuan
- MiniMax
- Moonshot AI
- Zhipu AI

**Primary source classes**

- official model/product announcements
- official API docs/changelogs
- official GitHub model/runtime repos and releases
- model cards / official research releases

**Discovery source classes**

- reputable AI/technology publications
- Google News/RSS discovery
- benchmark/inference reporting

**Signals**

- `model-release`
- `breaking-api-change`
- `price-change`
- `inference-efficiency`
- `security-advisory`

**What Mina should care about**

- stronger local coordinator candidate
- better context/tool calling
- multimodal capability that removes a separate service
- cheaper/faster frontier inference
- licensing change affecting local deployment
- model that can replace Qwen for Mina or workers

**Do not escalate merely because**

- a benchmark improves slightly
- a research checkpoint exists but is not practically deployable
- an unverified social post claims a model leak

### 2. Agent/runtime ecosystem

**Entities/projects**

- Hermes Agent
- Ollama
- MCP ecosystem
- ComfyUI
- Postiz
- Plane
- World Monitor upstream
- major emerging agent runtimes that could materially replace current Shiba
  components

**Primary source classes**

- GitHub releases
- GitHub security advisories
- official documentation changelogs
- official migration/deprecation notices

**Signals**

- `runtime-release`
- `breaking-api-change`
- `security-advisory`
- `inference-efficiency`

**Action examples**

- Hermes security release → immediate review
- Ollama context/performance improvement → benchmark on Shiba node
- Plane MCP/API change → integration compatibility task
- Postiz provider/API fix → test social workflow
- World Monitor upstream feature → decide whether to rebase fork

### 3. Social-platform operations

**Platforms**

- Instagram
- Threads
- Facebook
- TikTok
- Douyin
- YouTube

**Primary source classes**

- platform developer changelogs
- official creator/business announcements
- official monetization/policy pages
- official service status where available

**Discovery source classes**

- creator-industry publications
- major technology publications
- search/RSS discovery for algorithm/distribution changes

**Signals**

- `breaking-api-change`
- `platform-algorithm-change`
- `creator-monetization-change`
- `content-policy-change`
- `ai-disclosure-rule`
- `social-commerce-change`
- `platform-outage`

**Critical distinction**

Platform API/auth changes are operational incidents. Algorithm rumors are
intelligence leads. The former may justify an immediate Plane task; the latter
needs corroboration before changing marketing strategy.

### 4. Music industry and distribution

**Platforms/ecosystems**

- Spotify
- Apple Music
- Tencent Music / QQ Music
- NetEase Cloud Music
- Douyin music ecosystem
- distributor/platform policy changes relevant to independent artists

**Signals**

- `music-royalty-change`
- `music-discovery-change`
- `content-policy-change`
- `ai-disclosure-rule`
- `copyright-licensing-change`
- `regulatory-change`

**Important event classes**

- recommendation/editorial changes
- artist dashboard/API changes
- royalty calculation changes
- AI music / synthetic voice restrictions
- artist verification/program changes
- China platform policy changes
- short-video/music discovery changes

### 5. Generative media

**Watch entities**

- HeyGen
- Runway
- Sora
- Veo
- Kling
- Seedance / ByteDance
- Hunyuan Video
- Suno
- Udio
- important open image/video model ecosystems

**Signals**

- `model-release`
- `media-quality-jump`
- `breaking-api-change`
- `price-change`
- `content-policy-change`
- `copyright-licensing-change`

**High-value interpretation questions**

- can this replace an existing paid vendor?
- does it materially lower cost per finished asset?
- does it improve character consistency?
- does it support API/batch workflows?
- can it run locally on current/future Shiba hardware?
- is commercial use clear enough for production?

### 6. Compute and hardware

**Watch entities**

- NVIDIA
- AMD
- Apple Silicon / Mac Studio
- TSMC
- HBM / high-bandwidth memory supply
- local-inference runtime improvements

**Signals**

- `hardware-release`
- `hardware-price-availability`
- `inference-efficiency`
- `security-advisory`

**Useful outputs**

- likely model class the hardware can run
- practical memory capacity
- expected relevance to local inference
- expected relevance to video/image workloads
- supply/price trend

Do not turn World Monitor into a shopping engine. It should identify material
technology/supply changes; procurement research happens separately.

### 7. China / Hong Kong technology and media

**Domains**

- Chinese AI models
- platform regulation
- synthetic-media rules
- digital-content regulation
- creator economy
- music/entertainment platforms
- Hong Kong innovation/media/startup ecosystem

**Primary source classes**

- regulator announcements
- official platform announcements
- government funding/program pages
- official company releases

**Signals**

- `regulatory-change`
- `ai-disclosure-rule`
- `content-policy-change`
- `copyright-licensing-change`
- `funding-program`
- `funding-deadline`

**Escalate when**

- a rule could affect current AI/media operations
- a deadline affects a realistically relevant program
- a platform changes AI-content/distribution requirements

### 8. Canada / BC / Hong Kong funding radar

This is an opportunity detector, not an eligibility engine.

**Monitor**

- federal Canadian innovation/AI/media/music programs
- British Columbia creative/technology programs
- Hong Kong innovation/technology/creative programs

**Signals**

- `funding-program`
- `funding-deadline`
- `regulatory-change`

**Required fields before Mina acts**

- program name
- owner/agency
- official source URL
- open/closed status
- deadline
- funding amount/range if stated
- eligibility summary
- geography
- sector
- last verified time

Any application decision must verify the official program page.

## P1 watchlists

### Creator economy

Monitor:

- creator monetization
- brand/affiliate models
- social commerce
- virtual influencers
- creator AI tools
- platform creator programs

Useful mostly as marketing opportunity intelligence.

### Startup / capital markets

Monitor:

- AI startup rounds
- agent startups
- creator/media-tech funding
- acquisitions
- comparable valuations
- infrastructure-company financing

Use for:

- fundraising comparables
- competitive landscape
- partnership/acquisition signals

Avoid treating one financing round as a valuation model for Shiba.

### Automotive / simulation

Monitor:

- sim-racing platforms
- driving simulation
- vehicle dynamics
- automotive digital twins
- simulator hardware/software
- motorsport simulation technology

Escalate mainly when a development can materially improve simulation physics,
operator hardware, or content positioning.

## P2 watchlists — hold until needed

- 3D printing / maker ecosystem
- architecture / design tooling
- retail / e-commerce operations
- travel/logistics
- broad consumer trend tracking

These should only become P1/P0 after actual Company OS workflows prove value.

## Signal deduplication

A watchlist engine should not produce multiple alerts for the same event.

Suggested event fingerprint inputs:

```text
normalized entity
signal type
normalized headline/event name
release/version identifier when present
canonical primary URL when present
24h time bucket for discovery-only items
```

Correlation rule:

```text
3 discovery stories about same event
+ 1 primary source
→ one signal with stronger confidence
```

Not:

```text
4 Plane tasks
```

## Source quality

Suggested source classes:

### A — Primary

- official regulator/government page
- official product/developer changelog
- official vendor/company announcement
- official GitHub release/security advisory

May support direct `ACTION`/`ESCALATE` when the signal itself is clear.

### B — High-quality secondary

- established technology/business publication
- specialist industry publication with attributable sourcing

Can raise `REVIEW`; consequential action should still verify primary when
practical.

### C — Discovery

- search aggregation
- broad RSS discovery
- community discussion

Good for finding events. Never enough by itself for high-impact legal,
financial, security or regulatory conclusions.

## Noise controls

### Ignore / suppress patterns

The future implementation should learn to suppress:

- generic SEO listicles
- repeated product comparisons
- old stories republished as new
- affiliate hardware deal spam
- rumor-only model leaks
- stock-price stories with no operational relevance
- social algorithm speculation with no evidence
- generic "AI will change X" opinion pieces

### Repetition cooldowns

Suggested cooldown after a signal is acknowledged:

- critical integration/security signal: until state/version changes
- model/runtime release: 7 days or until new version
- platform algorithm story: 3 days unless corroborated by new source
- funding program: 14 days, but deadline reminders remain active
- hardware supply story: 7 days unless price/availability materially changes

## Mina output contract

Mina should not receive a giant feed dump. A normalized signal payload should
look roughly like:

```json
{
  "id": "signal_x",
  "entity": "Hermes Agent",
  "signalType": "runtime-release",
  "title": "...",
  "observedAt": "...",
  "publishedAt": "...",
  "sourceClass": "primary",
  "source": "GitHub Releases",
  "url": "...",
  "summary": "...",
  "corroborationCount": 2,
  "freshness": "fresh"
}
```

Company OS/Mina enrichment is separate:

```json
{
  "signalId": "signal_x",
  "classification": "REVIEW",
  "affectedProjects": ["Company OS"],
  "impact": "medium",
  "urgency": "normal",
  "reason": "Current Hermes runtime may benefit from the release",
  "nextAction": "Benchmark release in isolated environment",
  "planeWorkItemId": null
}
```

## Trigger examples

### Example A — Hermes release

```text
Official GitHub release
→ runtime-release
→ entity match: Hermes Agent
→ critical watch item
→ Mina checks current installed version
→ if newer + relevant: REVIEW/ACTION
→ Plane benchmark/upgrade ticket
```

### Example B — Instagram API deprecation

```text
Official Meta developer notice
→ breaking-api-change
→ critical platform watch
→ Mina checks Postiz/social integration dependency
→ ACTION
→ Plane compatibility ticket
→ notify Hyde only if publishing/analytics are at risk
```

### Example C — new AI video model

```text
official model announcement + industry coverage
→ media-quality-jump
→ Mina checks current media workflow/provider costs
→ REVIEW
→ benchmark task only if the new model could plausibly improve cost/quality
```

### Example D — Canadian grant

```text
discovery feed finds program
→ funding-program
→ verify official program page
→ Mina checks Company OS project fit
→ if plausible: REVIEW
→ Plane application-research task
```

### Example E — rumor about algorithm change

```text
creator blog/social chatter
→ platform-algorithm-change candidate
→ source class C only
→ WATCH
→ no Plane task until corroborated
```

## Relationship with existing World Monitor tech feeds

The existing `tech` variant already has broad AI, startup, policy, hardware,
security and developer-community feeds. The Shiba variant should reuse that
breadth where useful and add focused Shiba categories rather than duplicating
every upstream feed.

The Shiba-specific layer primarily adds:

- narrower watchlists
- music / creator operations
- China/Hong Kong focus
- social platform operations
- generative-media vendor monitoring
- runtime/project release monitoring
- grants/funding opportunities
- Company OS relevance/action flow

## Implementation notes for Codex

When implementation resumes:

1. Wire `src/config/shiba-watchlists.ts` only after validating it against the
   current source-tier and feed-resolution systems.
2. Prefer official first-party endpoints over Google News queries when a stable
   feed/changelog/API exists.
3. Keep discovery feeds as fallback because many vendors do not expose usable
   RSS/changelog surfaces.
4. Use World Monitor's existing circuit breakers and cache tiers.
5. Do not create new polling loops when an existing seed/cache path can be
   reused.
6. Keep private Company OS context outside the World Monitor process.
7. Add tests for signal dedupe and source-quality gating before automatic Plane
   task creation is enabled.
8. Keep Plane task creation disabled until the Shiba relevance loop is
   dogfooded manually.

## First dogfood watchlist

The first live watchlist should stay deliberately small:

```text
Hermes Agent
Ollama
Qwen
OpenAI
HeyGen
Meta / Instagram / Threads
TikTok / Douyin
YouTube
Spotify
Tencent Music / QQ Music
NetEase Cloud Music
NVIDIA
Canada / BC funding
China AI/synthetic-media regulation
```

If this produces useful signals with manageable noise for two weeks, expand to
the remaining P0/P1 entities.
