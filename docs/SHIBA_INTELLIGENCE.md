# Shiba Intelligence — World Monitor Integration Plan

Status: prototype design / implementation scaffold

This document defines how the Shiba Company OS prototype should use the
self-hosted World Monitor fork as its external-intelligence sensor layer.

## Core boundary

World Monitor answers:

> What is changing outside Shiba?

Company OS answers:

> What is true inside Shiba?

Mina/Hermes answers:

> Does the external change matter to Shiba, and what should we do about it?

Plane answers:

> What concrete work now exists because of that decision?

World Monitor MUST NOT become authoritative for Shiba business state. Company
OS MUST NOT reimplement World Monitor's collection, feed normalization, maps,
correlation, or external intelligence pipelines.

## Target topology

```text
External sources
      ↓
World Monitor (self-hosted)
      ↓ API / MCP
Hermes Mina ─────────── Company OS MCP
      │                     │
      └──── interpretation ─┘
                ↓
              Plane
                ↓
      engineering / marketing / ops
```

World Monitor should remain a separately running AGPL service. Proprietary
Shiba context stays in Company OS.

## Shiba World Monitor variant

The fork should eventually expose a `shiba` variant beside the existing world,
tech, finance, commodity, energy and happy variants.

The initial feed/panel scaffold lives in:

`src/config/variants/shiba.ts`

It is deliberately unregistered until runtime installation and integration
work can be tested locally.

## P0 panels — build first

### 1. Shiba Executive Brief

Purpose: one compact summary of external developments that may matter today.

World Monitor supplies:
- major developing events
- AI/tech changes
- platform/API changes
- market/risk signals
- watchlist hits

Company OS/Mina adds:
- affected Shiba project/entity
- relevance
- urgency
- opportunity/threat classification
- recommended action
- Plane work item if action is approved/appropriate

This panel should NOT receive private Company OS data directly inside the
World Monitor process. Prefer a Company OS-rendered panel/card that consumes
World Monitor output, or a narrow sanitized enrichment endpoint.

### 2. AI Model Radar

Monitor:
- frontier model releases
- open/local model releases
- Qwen / DeepSeek / Chinese model ecosystem
- context-window changes
- tool-use / agent capability changes
- multimodal capability
- inference/quantization improvements
- benchmark changes that could affect local model selection

Useful fields:
- model/provider
- release date
- parameter class where known
- context length
- modalities
- local/cloud
- licensing signal
- hardware requirement signal
- agent/tool-use signal
- source tier

### 3. Agent Runtime Radar

Monitor:
- Hermes Agent
- MCP ecosystem
- major agent runtime/framework releases
- Ollama
- ComfyUI
- Postiz
- Plane
- World Monitor upstream
- other infrastructure that may replace or improve Shiba components

High-value event classes:
- new release
- security advisory
- breaking config/API change
- performance improvement
- new MCP/tool capability
- migration/deprecation

### 4. Generative Media Radar

Monitor:
- AI video
- AI avatars/digital humans
- image generation
- AI music
- voice/synthetic media

Priority products/ecosystems include:
- HeyGen
- Runway
- Sora
- Veo
- Kling
- Seedance
- Hunyuan Video
- Suno
- Udio

Useful event classes:
- model release
- API availability
- price change
- commercial licensing
- quality/performance jump
- platform policy
- synthetic-media regulation

### 5. Social Platform Radar

Monitor:
- Instagram
- Threads
- Facebook
- TikTok
- Douyin
- YouTube

Important signals:
- algorithm/distribution changes
- API changes
- creator monetization
- posting limits/formats
- policy/moderation changes
- AI content disclosure
- social commerce
- advertising changes
- outages

### 6. Music Industry Radar

Monitor:
- Spotify
- Apple Music
- Tencent Music
- QQ Music
- NetEase Cloud Music
- Douyin music ecosystem
- labels/distributors
- AI music regulation/licensing

Important signals:
- royalty/payment changes
- recommendation/discovery changes
- AI content policy
- editorial/platform program changes
- creator/artist tools
- market growth
- licensing/copyright changes

### 7. China / Hong Kong Radar

Monitor external developments most relevant to operating across China/Hong
Kong and western markets:
- AI regulation
- synthetic media rules
- platform policy
- digital-content regulation
- Chinese AI releases
- creator economy
- music/entertainment platform changes
- Hong Kong technology/media ecosystem

### 8. Compute & Hardware Radar

Monitor:
- NVIDIA
- AMD
- Apple Silicon
- TSMC/HBM/semiconductor supply
- GPU availability/pricing signals
- local-inference software
- AI datacenter economics
- inference-performance improvements

This panel should help answer:

> Is there a materially better/cheaper way to run Mina or Shiba workloads?

## P1 panels — add after P0 works

### Creator Economy

Signals:
- monetization models
- brand deals
- creator tools
- social commerce
- virtual influencers
- creator AI platforms

### Policy & Funding Opportunities

Monitor:
- Canadian AI/media/innovation programs
- British Columbia programs
- Hong Kong technology/creative/startup programs
- synthetic-media policy
- AI disclosure/copyright

This is an opportunity detector, not an eligibility decision engine. Mina must
verify primary program sources before creating consequential grant plans.

### Startup & Capital Radar

Monitor:
- AI funding
- agent startups
- creator/media tech
- M&A
- valuations
- comparable rounds

Potential use:
- fundraising comparables
- competitor tracking
- partnership/acquisition opportunities

### Automotive & Simulation

Monitor:
- sim racing
- driving simulation
- vehicle dynamics/simulation
- motorsport technology
- automotive AI/digital twins

## P2 panels — only if usage proves value

- 3D printing / maker ecosystem
- design/architecture software
- retail/e-commerce tooling
- travel/logistics intelligence
- broader consumer trend tracking

Do not build these merely because data exists.

## Watchlists

World Monitor should support compact Shiba watchlists for:

### Companies / labs
- OpenAI
- Anthropic
- Google DeepMind
- Meta AI
- Alibaba/Qwen
- DeepSeek
- ByteDance
- Tencent
- MiniMax
- Moonshot AI
- Zhipu AI
- Nous Research
- NVIDIA
- AMD
- Apple
- Spotify
- Tencent Music
- NetEase
- HeyGen
- Runway
- Suno
- Udio

### Runtime / OSS projects
- Hermes Agent
- Ollama
- ComfyUI
- Postiz
- Plane
- World Monitor

### Markets
- Canada
- Hong Kong
- China
- Japan
- United States

### Themes
- digital human
- AI singer
- virtual idol
- AI music
- AI video
- agent framework
- local inference
- creator monetization
- social algorithm changes
- social API changes

Keep watchlists deliberately small. Their job is high-signal filtering, not
replacing World Monitor's broad discovery feeds.

## Information contract

World Monitor should expose normalized observations with as much of the
following as is available:

```text
id
headline/title
source
source tier/type
publishedAt
observedAt
domain/category
entities
geography
url
summary/excerpt
correlation/signal metadata
freshness
confidence/source-quality metadata
```

Company OS/Mina enrichment should be separate:

```text
shibaRelevance
affectedEntities
affectedProjects
impact
urgency
opportunityOrThreat
reasoningSummary
recommendedAction
planeWorkItemId
reviewedAt
```

## Shiba relevance model

Do not ask World Monitor itself to know private Shiba strategy.

A future Company OS intelligence adapter can score an observation using:

- entity/project match
- market/geography match
- current-objective match
- likely business impact
- urgency/time sensitivity
- source confidence
- actionability

Suggested output bands:

- `IGNORE` — archive/searchable only
- `WATCH` — keep visible on watchlist
- `REVIEW` — Mina should inspect
- `ACTION` — likely merits Plane work
- `ESCALATE` — Hyde should be notified

The implementation should avoid pretending that a single opaque numerical
score is truth. Preserve the reasons/signals that produced the classification.

## Token-efficiency goal

The intelligence pipeline exists partly to avoid repeated broad web research.

Preferred escalation ladder:

```text
World Monitor structured signal
        ↓
local Qwen relevance filter
        ↓ only if material
source verification / deeper research
        ↓ only if high-value judgment
Sol/frontier reasoning
```

Most observations should stop before expensive deep research or frontier
inference.

## Company OS dashboard integration

Do not iframe World Monitor as the primary Company OS experience.

Company OS should cherry-pick executive information into its own interface:

### Intelligence summary
- global risk state
- major external developments
- number of Shiba-relevant signals
- number requiring review/action

### Shiba exposure
- affected venture/project
- impact
- confidence
- urgency

### Opportunities
- market/content/funding/technology opportunities

### Threats
- platform/policy/infrastructure/market threats

### Actions
- related Plane work
- status
- owner/agent

Provide an `Open Full World Monitor` action for the complete map and detailed
panels.

## Plane integration

When Mina determines an external signal merits work:

```text
World Monitor observation
→ Mina verifies relevance
→ Company OS records intelligence decision if meaningful
→ Plane issue/work item created
→ agent/human executes
→ verification
→ Plane closed
```

Do not auto-create Plane work from every feed item. Require an explicit
relevance/actionability threshold and deduplication.

## Proposed first autonomous intelligence job

`Shiba Morning Intelligence Brief`

1. Query fresh high-priority World Monitor signals.
2. Query Company OS current objectives/projects.
3. Qwen filters for relevance.
4. Verify primary sources for consequential items.
5. Delegate difficult synthesis to Sol only where useful.
6. Create/update Plane work only for actionable items.
7. Send Hyde a concise brief containing:
   - what changed
   - why it matters
   - what Mina already did
   - what needs Hyde

## Implementation phases

### Phase A — safe scaffold (current)
- `shiba.ts` feed/watchlist/panel manifest
- this design document
- no variant registration yet
- no runtime behavior changed

### Phase B — World Monitor runtime
- install self-hosted World Monitor under Shiba Runtime
- loopback-only endpoint
- health/restart/reboot certification
- update fork from upstream cleanly

### Phase C — Shiba variant
- register `shiba` in variant system
- add variant metadata/dashboard definitions
- wire feed-backed panels
- add localization strings
- add tests/docs stats

### Phase D — custom panels
- Shiba Watchlist Hits
- Shiba Executive Brief
- Opportunities

Where proprietary Company OS context is required, render/enrich in Company OS
rather than embedding private state inside World Monitor.

### Phase E — Hermes/Mina
- World Monitor MCP/API read access
- bounded read-only toolset
- morning intelligence skill/cron
- source verification policy

### Phase F — Company OS executive UI
- Intelligence page
- executive cards
- exposure/opportunity/action views
- link to full World Monitor

## Acceptance criteria

The integration is successful when:

1. World Monitor runs independently as a self-hosted service.
2. Upstream World Monitor remains updateable without large merge conflicts.
3. `shiba` variant surfaces our priority external domains.
4. Mina can query World Monitor without broad web browsing for routine scans.
5. Company OS can show selected intelligence in Shiba's own UI.
6. Private Company OS data does not leak into the World Monitor service.
7. Mina creates Plane work only from evidence-backed actionable signals.
8. High-impact claims can be traced back to sources.
9. The system reduces token/research overhead versus repeated raw web search.
10. World Monitor remains a sensor; Company OS remains company truth.
