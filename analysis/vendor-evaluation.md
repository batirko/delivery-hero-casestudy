Claude generated.

# Vendor Evaluation & Recommendation

**Objective:** Evaluate the AI coding tool landscape against Acme Inc's specific organisational constraints, current usage patterns, and the strategic goal of establishing a "golden path" that solves the enablement and visibility gaps — while building toward the agentic workspace the role is named for.

---

## 1. Evaluation Criteria & Weighting

Six criteria derived from the three system breakdowns *and* the strategic north star of the role: building next-gen agentic workspaces.

| Criterion                      | Weight | Rationale |
| ------------------------------ | ------ | --------- |
| **Security / IP Governance**   | 20%    | Essential gate: no tool can be the standard if it can't pass legal/security review and offer zero-data-retention with enterprise admin controls. |
| **Enablement & Ecosystem**     | 20%    | 29% fluency rate is the biggest bottleneck. Need structured training, prompt libraries, and community at enterprise scale. |
| **Visibility / Telemetry**     | 15%    | The feedback loop is missing entirely. EMs need adoption rates, acceptance rates, and quality signals to justify investment and measure ROI. |
| **IDE Integration & Breadth**  | 10%    | Must support the real IDE mix, including mobile (Xcode / Android Studio), not just VS Code–centric stacks. |
| **Agentic Capability**         | 20%    | The strategic bet. The role exists to build agentic workspaces — inline completion is table stakes. MCP integration, multi-step agent loops, and CLI composability are the forward vector. |
| **Adoption Inertia**           | 15%    | Respects ground truth. Displacing a tool engineers love creates friction; leveraging existing momentum is faster and cheaper. |

> **Why agentic capability gets 20%:** The case study title is "Building Next-Gen Agentic Workspaces." A framework that doesn't weight this is optimising for today, not for what this PM is hired to build. The tools that lead on agentic capability now will define the productivity ceiling in 18 months.

> **Why IDE breadth drops to 10%:** The mobile teams say "nothing works well enough" — this is a solvable problem at the enablement layer, not a pure IDE-support problem. Over-weighting breadth would punish tools unfairly for mobile's self-reported gap.

---

## 2. Tool Landscape Analysis

_(Scored 1–5, weighted by criteria above)_

### GitHub Copilot Enterprise

| Criterion | Score | Notes |
|-----------|-------|-------|
| Security | 5 | Industry-standard enterprise compliance, zero retention, Microsoft trust anchor. |
| Enablement | 4 | Largest external community and documentation; GitHub/Microsoft enterprise training programs are mature. Score is 4, not 5: internal Copilot adoption (120 users) doesn't itself demonstrate strong enablement — the Gemini and Claude organic stories are more compelling data. |
| Visibility | 5 | Copilot Metrics API is genuinely best-in-class: per-developer acceptance rates, active user tracking, code completion trends. This is a real differentiator. |
| IDE Breadth | 5 | VS Code, JetBrains, Visual Studio, Xcode extension (limited but real), Neovim. Widest coverage. |
| Agentic | 3 | Agent mode in VS Code is real and improving. Multi-model support (Claude, Gemini, OpenAI selectable in-IDE) and MCP server augmentation via the IDE harness are valid levers. Not purpose-built for agentic; trails Claude Code and Cursor in loop depth and CLI composability. |
| Adoption | 3 | 120 users, largely legacy/acquired brands — not organic pull. |

**Weighted Score: (5×0.20) + (4×0.20) + (5×0.15) + (5×0.10) + (3×0.20) + (3×0.15) = 1.00 + 0.80 + 0.75 + 0.50 + 0.60 + 0.45 = 4.10**

---

### Gemini Code Assist

| Criterion | Score | Notes |
|-----------|-------|-------|
| Security | 5 | Strong GCP enterprise guarantees; GDPR-aligned data residency. |
| Enablement | 4 | 400 backend engineers using it and broadly happy — that *is* enablement working. Google enterprise sales/training machine is solid. Raised from the prior 3 because the survey data contradicts a lower score. |
| Visibility | 3 | Basic telemetry; less granular than Copilot Metrics API for EM-facing dashboards. |
| IDE Breadth | 3 | VS Code and JetBrains plugins work; **Android Studio is native** (Google owns Android Studio — genuine mobile advantage for Android). No Xcode support — iOS teams remain underserved. |
| Agentic | 2 | Trailing significantly on agentic features. Gemini in IDE offers some agent-like completions but has no comparable MCP-native or CLI-first agent loop. Roadmap is improving but present-day capability is weak. |
| Adoption | 5 | 400 users, highest internal adoption, organically team-led. |

**Weighted Score: (5×0.20) + (4×0.20) + (3×0.15) + (3×0.10) + (2×0.20) + (5×0.15) = 1.00 + 0.80 + 0.45 + 0.30 + 0.40 + 0.75 = 3.70**

---

### Claude Code

| Criterion | Score | Notes |
|-----------|-------|-------|
| Security | 4 | Anthropic Enterprise is strong; zero-retention API available. Newer enterprise governance tooling than Microsoft/Google — less battle-tested in large orgs. |
| Enablement | 3 | Fast-growing community and documentation, but lacks structured enterprise training infrastructure. Enablement is primarily self-serve and community-driven. |
| Visibility | 2 | No EM-facing analytics dashboard. API usage is trackable but requires custom instrumentation — out of the box there's no equivalent to Copilot Metrics. This is a real present-day gap. |
| IDE Breadth | 2 | Terminal/CLI-first by design. VS Code extension exists but is secondary. Not suitable as the single default for an engineering org with diverse IDE environments and non-technical adjacent users. |
| Agentic | 5 | MCP-native and purpose-built for complex multi-step agent loops. Terminal-first architecture makes it composable with CI pipelines, scripts, and internal tooling. This is *why* platform and frontend engineers adopted it organically — not inline completion, but agentic task execution. The fastest-growing segment of the AI coding market. |
| Adoption | 4 | 300 users, growing fast, organic pull from platform/frontend teams. The growth curve is the signal. |

**Weighted Score: (4×0.20) + (3×0.20) + (2×0.15) + (2×0.10) + (5×0.20) + (4×0.15) = 0.80 + 0.60 + 0.30 + 0.20 + 1.00 + 0.60 = 3.50**

---

### Cursor (Enterprise)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Security | 3 | Privacy mode available, but smaller vendor triggers longer enterprise security reviews. Not blocked, but adds friction and timeline risk. |
| Enablement | 2 | Self-serve primarily; limited enterprise training infrastructure. |
| Visibility | 2 | Weakest enterprise telemetry of the group. |
| IDE Breadth | 3 | Best-in-class within the VS Code universe. Breaks JetBrains workflows entirely; incompatible with Xcode — mobile teams remain stuck. |
| Agentic | 5 | Agentic pioneer. Composer / multi-file agent mode is still industry-leading for complex refactors and scaffolding tasks. |
| Adoption | 2 | 60 users, enthusiastic but niche. |

**Weighted Score: (3×0.20) + (2×0.20) + (2×0.15) + (3×0.10) + (5×0.20) + (2×0.15) = 0.60 + 0.40 + 0.30 + 0.30 + 1.00 + 0.30 = 2.90**

---

## 3. Scorecard Summary

| Tool                        | Security | Enablement | Visibility | IDE Breadth | Agentic | Adoption | **Weighted** |
|-----------------------------|----------|------------|------------|-------------|---------|----------|-------------|
| GitHub Copilot Enterprise   | 5        | 4          | 5          | 5           | 3       | 3        | **4.10**    |
| Gemini Code Assist          | 5        | 4          | 3          | 3           | 2       | 5        | **3.70**    |
| Claude Code                 | 4        | 3          | 2          | 2           | 5       | 4        | **3.50**    |
| Cursor (Enterprise)         | 3        | 2          | 2          | 3           | 5       | 2        | **2.90**    |

---

## 4. The Recommendation: Two-Tier Agentic Workspace Strategy

**Tier 1 — Governed Platform Layer: GitHub Copilot Enterprise**
**Tier 2 — Agentic Power Layer: Claude Code (Anthropic Enterprise)**

This is not "pick Copilot and add an exception clause." It is a deliberate two-tier architecture driven by what each tool actually does well.

### Why Copilot as Tier 1

The gap between Copilot (4.10) and Gemini (3.70) is driven by three real differentiators:

1. **Visibility (5 vs. 3):** The feedback loop is broken. Copilot Metrics API solves the EM visibility problem out of the box; Gemini requires custom instrumentation. This is the highest-urgency gap per the VP's ask.
2. **IDE Breadth (5 vs. 3):** Copilot has a Xcode extension; Gemini does not. For iOS mobile teams, this is the only current path forward among the evaluated tools.
3. **Multi-model as a migration bridge:** Copilot Enterprise supports Claude and Gemini models natively in-IDE. The 400 Gemini-happy backend engineers don't have to change their model — they change their contract. This is the strategic unlock that makes the recommendation viable without triggering migration resistance.

**Copilot's adoption weakness (120 users) is not a counter-argument — it's the starting point.** Gemini's 400-user advantage is real, but it's preserved, not lost, if Copilot becomes the governance layer and Gemini remains available as a model within it.

### Why Claude Code as Tier 2

Claude Code scored highest on Agentic (5/5) and is already the tool platform and frontend engineers organically chose for complex tasks. The strategy would fail if it treated this as a liability to suppress.

The smarter move: move Claude Code users from individual subscriptions to an Anthropic Enterprise contract. Same tool, same workflows, enterprise security controls, centralized billing, and a path to telemetry. The organic adoption signal is a free product-market fit test — it already passed.

Claude Code as the named agentic tier also directly activates the strategic mandate of the role: building next-gen agentic workspaces.

### Mobile Gap — Honest Assessment

The brief says mobile teams report "nothing works well enough." This is not primarily a tool-availability problem — Copilot has a Xcode extension and Gemini has Android Studio support. The root cause is likely context quality and workflow integration, not raw IDE support. Overpromising that Copilot "solves" mobile is a credibility risk. The recommendation: treat mobile as a separate workstream requiring dedicated enablement and possibly custom MCP integrations (internal build context, test runners), not a problem solved by vendor selection alone.

### Tier 3 — The Hatchway: Governed Exception Process

The two-tier architecture deliberately leaves a third door open. The landscape is moving fast — a new agentic IDE will reach enterprise readiness in the next 6–12 months. The strategy needs a mechanism for this that doesn't require a full re-evaluation each time, and doesn't push engineers underground.

**The Hatchway is the named, governed process for tools outside Tier 1 and Tier 2.** It is a valve, not a door — entry is earned, not assumed.

Entry criteria for any tool to operate in the Hatchway:
1. **Security review passed** — data residency, IP protection, zero-retention mode, or equivalent
2. **Telemetry wired up** — usage must be reportable to the central dashboard; untracked tools don't qualify
3. **Budget-capped** — team agrees to a per-seat cap and time-boxed trial (90 days default)
4. **Champion accountable** — a named engineering lead owns the review and outcome

What the Hatchway is not: a way to avoid governance. Any tool operating outside it is ungoverned and will be treated as shadow IT with the associated security response.

Current Hatchway candidates: Cursor (for the ~60 users who don't migrate to Claude Code), any self-hosted/open-source alternatives currently untracked, and future frontier tools as they mature.

---

## 5. Transition Plan for Existing Tool Users

The four user segments require four different messages. The common principle: **meet people where they are; add governance around them, not instead of them.**

### Segment 1: Gemini users (~400) — Backend teams, broadly happy

- **Message:** "Your model, better governance." Copilot Enterprise supports Gemini natively. Migration is a license swap, not a workflow change.
- **Path:** 90-day centralised migration. Identify team leads who championed Gemini adoption (they self-organised; they'll champion this). Run migration in cohorts, not mandates. Offer a parallel run period.
- **Risk to name:** If Google Cloud is a significant platform partner, there's relationship/procurement sensitivity here. Escalate to VP before announcing.

### Segment 2: Claude Code users (~300) — Platform/frontend, growing organically

- **Message:** "Your agentic workflows, now officially supported." No tool change. Enterprise contract replaces individual subscriptions.
- **Path:** Centralise billing under Anthropic Enterprise (centralised billing + API-level usage tracking — requires lightweight instrumentation; not an out-of-the-box dashboard equivalent to Copilot Metrics, but sufficient to close the untracked shadow-IT gap). These engineers are your best enablement resource — involve them in building internal prompt libraries and agentic workflow patterns for the 4,100.
- **Risk to name:** These users are power users. If you add friction (approval gates, rate limits) without clear upside, they'll route around governance. Keep the contract visible and light.

### Segment 3: Copilot users (~120) — Legacy/acquired brands

- **Message:** Upgrade to central Copilot Enterprise contract from legacy plans. Simplest migration; low friction.
- **Path:** Coordinate with acquired brand engineering leads. Standardise as new brands come onto central platforms.

### Segment 4: Cursor users (~60) — Early agentic adopters

- **Message:** "We see you and we're building a path." Offer two options: (a) migrate to Claude Code enterprise tier for comparable agentic capability with central governance; (b) request a governed Cursor exception (security review, telemetry requirement, budget cap). Don't mandate — these are influential engineers.
- **Path:** 60-day review. Likely most move to Claude Code once it's official. The remainder who stay on Cursor submit to the standard exception process.

---

## 6. What This Is Not Doing (and Why)

| Not Doing | Reason |
|-----------|--------|
| Mandating a single tool immediately | Forces underground adoption; destroys goodwill with the 700 users who chose their tools for real reasons |
| Standardising on Gemini despite highest adoption | Solves short-term adoption inertia but fails on visibility, iOS mobile, and agentic trajectory |
| Keeping Cursor as a named standard tier | Security review risk, weakest telemetry, non-VSCode exclusion is too costly at org scale |
| Building custom open-source / self-hosted tooling | Engineering cost and velocity risk with no clear advantage over the above |
