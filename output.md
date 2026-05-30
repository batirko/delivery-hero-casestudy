Claude generated.

# Building a Strategy for AI-Assisted Coding at Acme Inc

## TL;DR

AI coding tools have spread organically across Acme's engineering org for 18 months — fast adoption, low value, invisible impact. The problem is not which tool to pick; it is the absence of a system. Three axes are broken simultaneously: no standardised golden path (fragmentation, active IP exposure), no enablement infrastructure (76% daily usage but only 29% fluency), and no feedback loop (leadership cannot steer or prove ROI). The recommendation is a structured platform approach — consolidate onto a primary tool with a governed hatchway, invest heavily in enablement before and alongside rollout, and instrument everything from day one. Success is measured not by license count but by the fluency rate and the productivity signal.

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

[Framework table: criteria, weights, justification tied to the three problem axes. Apply to Gemini Code Assist, Claude Code, GitHub Copilot, Cursor. Clear recommendation with rationale.]

### Recommendation

[Single, defended recommendation. Not "it depends."]

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
