// Shiba Intelligence variant scaffold.
//
// IMPORTANT: this file is intentionally NOT registered in SITE_VARIANTS yet.
// It is a safe feed/panel manifest for the Shiba Company OS prototype. Codex
// should wire it into the variant registry, panel registry, localization and
// tests only after the self-hosted World Monitor runtime is installed.

import type { Feed, PanelConfig } from '@/types';
import { rssProxyUrl } from '@/utils';
import type { VariantConfig } from './base';
import {
  DEFAULT_MAP_LAYERS as TECH_DEFAULT_MAP_LAYERS,
  MOBILE_DEFAULT_MAP_LAYERS as TECH_MOBILE_DEFAULT_MAP_LAYERS,
} from './tech';

export * from './base';

const rss = rssProxyUrl;

const googleNews = (query: string, window = '7d'): string => {
  const q = encodeURIComponent(`${query} when:${window}`);
  return rss(`https://news.google.com/rss/search?q=${q}&hl=en-US&gl=US&ceid=US:en`);
};

/**
 * External intelligence domains Shiba cares about most.
 *
 * These are sensors, not Company OS truth. Shiba-specific impact/relevance
 * belongs in Company OS/Mina, not in World Monitor itself.
 */
export const SHIBA_INTELLIGENCE_DOMAINS = [
  'ai-models',
  'agent-runtimes',
  'generative-media',
  'social-platforms',
  'music-industry',
  'china-tech',
  'compute-hardware',
  'creator-economy',
  'policy-grants',
  'startup-funding',
  'automotive-sim',
  'watchlist',
] as const;

export type ShibaIntelligenceDomain = (typeof SHIBA_INTELLIGENCE_DOMAINS)[number];

/**
 * Entity/project watchlists used by downstream filtering and the future
 * Shiba-watchlist panel. Keep this focused: broad discovery belongs to the
 * normal World Monitor feeds.
 */
export const SHIBA_WATCHLISTS = {
  aiCompanies: [
    'OpenAI',
    'Anthropic',
    'Google DeepMind',
    'Meta AI',
    'Alibaba Qwen',
    'DeepSeek',
    'ByteDance',
    'Tencent',
    'MiniMax',
    'Moonshot AI',
    'Zhipu AI',
    'Nous Research',
  ],
  mediaCompanies: [
    'HeyGen',
    'Runway',
    'Kuaishou Kling',
    'ByteDance Seedance',
    'Suno',
    'Udio',
  ],
  platforms: [
    'Instagram',
    'Threads',
    'Facebook',
    'TikTok',
    'Douyin',
    'YouTube',
    'Spotify',
    'Apple Music',
    'Tencent Music',
    'NetEase Cloud Music',
    'QQ Music',
  ],
  compute: [
    'NVIDIA',
    'AMD',
    'Apple Silicon',
    'TSMC',
    'Ollama',
  ],
  agentAndOpsProjects: [
    'Hermes Agent',
    'Ollama',
    'ComfyUI',
    'Postiz',
    'Plane',
    'World Monitor',
  ],
  markets: ['Canada', 'Hong Kong', 'China', 'Japan', 'United States'],
  themes: [
    'digital human',
    'AI singer',
    'virtual idol',
    'AI music',
    'AI video',
    'agent framework',
    'local inference',
    'creator monetization',
    'social media algorithm',
    'social platform API',
  ],
} as const;

/**
 * Feed scaffold. The first implementation intentionally leans on Google News
 * discovery queries plus stable GitHub release feeds. Codex should replace or
 * supplement these with first-party/primary sources wherever World Monitor's
 * source-quality system supports them.
 */
export const FEEDS: Record<string, Feed[]> = {
  'ai-models': [
    { name: 'Frontier Model Releases', url: googleNews('(OpenAI OR Anthropic OR "Google DeepMind" OR Gemini OR Claude) (model OR release OR API)', '3d') },
    { name: 'China AI Models', url: googleNews('(Qwen OR DeepSeek OR Hunyuan OR ERNIE OR MiniMax OR Moonshot OR Zhipu) (model OR release)', '3d') },
    { name: 'Open Model Ecosystem', url: googleNews('(open source AI model OR Hugging Face OR local LLM OR multimodal model)', '3d') },
    { name: 'AI Benchmarks & Inference', url: googleNews('(LLM benchmark OR inference speed OR quantization OR context window)', '7d') },
  ],

  'agent-runtimes': [
    { name: 'Agent Frameworks', url: googleNews('(AI agent framework OR agentic AI OR multi-agent OR MCP) (release OR platform OR runtime)', '3d') },
    { name: 'Hermes Agent Releases', url: rss('https://github.com/NousResearch/hermes-agent/releases.atom') },
    { name: 'Ollama Releases', url: rss('https://github.com/ollama/ollama/releases.atom') },
    { name: 'ComfyUI Releases', url: rss('https://github.com/comfyanonymous/ComfyUI/releases.atom') },
    { name: 'Postiz Releases', url: rss('https://github.com/gitroomhq/postiz-app/releases.atom') },
    { name: 'Plane Releases', url: rss('https://github.com/makeplane/plane/releases.atom') },
    { name: 'World Monitor Releases', url: rss('https://github.com/koala73/worldmonitor/releases.atom') },
  ],

  'generative-media': [
    { name: 'AI Video', url: googleNews('(Sora OR Veo OR Kling OR Seedance OR Runway OR Hunyuan Video) AI video', '3d') },
    { name: 'Digital Humans & Avatars', url: googleNews('(digital human OR AI avatar OR virtual human OR HeyGen) video', '7d') },
    { name: 'AI Music', url: googleNews('(Suno OR Udio OR AI music OR generative music) (release OR licensing OR lawsuit OR platform)', '7d') },
    { name: 'Image Generation', url: googleNews('(image generation OR FLUX OR diffusion model OR multimodal image model)', '7d') },
  ],

  'social-platforms': [
    { name: 'Meta Platforms', url: googleNews('(Instagram OR Threads OR Facebook OR Meta) (algorithm OR creator OR API OR monetization OR policy)', '3d') },
    { name: 'TikTok & Douyin', url: googleNews('(TikTok OR Douyin) (algorithm OR creator OR API OR monetization OR policy)', '3d') },
    { name: 'YouTube', url: googleNews('YouTube (Shorts OR creator OR algorithm OR API OR monetization OR policy)', '3d') },
    { name: 'Social Platform APIs', url: googleNews('(Instagram API OR Threads API OR TikTok API OR YouTube API OR social platform API) change', '7d') },
    { name: 'Social Platform Outages', url: googleNews('(Instagram OR Threads OR Facebook OR TikTok OR YouTube) (outage OR down OR disruption)', '1d') },
  ],

  'music-industry': [
    { name: 'Streaming Platforms', url: googleNews('(Spotify OR Apple Music OR Tencent Music OR NetEase Cloud Music OR QQ Music) (artist OR streaming OR algorithm OR royalty OR policy)', '3d') },
    { name: 'China Music Market', url: googleNews('(Tencent Music OR NetEase Cloud Music OR QQ Music OR Douyin music) (China OR artist OR streaming)', '7d') },
    { name: 'Music Business', url: googleNews('(music industry OR record label OR streaming royalty OR music licensing) AI', '7d') },
    { name: 'AI Music Regulation', url: googleNews('(AI music OR synthetic voice OR generative music) (copyright OR law OR licensing OR regulation)', '7d') },
  ],

  'china-tech': [
    { name: 'China AI', url: googleNews('(China AI OR Chinese AI OR Qwen OR DeepSeek OR ByteDance AI OR Tencent AI OR Baidu AI)', '3d') },
    { name: 'China Digital Platforms', url: googleNews('(Douyin OR WeChat OR Xiaohongshu OR Bilibili OR Tencent Music OR NetEase) (platform OR creator OR policy)', '3d') },
    { name: 'China AI Regulation', url: googleNews('(China AI regulation OR China generative AI OR synthetic content China OR deepfake China)', '7d') },
    { name: 'Hong Kong Tech & Media', url: googleNews('(Hong Kong AI OR Hong Kong technology OR Hong Kong creator economy OR Hong Kong music industry)', '7d') },
  ],

  'compute-hardware': [
    { name: 'GPU & AI Hardware', url: googleNews('(NVIDIA OR AMD OR AI accelerator OR GPU) (AI OR datacenter OR inference OR availability)', '3d') },
    { name: 'Apple Silicon AI', url: googleNews('(Apple Silicon OR Mac Studio OR M-series) (AI OR LLM OR machine learning)', '7d') },
    { name: 'Semiconductor Supply', url: googleNews('(TSMC OR semiconductor OR HBM OR GPU supply) AI', '7d') },
    { name: 'AI Datacenter Economics', url: googleNews('(AI datacenter OR GPU cloud OR inference cost OR compute pricing)', '7d') },
  ],

  'creator-economy': [
    { name: 'Creator Monetization', url: googleNews('(creator economy OR influencer economy) (monetization OR revenue OR platform OR brand deal)', '7d') },
    { name: 'Creator AI Tools', url: googleNews('(creator AI OR AI creator tools OR AI influencer OR virtual influencer)', '7d') },
    { name: 'Social Commerce', url: googleNews('(social commerce OR TikTok Shop OR Instagram shopping OR creator commerce)', '7d') },
    { name: 'Digital Advertising', url: googleNews('(Meta ads OR TikTok ads OR YouTube ads OR digital advertising) (AI OR creator OR algorithm)', '7d') },
  ],

  'policy-grants': [
    { name: 'Canada AI & Media Funding', url: googleNews('(Canada OR Canadian) (AI funding OR media grant OR music grant OR innovation funding)', '14d') },
    { name: 'British Columbia Funding', url: googleNews('(British Columbia OR BC) (technology grant OR innovation funding OR music grant OR creator funding)', '14d') },
    { name: 'Hong Kong Innovation Funding', url: googleNews('(Hong Kong) (innovation funding OR technology grant OR creative funding OR startup grant)', '14d') },
    { name: 'AI & Synthetic Media Policy', url: googleNews('(AI disclosure OR synthetic media OR deepfake law OR AI copyright OR virtual influencer regulation)', '7d') },
  ],

  'startup-funding': [
    { name: 'AI Funding', url: googleNews('(AI startup OR artificial intelligence startup) (funding OR seed round OR Series A OR acquisition)', '7d') },
    { name: 'Creator Economy Funding', url: googleNews('(creator economy OR music tech OR media tech) (funding OR acquisition OR venture capital)', '14d') },
    { name: 'Agent Startup Funding', url: googleNews('(AI agent startup OR agentic AI startup) (funding OR acquisition OR valuation)', '14d') },
  ],

  'automotive-sim': [
    { name: 'Simulation & Sim Racing', url: googleNews('(sim racing OR driving simulator OR racing simulator OR vehicle simulation) technology', '7d') },
    { name: 'Automotive AI & Simulation', url: googleNews('(automotive simulation OR vehicle dynamics OR autonomous driving simulation OR digital twin automotive)', '7d') },
    { name: 'Motorsport Technology', url: googleNews('(Formula 1 OR motorsport) (simulation OR simulator OR vehicle dynamics OR AI technology)', '7d') },
  ],

  watchlist: [
    { name: 'Shiba AI Watchlist', url: googleNews('(OpenAI OR Anthropic OR Qwen OR DeepSeek OR "Nous Research" OR Hermes Agent OR Ollama)', '3d') },
    { name: 'Shiba Media Watchlist', url: googleNews('(HeyGen OR Runway OR Kling OR Seedance OR Suno OR Udio OR "digital human" OR "AI singer")', '3d') },
    { name: 'Shiba Platform Watchlist', url: googleNews('(Instagram OR Threads OR TikTok OR Douyin OR YouTube OR Spotify OR Tencent Music OR NetEase) (API OR algorithm OR policy OR creator)', '3d') },
  ],
};

/**
 * Panel manifest. Most items are feed-backed panels. `shiba-brief`,
 * `shiba-watchlist-hits`, and `shiba-opportunities` are intentionally marked
 * as future custom panels: their data should be enriched by Company OS/Mina.
 */
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'World Intelligence Map', enabled: true, priority: 1 },
  'live-news': { name: 'Breaking Intelligence', enabled: true, priority: 1 },
  'shiba-brief': { name: 'Shiba Executive Brief', enabled: true, priority: 1 },
  watchlist: { name: 'Shiba Watchlist', enabled: true, priority: 1 },
  'ai-models': { name: 'AI Model Radar', enabled: true, priority: 1 },
  'agent-runtimes': { name: 'Agent Runtime Radar', enabled: true, priority: 1 },
  'generative-media': { name: 'Generative Media Radar', enabled: true, priority: 1 },
  'social-platforms': { name: 'Social Platform Radar', enabled: true, priority: 1 },
  'music-industry': { name: 'Music Industry Radar', enabled: true, priority: 1 },
  'china-tech': { name: 'China / Hong Kong Radar', enabled: true, priority: 1 },
  'compute-hardware': { name: 'Compute & Hardware', enabled: true, priority: 2 },
  'creator-economy': { name: 'Creator Economy', enabled: true, priority: 2 },
  'policy-grants': { name: 'Policy & Funding Opportunities', enabled: true, priority: 2 },
  'startup-funding': { name: 'Startup & Capital Radar', enabled: true, priority: 2 },
  'automotive-sim': { name: 'Automotive & Simulation', enabled: true, priority: 3 },
  'shiba-watchlist-hits': { name: 'Watchlist Hits', enabled: true, priority: 1 },
  'shiba-opportunities': { name: 'Shiba Opportunities', enabled: true, priority: 1 },
  security: { name: 'Cybersecurity', enabled: true, priority: 2 },
  policy: { name: 'AI Policy & Regulation', enabled: true, priority: 2 },
  markets: { name: 'Markets', enabled: true, priority: 2 },
};

// Start with the proven tech map topology. Shiba-specific company overlays
// should remain in Company OS rather than leaking private business state into
// the AGPL World Monitor service.
export const DEFAULT_MAP_LAYERS = { ...TECH_DEFAULT_MAP_LAYERS };
export const MOBILE_DEFAULT_MAP_LAYERS = { ...TECH_MOBILE_DEFAULT_MAP_LAYERS };

export const VARIANT_CONFIG: VariantConfig = {
  name: 'shiba',
  description: 'External intelligence radar for Shiba Company OS',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
