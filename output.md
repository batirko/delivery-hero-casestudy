Claude generated.

# Building a Strategy for AI-Assisted Coding at Acme Inc

## TL;DR

AI coding tools have spread organically across Acme's engineering org for 18 months — fast adoption, low value, invisible impact. The problem is not which tool to pick; it is the absence of a system. Three axes are broken simultaneously: no standardised golden path (fragmentation, active IP exposure), no enablement infrastructure (76% daily usage but only 29% fluency), and no feedback loop (leadership cannot steer or prove ROI). The recommendation is a two-tier agentic workspace strategy: GitHub Copilot Enterprise as the governed platform layer (telemetry, security, full IDE breadth including mobile), with Claude Code as the named agentic tier for complex multi-step workflows — plus a governed Hatchway for frontier tools. Invest heavily in enablement in parallel; instrument everything from day one. Success is measured not by licence count but by fluency rate and the productivity signal.

---

## 1. Position the Problem

### Where AI-assisted coding sits in the developer journey

The developer journey at Acme spans six stages: Discover → Plan → Code → Validate → Deploy → Operate. AI coding tools operate primarily at the **Code stage** — autocomplete, agentic code generation, refactoring, and inline Q&A inside the IDE. Their leverage, however, extends upstream and downstream: a well-prompted agent can accelerate ticket decomposition (Plan) and reduce review cycles (Validate) by generating higher-quality first drafts.

The strategic framing is therefore not "IDE productivity" but **engineering velocity** — the rate at which working, quality software moves from intent to production. AI-assisted coding is a multiplier on the most time-intensive stage of that chain.

### The diagnosis: a system problem on three axes

Eighteen months of organic, uncoordinated AI tool adoption has produced a specific failure mode. The data reveals three concurrent breakdowns:

**1. No golden path.** There is no standard, no central guidance, and no approved procurement path. Tools have spread by team preference and individual expense claims, producing at least four distinct toolchains across the org. The consequences are not merely aesthetic: with only ~900 engineers on any trackable tool and 76% reporting daily AI usage, a large population is likely routing proprietary code through consumer-grade, non-enterprise LLM interfaces. IP exposure is not a future risk — it is a present condition.

**2. No enablement infrastructure.** Daily usage is high (76%) but value capture is structurally low: only 41% report meaningful productivity improvement, and only 29% feel they know how to get the most from their tool. This gap is not a tool quality problem — it is a fluency problem. Engineers have access to powerful tools they do not know how to use well. Consolidating onto a single vendor solves nothing here; the same fluency deficit will persist under any tooling decision.

**3. No feedback loop.** There is no instrumentation to measure adoption, usage quality, or productivity impact with any confidence. Leadership cannot determine which tools work, for whom, or whether the aggregate investment is generating return. Without a feedback loop, the strategy cannot self-correct and the investment case cannot be made or defended.

These three axes are mutually reinforcing. Fragmentation makes measurement harder. Poor measurement makes the case for enablement investment harder to make. Weak enablement keeps value low, which undermines confidence in the entire programme.

---

## 2. Vendor Evaluation Framework

### Evaluation criteria and weighting

Six criteria, weighted by Acme's three system breakdowns and the strategic mandate of the role.

| Criterion | Weight | Why this weight |
|-----------|--------|-----------------|
| Security / IP Governance | 20% | Hard gate. Any tool handling internal code must meet data residency and IP protection requirements. Non-negotiable. |
| Enablement & Ecosystem | 20% | 29% fluency is the binding constraint. Weight reflects that tool selection without structured enablement changes nothing. |
| Agentic Capability | 20% | The strategic north star. Inline completion is table stakes; multi-step agent loops, MCP integration, and CLI composability are the forward vector. |
| Visibility / Telemetry | 15% | The feedback loop is broken. Without instrumentation, the investment case cannot be made or defended. |
| IDE Integration & Breadth | 10% | Real mix includes Xcode (iOS) and Android Studio — not just VS Code. Mobile teams currently excluded entirely. |
| Adoption Inertia | 15% | Displacing tools engineers organically chose creates friction. Leveraging existing momentum is faster and cheaper. |

### Scorecard

| Tool | Security | Enablement | Agentic | Visibility | IDE Breadth | Adoption | **Weighted** |
|------|----------|------------|---------|------------|-------------|----------|-------------|
| GitHub Copilot Enterprise | 5 | 4 | 3 | 5 | 5 | 3 | **4.10** |
| Gemini Code Assist | 5 | 4 | 2 | 3 | 3 | 5 | **3.70** |
| Claude Code | 4 | 3 | 5 | 2 | 2 | 4 | **3.50** |
| Cursor (Enterprise) | 3 | 2 | 5 | 2 | 3 | 2 | **2.90** |

### Recommendation: Two-Tier Agentic Workspace + Hatchway

**Tier 1 — Governed Platform Layer: GitHub Copilot Enterprise**

Copilot wins on the three criteria that directly address our system breakdowns: best-in-class telemetry (Copilot Metrics API, solves the feedback loop), widest IDE breadth including Xcode (addresses mobile exclusion), and enterprise security at scale. Critically, Copilot's multi-model support — Claude and Gemini models selectable in-IDE — means the 400 Gemini-happy backend engineers don't lose their preferred model; they change their contract, not their workflow. This is the migration unlock.

Gemini's higher adoption (400 vs. 120) is real but is preserved, not lost, under this approach. The gap between Copilot (4.10) and Gemini (3.70) is driven by visibility, IDE breadth, and agentic trajectory — all three of which compound over time.

**Tier 2 — Agentic Power Layer: Claude Code (Anthropic Enterprise)**

Claude Code scored highest on agentic capability (5/5) and is already the tool platform and frontend engineers chose organically for complex tasks. The strategy would be weaker if it treated this as a problem to suppress. The move: centralise under an Anthropic Enterprise contract (centralised billing, API-level usage tracking, admin controls) rather than changing the tool. Organic adoption is a free product-market fit signal — it already passed.

Claude Code as the named agentic tier directly activates the strategic mandate: building next-gen agentic workspaces. These users also become the primary internal enablement resource for the 4,100.

**Tier 3 — The Hatchway: Governed Exception Process**

A named, governed process for tools outside Tiers 1 and 2. Current candidates: Cursor (~60 users), any self-hosted/open-source alternatives currently untracked, and future frontier tools as they mature. Entry requires: security review passed, telemetry wired up, budget-capped 90-day trial, named engineering lead accountable. Tools operating outside the Hatchway are treated as ungoverned shadow IT.

### What we are not doing

| Not doing | Why |
|-----------|-----|
| Standardising on Gemini despite highest adoption | Solves adoption inertia; fails on visibility, Xcode/mobile, and agentic trajectory |
| Immediate full single-tool mandate | Forces underground adoption; destroys goodwill with the 700 users who chose their tools for real reasons |
| Keeping Cursor as a named tier | Security review risk, weakest telemetry, excludes non-VS Code engineers at unacceptable scale |
| Building custom self-hosted tooling | Engineering cost and velocity risk with no clear advantage over the above |

---

## 3. Strategy

### Enablement and fluency at scale

[The centrepiece. How to close the 29% → majority fluency gap. Concrete mechanisms, not generic training. Forcing functions, shared practices, prompt libraries, internal champions.]

### Driving adoption among the ~3,700 non-users

[Behaviour change framing, not rollout framing. Address the mobile stack gap explicitly.]

### Handling the existing fragmented base

[Pragmatism over policy. Golden path + governed hatchway model. How to bring Gemini and Claude Code teams in without destroying goodwill.]

### Defining and measuring success

[Telemetry plan. Metrics at 3 / 6 / 12 months. Fluency rate as primary signal alongside productivity proxy.]

---

## 4. Risks & Trade-offs

### Primary risks

[Lead with: tool consolidation without enablement investment still yields low value. Then: shadow IT during transition, mobile team exclusion, EM resistance to instrumentation.]

### Explicit trade-offs: what we are not doing

[And why. Full single-tool mandate, big-bang rollout, productivity measurement before tooling is stable.]

---

## Appendix

### AI prompts log

[Prompts used during case study preparation — evaluated separately per brief instructions.]

### Supporting data

[All figures sourced from the Acme Inc case study brief, n=180 survey. No external numbers used unless cited.]
