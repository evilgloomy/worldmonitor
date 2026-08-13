// Shiba watchlist / signal scaffold.
//
// This file is intentionally not wired into runtime behavior yet. It captures
// the external entities, signal types and monitoring priorities the Shiba
// Intelligence variant should use once Codex implements the watchlist engine.
//
// Keep private Company OS strategy out of this file. This is a public-source
// sensor configuration only.

export type ShibaWatchPriority = 'critical' | 'high' | 'normal';
export type ShibaSourcePreference = 'primary' | 'primary-plus-discovery' | 'discovery';

export interface ShibaWatchItem {
  id: string;
  label: string;
  aliases: readonly string[];
  domains: readonly string[];
  priority: ShibaWatchPriority;
  sourcePreference: ShibaSourcePreference;
  signals: readonly string[];
}

export interface ShibaSignalDefinition {
  id: string;
  label: string;
  defaultPriority: ShibaWatchPriority;
  description: string;
  actionHint: 'archive' | 'watch' | 'review' | 'action' | 'escalate';
}

export const SHIBA_SIGNAL_DEFINITIONS: readonly ShibaSignalDefinition[] = [
  {
    id: 'model-release',
    label: 'Model release',
    defaultPriority: 'high',
    description: 'New or materially upgraded AI model, modality, context, tool-use or inference capability.',
    actionHint: 'review',
  },
  {
    id: 'runtime-release',
    label: 'Runtime / framework release',
    defaultPriority: 'high',
    description: 'Agent runtime, local inference, workflow or infrastructure release relevant to Shiba operations.',
    actionHint: 'review',
  },
  {
    id: 'breaking-api-change',
    label: 'Breaking API change',
    defaultPriority: 'critical',
    description: 'API deprecation, authentication change, permission change or breaking integration behavior.',
    actionHint: 'action',
  },
  {
    id: 'security-advisory',
    label: 'Security advisory',
    defaultPriority: 'critical',
    description: 'Security issue affecting a runtime, model server, social integration or other deployed dependency.',
    actionHint: 'escalate',
  },
  {
    id: 'price-change',
    label: 'Material price change',
    defaultPriority: 'high',
    description: 'Meaningful price or plan change for infrastructure, media generation, SaaS or compute.',
    actionHint: 'review',
  },
  {
    id: 'platform-algorithm-change',
    label: 'Platform distribution change',
    defaultPriority: 'high',
    description: 'Algorithm, recommendation, ranking or distribution changes affecting audience growth.',
    actionHint: 'review',
  },
  {
    id: 'creator-monetization-change',
    label: 'Creator monetization change',
    defaultPriority: 'high',
    description: 'New or changed monetization, revenue share, eligibility, commerce or creator incentive program.',
    actionHint: 'review',
  },
  {
    id: 'content-policy-change',
    label: 'Content policy change',
    defaultPriority: 'critical',
    description: 'Policy or moderation change affecting AI content, synthetic media, music, creators or advertising.',
    actionHint: 'action',
  },
  {
    id: 'ai-disclosure-rule',
    label: 'AI / synthetic-media disclosure rule',
    defaultPriority: 'critical',
    description: 'Platform or government disclosure requirement for AI-generated or synthetic media.',
    actionHint: 'action',
  },
  {
    id: 'platform-outage',
    label: 'Platform outage',
    defaultPriority: 'normal',
    description: 'Material service disruption affecting publishing, analytics, audience or authentication.',
    actionHint: 'watch',
  },
  {
    id: 'music-royalty-change',
    label: 'Music royalty / payout change',
    defaultPriority: 'high',
    description: 'Changes to royalty formulas, payout thresholds, licensing or artist monetization.',
    actionHint: 'review',
  },
  {
    id: 'music-discovery-change',
    label: 'Music discovery change',
    defaultPriority: 'high',
    description: 'Editorial, recommendation, playlist, short-video or discovery program change.',
    actionHint: 'review',
  },
  {
    id: 'funding-program',
    label: 'Funding / grant opportunity',
    defaultPriority: 'high',
    description: 'Relevant grant, innovation, media, music, technology or startup funding opportunity.',
    actionHint: 'review',
  },
  {
    id: 'funding-deadline',
    label: 'Funding deadline',
    defaultPriority: 'critical',
    description: 'Closing date or intake deadline for a potentially relevant funding program.',
    actionHint: 'escalate',
  },
  {
    id: 'regulatory-change',
    label: 'Regulatory change',
    defaultPriority: 'critical',
    description: 'Law, regulation or regulator guidance affecting AI, media, music, data, social platforms or business operations.',
    actionHint: 'escalate',
  },
  {
    id: 'copyright-licensing-change',
    label: 'Copyright / licensing change',
    defaultPriority: 'critical',
    description: 'Material copyright, training-data, synthetic voice, likeness or music-licensing development.',
    actionHint: 'escalate',
  },
  {
    id: 'funding-round',
    label: 'Funding round / valuation',
    defaultPriority: 'normal',
    description: 'Comparable startup financing, valuation or strategic investment signal.',
    actionHint: 'watch',
  },
  {
    id: 'merger-acquisition',
    label: 'M&A / acquisition',
    defaultPriority: 'high',
    description: 'Acquisition or consolidation that may change a vendor, competitor or platform landscape.',
    actionHint: 'review',
  },
  {
    id: 'hardware-release',
    label: 'Compute hardware release',
    defaultPriority: 'high',
    description: 'GPU, accelerator, Apple Silicon, memory or inference-hardware release relevant to local or distributed compute.',
    actionHint: 'review',
  },
  {
    id: 'hardware-price-availability',
    label: 'Hardware price / availability',
    defaultPriority: 'normal',
    description: 'Meaningful change to AI hardware price, availability or supply constraints.',
    actionHint: 'watch',
  },
  {
    id: 'inference-efficiency',
    label: 'Inference efficiency improvement',
    defaultPriority: 'high',
    description: 'Quantization, runtime, context, batching or acceleration change that can materially improve local inference.',
    actionHint: 'review',
  },
  {
    id: 'media-quality-jump',
    label: 'Generative-media quality jump',
    defaultPriority: 'high',
    description: 'Material improvement in video, image, avatar, voice or music generation quality/cost/speed.',
    actionHint: 'review',
  },
  {
    id: 'social-commerce-change',
    label: 'Social commerce change',
    defaultPriority: 'normal',
    description: 'New commerce, affiliate, shop or creator-sales capability on a major platform.',
    actionHint: 'watch',
  },
  {
    id: 'automotive-simulation-release',
    label: 'Automotive / simulation technology',
    defaultPriority: 'normal',
    description: 'Vehicle simulation, dynamics, digital-twin, simulator or motorsport technology development.',
    actionHint: 'watch',
  },
];

export const SHIBA_WATCH_ITEMS: readonly ShibaWatchItem[] = [
  // Frontier / model providers
  {
    id: 'openai',
    label: 'OpenAI',
    aliases: ['OpenAI', 'ChatGPT', 'GPT'],
    domains: ['ai-models', 'agent-runtimes'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: ['model-release', 'breaking-api-change', 'price-change', 'security-advisory'],
  },
  {
    id: 'anthropic',
    label: 'Anthropic',
    aliases: ['Anthropic', 'Claude'],
    domains: ['ai-models', 'agent-runtimes'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['model-release', 'breaking-api-change', 'price-change'],
  },
  {
    id: 'google-deepmind',
    label: 'Google DeepMind / Gemini',
    aliases: ['Google DeepMind', 'Gemini', 'Google AI'],
    domains: ['ai-models', 'generative-media'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['model-release', 'media-quality-jump', 'breaking-api-change'],
  },
  {
    id: 'qwen',
    label: 'Alibaba Qwen',
    aliases: ['Qwen', 'QwenLM', 'Alibaba AI'],
    domains: ['ai-models', 'china-tech'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: ['model-release', 'inference-efficiency', 'breaking-api-change'],
  },
  {
    id: 'deepseek',
    label: 'DeepSeek',
    aliases: ['DeepSeek'],
    domains: ['ai-models', 'china-tech'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['model-release', 'inference-efficiency'],
  },
  {
    id: 'bytedance-ai',
    label: 'ByteDance AI',
    aliases: ['ByteDance AI', 'Seedance', 'Doubao'],
    domains: ['ai-models', 'generative-media', 'china-tech'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['model-release', 'media-quality-jump', 'price-change'],
  },
  {
    id: 'nous-research',
    label: 'Nous Research',
    aliases: ['Nous Research', 'Hermes Agent'],
    domains: ['ai-models', 'agent-runtimes'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: ['model-release', 'runtime-release', 'security-advisory'],
  },

  // Agent/runtime infrastructure
  {
    id: 'hermes-agent',
    label: 'Hermes Agent',
    aliases: ['Hermes Agent', 'Nous Hermes'],
    domains: ['agent-runtimes'],
    priority: 'critical',
    sourcePreference: 'primary',
    signals: ['runtime-release', 'breaking-api-change', 'security-advisory'],
  },
  {
    id: 'ollama',
    label: 'Ollama',
    aliases: ['Ollama'],
    domains: ['agent-runtimes', 'compute-hardware'],
    priority: 'critical',
    sourcePreference: 'primary',
    signals: ['runtime-release', 'inference-efficiency', 'security-advisory', 'breaking-api-change'],
  },
  {
    id: 'postiz',
    label: 'Postiz',
    aliases: ['Postiz'],
    domains: ['agent-runtimes', 'social-platforms'],
    priority: 'high',
    sourcePreference: 'primary',
    signals: ['runtime-release', 'breaking-api-change', 'security-advisory'],
  },
  {
    id: 'plane',
    label: 'Plane',
    aliases: ['Plane', 'Plane.so'],
    domains: ['agent-runtimes'],
    priority: 'high',
    sourcePreference: 'primary',
    signals: ['runtime-release', 'breaking-api-change', 'security-advisory'],
  },
  {
    id: 'comfyui',
    label: 'ComfyUI',
    aliases: ['ComfyUI'],
    domains: ['generative-media', 'agent-runtimes'],
    priority: 'high',
    sourcePreference: 'primary',
    signals: ['runtime-release', 'breaking-api-change', 'security-advisory', 'media-quality-jump'],
  },

  // Media generation
  {
    id: 'heygen',
    label: 'HeyGen',
    aliases: ['HeyGen'],
    domains: ['generative-media'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: ['media-quality-jump', 'breaking-api-change', 'price-change', 'content-policy-change'],
  },
  {
    id: 'runway',
    label: 'Runway',
    aliases: ['Runway', 'RunwayML'],
    domains: ['generative-media'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['media-quality-jump', 'model-release', 'price-change'],
  },
  {
    id: 'kling',
    label: 'Kling AI',
    aliases: ['Kling', 'Kling AI', 'Kuaishou Kling'],
    domains: ['generative-media', 'china-tech'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['media-quality-jump', 'model-release', 'price-change'],
  },
  {
    id: 'suno',
    label: 'Suno',
    aliases: ['Suno', 'Suno AI'],
    domains: ['generative-media', 'music-industry'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['model-release', 'media-quality-jump', 'copyright-licensing-change', 'price-change'],
  },
  {
    id: 'udio',
    label: 'Udio',
    aliases: ['Udio'],
    domains: ['generative-media', 'music-industry'],
    priority: 'normal',
    sourcePreference: 'primary-plus-discovery',
    signals: ['model-release', 'media-quality-jump', 'copyright-licensing-change'],
  },

  // Social platforms
  {
    id: 'meta-platforms',
    label: 'Meta / Instagram / Threads / Facebook',
    aliases: ['Meta', 'Instagram', 'Threads', 'Facebook'],
    domains: ['social-platforms', 'creator-economy'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: [
      'breaking-api-change',
      'platform-algorithm-change',
      'creator-monetization-change',
      'content-policy-change',
      'ai-disclosure-rule',
      'platform-outage',
      'social-commerce-change',
    ],
  },
  {
    id: 'tiktok-douyin',
    label: 'TikTok / Douyin',
    aliases: ['TikTok', 'Douyin', 'ByteDance'],
    domains: ['social-platforms', 'china-tech', 'creator-economy'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: [
      'breaking-api-change',
      'platform-algorithm-change',
      'creator-monetization-change',
      'content-policy-change',
      'ai-disclosure-rule',
      'platform-outage',
      'social-commerce-change',
    ],
  },
  {
    id: 'youtube',
    label: 'YouTube',
    aliases: ['YouTube', 'YouTube Shorts'],
    domains: ['social-platforms', 'creator-economy', 'music-industry'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: [
      'breaking-api-change',
      'platform-algorithm-change',
      'creator-monetization-change',
      'content-policy-change',
      'ai-disclosure-rule',
      'platform-outage',
    ],
  },

  // Music platforms
  {
    id: 'spotify',
    label: 'Spotify',
    aliases: ['Spotify', 'Spotify for Artists'],
    domains: ['music-industry'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: ['music-royalty-change', 'music-discovery-change', 'content-policy-change', 'ai-disclosure-rule'],
  },
  {
    id: 'apple-music',
    label: 'Apple Music',
    aliases: ['Apple Music', 'Apple Music for Artists'],
    domains: ['music-industry'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['music-royalty-change', 'music-discovery-change', 'content-policy-change'],
  },
  {
    id: 'tencent-music',
    label: 'Tencent Music / QQ Music',
    aliases: ['Tencent Music', 'TME', 'QQ Music'],
    domains: ['music-industry', 'china-tech'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: ['music-royalty-change', 'music-discovery-change', 'content-policy-change', 'regulatory-change'],
  },
  {
    id: 'netease-music',
    label: 'NetEase Cloud Music',
    aliases: ['NetEase Cloud Music', 'NetEase Music'],
    domains: ['music-industry', 'china-tech'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: ['music-royalty-change', 'music-discovery-change', 'content-policy-change', 'regulatory-change'],
  },

  // Compute / hardware
  {
    id: 'nvidia',
    label: 'NVIDIA',
    aliases: ['NVIDIA', 'GeForce', 'RTX', 'CUDA'],
    domains: ['compute-hardware'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: ['hardware-release', 'hardware-price-availability', 'inference-efficiency', 'security-advisory'],
  },
  {
    id: 'amd',
    label: 'AMD',
    aliases: ['AMD', 'Radeon', 'ROCm'],
    domains: ['compute-hardware'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['hardware-release', 'hardware-price-availability', 'inference-efficiency'],
  },
  {
    id: 'apple-silicon',
    label: 'Apple Silicon / Mac Studio',
    aliases: ['Apple Silicon', 'Mac Studio', 'M-series', 'Metal'],
    domains: ['compute-hardware'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['hardware-release', 'hardware-price-availability', 'inference-efficiency'],
  },
  {
    id: 'tsmc-hbm',
    label: 'TSMC / HBM supply',
    aliases: ['TSMC', 'HBM', 'high bandwidth memory'],
    domains: ['compute-hardware'],
    priority: 'normal',
    sourcePreference: 'primary-plus-discovery',
    signals: ['hardware-price-availability'],
  },

  // Regulatory / funding geographies
  {
    id: 'canada-funding-policy',
    label: 'Canada funding / AI-media policy',
    aliases: ['Canada', 'Canadian', 'Government of Canada'],
    domains: ['policy-grants'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['funding-program', 'funding-deadline', 'regulatory-change', 'copyright-licensing-change'],
  },
  {
    id: 'bc-funding-policy',
    label: 'British Columbia funding / policy',
    aliases: ['British Columbia', 'BC', 'Creative BC'],
    domains: ['policy-grants'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['funding-program', 'funding-deadline', 'regulatory-change'],
  },
  {
    id: 'hong-kong-funding-policy',
    label: 'Hong Kong funding / policy',
    aliases: ['Hong Kong', 'HKSAR'],
    domains: ['policy-grants', 'china-tech'],
    priority: 'high',
    sourcePreference: 'primary-plus-discovery',
    signals: ['funding-program', 'funding-deadline', 'regulatory-change'],
  },
  {
    id: 'china-ai-media-policy',
    label: 'China AI / synthetic-media policy',
    aliases: ['China', 'PRC', 'CAC', 'Cyberspace Administration of China'],
    domains: ['china-tech', 'policy-grants'],
    priority: 'critical',
    sourcePreference: 'primary-plus-discovery',
    signals: ['regulatory-change', 'ai-disclosure-rule', 'content-policy-change', 'copyright-licensing-change'],
  },
];

export const SHIBA_WATCHLIST_PRIORITY_CADENCE = {
  critical: 15 * 60 * 1000,
  high: 60 * 60 * 1000,
  normal: 6 * 60 * 60 * 1000,
} as const;

export const SHIBA_SOURCE_POLICY = {
  primary: {
    description: 'Official release notes, developer changelogs, regulator/program pages, official GitHub releases or first-party announcements.',
    confidenceFloor: 'high',
  },
  'primary-plus-discovery': {
    description: 'Prefer primary sources; use reputable media / search discovery to detect changes that first-party feeds do not expose cleanly.',
    confidenceFloor: 'medium',
  },
  discovery: {
    description: 'Discovery-only signal. Consequential claims require source verification before Company OS action or escalation.',
    confidenceFloor: 'low',
  },
} as const;
