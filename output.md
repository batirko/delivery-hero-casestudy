Claude generated.

# Building a Strategy for AI-Assisted Coding at Acme Inc

## TL;DR

AI coding tools have spread organically across Acme's engineering org for 18 months — fast adoption, low value, invisible impact. The problem is not which tool to pick; it is the absence of a system. Three axes are broken simultaneously: no standardised golden path (fragmentation, active IP exposure), no enablement infrastructure (76% daily usage but only 29% fluency), and no feedback loop (leadership cannot steer or prove ROI). The recommendation is a two-tier agentic workspace strategy: GitHub Copilot Enterprise as the governed platform layer (telemetry, security, full IDE breadth including mobile), with Claude Code as the named agentic tier for complex multi-step workflows — plus a governed Hatchway for frontier tools. Invest heavily in enablement in parallel; instrument everything from day one. Success is measured not by licence count but by fluency rate and the productivity signal.

---

## 1. Position the Problem

### Where AI-assisted coding sits in the developer journey

The developer journey at Acme spans six stages: Discover → Plan → Code → Validate → Deploy → Operate. AI coding tools operate primarily at the **Code stage** — autocomplete, agentic code generation, refactoring, and inline Q\&A inside the IDE. Their leverage, however, extends upstream and downstream: a well-prompted agent can accelerate ticket decomposition (Plan) and reduce review cycles (Validate) by generating higher-quality first drafts.

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

| Criterion                 | Weight | Why this weight                                                                                                                                     |
| ------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security / IP Governance  | 20%    | Hard gate. Any tool handling internal code must meet data residency and IP protection requirements. Non-negotiable.                                 |
| Enablement & Ecosystem    | 20%    | 29% fluency is the binding constraint. Weight reflects that tool selection without structured enablement changes nothing.                           |
| Agentic Capability        | 20%    | The strategic north star. Inline completion is table stakes; multi-step agent loops, MCP integration, and CLI composability are the forward vector. |
| Visibility / Telemetry    | 15%    | The feedback loop is broken. Without instrumentation, the investment case cannot be made or defended.                                               |
| IDE Integration & Breadth | 10%    | Real mix includes Xcode (iOS) and Android Studio — not just VS Code. Mobile teams currently excluded entirely.                                      |
| Adoption Inertia          | 15%    | Displacing tools engineers organically chose creates friction. Leveraging existing momentum is faster and cheaper.                                  |

### Scorecard

| Tool                      | Security | Enablement | Agentic | Visibility | IDE Breadth | Adoption | **Weighted** |
| ------------------------- | -------- | ---------- | ------- | ---------- | ----------- | -------- | ------------ |
| GitHub Copilot Enterprise | 5        | 4          | 3       | 5          | 5           | 3        | **4.10**     |
| Gemini Code Assist        | 5        | 4          | 2       | 3          | 3           | 5        | **3.70**     |
| Claude Code               | 4        | 3          | 5       | 2          | 2           | 4        | **3.50**     |
| Cursor (Enterprise)       | 3        | 2          | 5       | 2          | 3           | 2        | **2.90**     |

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

| Not doing                                        | Why                                                                                                      |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Standardising on Gemini despite highest adoption | Solves adoption inertia; fails on visibility, Xcode/mobile, and agentic trajectory                       |
| Immediate full single-tool mandate               | Forces underground adoption; destroys goodwill with the 700 users who chose their tools for real reasons |
| Keeping Cursor as a named tier                   | Security review risk, weakest telemetry, excludes non-VS Code engineers at unacceptable scale            |
| Building custom self-hosted tooling              | Engineering cost and velocity risk with no clear advantage over the above                                |

---

## 3. Strategy

### Enablement and fluency at scale

The 29% fluency figure is the binding constraint — it persists regardless of which tools are selected. Solving the golden path without solving fluency produces a governed version of the same low-value state.

**Infrastructure layer.** A self-service IDP page is the default starting point for any engineer onboarding to AI tooling — new hires, teams adopting a tool for the first time, and any Hatchway access request. Minimum viable: a curated guide with references to approved tools, prompt libraries, and MCP configurations. Target state: self-service provisioning via template (approved tool access, pre-configured IDE settings, relevant prompts for the team's stack). Where no IDP exists, a curated repository serves as the fallback. In both cases, a skill/MCP layer provides the same resources as an agentic interface — accessible from within the IDE or CLI, not requiring a context switch to a browser.

**Social layer.** Knowledge-sharing sessions, best-practice guides, and internal case studies function as supporting signal — not the primary mechanism. Claude Code power users, recruited as internal advocates (see below), create pull through peer demonstration rather than top-down mandate.

Ownership sits with platform engineering. The PM role sets direction, defines the resource taxonomy, and owns the success metrics; platform engineers build and maintain the infrastructure.

### Driving adoption among the ~3,700 non-users

The framing matters: a significant share of engineers currently outside the tracked toolset are likely **shadow users** — accessing AI assistance through ungoverned channels that are not tracked and may be exposing IP. The goal is migration from ungoverned to governed, not recruitment from zero.

**Rollout sequence.** Power users and early adopters first — validate that the governed platform is not creating friction where value already exists. Then: engineers currently using AI tools but reporting low satisfaction — highest-value conversion targets. Then full rollout with supporting comms.

**Mobile engineers.** Previously excluded by tooling gaps. Copilot's Xcode and Android Studio support closes this. From day one, the IDP includes mobile-specific resources: Swift and Kotlin prompt packs, mobile testing patterns, relevant MCP configurations. The behaviour change hook is a peer showcase — a mobile engineer demonstrating a real Xcode workflow, not a top-down announcement. Mobile engineers join the same rollout cohort but are tracked as a distinct segment to confirm the mobile-specific resources are landing.

### Handling the existing fragmented base

**Near-term, before the platform is ready.** Issue policy comms to all existing AI tool users: a simple, clear message on what not to paste into any AI tool while governance is being stood up. Low-cost, immediate, and directly addresses the known IP exposure window.

**Gemini users (~400).** Migration to Copilot is framed around organisational benefit — standardised tooling, consolidated telemetry, network effect from a shared platform. The practical reassurance: Copilot is multi-model. Gemini users change their contract, not their workflow. Their preferred model remains available; what changes is the governance layer around it.

**Claude Code users (~300).** Organic early adopters on the highest-capability agentic tier. Not a problem to suppress — the primary internal enablement resource. Centralise under an Anthropic Enterprise contract (billing, admin controls, API-level usage tracking). Run dedicated showcase sessions where these engineers demonstrate their setups and agentic workflows. They become advocates, not detractors.

**Cursor users (~60).** Not banned. Removed from the golden path. Access requires a Hatchway request — state the case, pass security review, 90-day capped trial, named engineering lead accountable. This is the standard model for all tools outside the two tiers.

### Defining and measuring success

**Prerequisite (days 0–60).** Wire up the Copilot Metrics API and establish a PR cycle time baseline before the first rollout wave. Without the baseline, the 12-month productivity signal is unmeasurable. This is a sequencing dependency, not a nice-to-have.

**3 months.** No significant regression in usage among existing active users. At least 50% of existing active users migrated to the governed platform. Telemetry live and reporting.

**6 months.** Fluency rate measured via pulse survey and compared against the 29% baseline — target directional improvement. Usage analytics (feature depth, variety of capabilities used) serve as the behavioural counterpart to self-report. Neither alone is sufficient.

**12 months.** Increased feature velocity without quality regression — PR volume and average PR cycle time against the established baseline. These are proxies; they require paired qualitative signal (engineering manager surveys) to interpret correctly.

**Ownership.** Engineering leadership is accountable for the programme. The PM role drives execution — roadmap, resource taxonomy, metric definitions, and stakeholder reporting.

---

## 4. Risks & Trade-offs

### Primary risks

**Tool consolidation without enablement still yields low value.** The vendor recommendation solves governance and measurement. It does not move the 29% fluency number. If the enablement infrastructure is delayed or de-prioritised, the outcome is a better-instrumented version of the same low-value state.

**Shadow IT during the transition window.** Between policy comms and full platform readiness, engineers will continue using ungoverned tools. The interim comms reduces but does not eliminate this. Treat it as a known, time-bounded exposure, not a solved problem.

**Mobile exclusion if mobile-specific resources are not ready at launch.** If the IDP launches without Swift/Kotlin prompt packs and mobile-tested MCP configurations, mobile engineers will adopt generic patterns or not adopt at all. The mobile resource pack is a launch dependency.

**Engineering manager resistance to instrumentation.** Telemetry can feel like surveillance. Instrument tools, not individuals. Establish aggregate team-level reporting, not individual tracking. Set this framing early or lose EM cooperation.

**Budget uncertainty.** The two-tier recommendation carries concurrent contract costs. Phased contracting is the mitigation: Copilot Enterprise first (broadest coverage, highest telemetry value), Anthropic Enterprise follows once the pilot proves value. Actual sequencing depends on budget clarity not available in the brief.

### Explicit trade-offs: what we are not doing

| Not doing | Why |
| --------- | --- |
| Full single-tool mandate from day one | Forces underground adoption; destroys goodwill with engineers who chose their tools for real reasons |
| Big-bang rollout to all ~5,000 engineers | Creates unmanageable support load; no signal on what's working before it's too late to course-correct |
| Productivity measurement before tooling is stable | Measuring during a transition produces noise, not signal; establishes a false baseline |
| Banning Cursor outright | Generates resentment without addressing the underlying need; the Hatchway handles it cleanly |
| Building custom self-hosted tooling | Engineering cost and velocity risk with no clear advantage over the recommended tiers |

---

## Appendix

### AI prompts log

[Prompts used during case study preparation — evaluated separately per brief instructions.]

### Supporting data

[All figures sourced from the Acme Inc case study brief, n=180 survey. No external numbers used unless cited.]
