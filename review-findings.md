Claude generated. Synthesized from inline review + review-strategy skill (output-review\.md).

# Review Findings & Recommendations

**Reviewed:** 2026-05-30 **Sources:** output.md, analysis/vendor-evaluation.md, analysis/data-synthesis.md, task-context/casestudy-original-task.md **Method:** Inline brief-criteria review + three-perspective strategy skill (Head of Product Strategy / VP of Product / CPO)

---

## Priority 1 — Fix before submitting (highest impact, both reviews agree)

### A. Disarm the "pile of subscriptions" objection head-on

**Where:** TL;DR + §1 diagnosis\
**Problem:** Two enterprise contracts + a Hatchway, against a VP who explicitly fears "a pile of subscriptions" — never directly rebutted.\
**Fix:** State in the diagnosis: a pile vs. a portfolio is one golden path + shared telemetry + one provisioning surface. The tools differ; the control plane is singular.

### B. Add budget mechanics — seats-against-cohorts

**Where:** §3 Strategy or §4 Risks\
**Problem:** Budget is named as a hard constraint; the doc spends zero words on cost structure. Task says "recommend given the budget."\
**Fix:** One paragraph: don't buy 5,000 seats day one. Seats provisioned against adoption cohorts — spend tracks value. Converts "budget unclear" from a hand-wave into a designed lever.

### C. Give the 3,700 shadow users a behavioral model and a detection mechanism

**Where:** §3 — Driving adoption\
**Problem:** Three very different root causes (no access / tried-and-bounced / actively using ungoverned AI) collapsed into one rollout wave. No mechanism for finding shadow users.\
**Fix:** Distinguish the root causes; name the detection mechanism (expense audit, egress monitoring, survey follow-up). No detection = no funnel = the 3,700 is decoration.

### D. Surface the Validate-stage clog — your best systems-thinking insight

**Where:** §1 Position the Problem\
**Problem:** The 33% quality-confidence stat and its implication (AI speeds Code but clogs Validate → net velocity may not improve) is in the analysis files and nearly absent from the deliverable. This is the "systems thinking" criterion.\
**Fix:** Add 2–3 sentences in §1: AI at Code can be velocity-negative by shifting cost downstream into review. Tie success metrics to moving both the 41% (productivity) and 33% (quality confidence) baselines — not just fluency.

---

## Priority 2 — Structural sharpening (strategy skill findings, not in initial review)

### E. Promote the binding constraint into the diagnosis — it's buried in §3/§4

**Where:** §1\
**Problem:** Three flat co-equal axes in the problem statement. "Fluency is the binding constraint" is asserted in §3 and §4 but not placed where it belongs — the diagnosis.\
**Fix:** Lead with fluency-gated value as _the_ constraint; frame fragmentation and no-telemetry as what makes it invisible and unfixable.\
**Compression target:** _"Value is gated by fluency not access — so the org bought adoption it can't convert, and can't even see that it failed."_

### F. Name the moat — the strategic asset is the platform layer, not the tool pick

**Where:** §3 Strategy or TL;DR\
**Problem:** Vendors are substitutable (you say so yourself). The durable strategic asset — vendor-agnostic platform layer + telemetry + internal fluency corpus (prompt libraries, MCP servers, scaffolds, champions) — is built but never named as the moat.\
**Fix:** One sentence stating the bet explicitly: the strategy builds a cornered resource (the platform layer + corpus) that survives any vendor swap and compounds over time.

### G. Couple the two constraints — fragmentation and unmeasurability are the same problem

**Where:** §2 Vendor Evaluation or §3\
**Problem:** Fragmentation (org constraint) and unmeasurability (business constraint) treated as separate. They're the same structural thing: no control plane.\
**Fix:** State it: consolidation's real prize isn't fewer tools — it's the measurement surface that makes every later decision improvable. (Your data-synthesis.md called this "the missing control plane for EMs"; it got dropped.)

### H. Add falsifiability + "why now"

**Where:** §3 metrics / closing\
**Problem:** No testable prediction; no timing argument.\
**Fix (falsifiability):** _"If we ship the governed golden path and fluency stays at 29% after two quarters, the enablement diagnosis was wrong — the constraint is elsewhere (incentives, model quality on our stacks)."_\
**Fix (why now):** Name what changed: agentic tools just crossed enterprise readiness; Copilot Metrics API now exists where it didn't 18 months ago; org fragmentation pain has hit threshold. Timing converts "good idea" into "right bet this quarter."

---

## Priority 3 — Content accuracy and consistency (inline review only)

### I. "Change their contract, not their workflow" — overstatement, data-integrity risk

**Where:** §2 Tier 1 rationale, §3 Gemini migration\
**Problem:** Gemini Code Assist is a product (chat, IDE features, Android Studio native). Copilot offering Gemini _models_ is not workflow parity. Your own analysis hedged this ("after actual feature parity check for the most valuable flows"); the deliverable dropped the hedge.\
**Fix:** Soften to: "keeps their preferred model available; parity on the highest-value flows to be validated pre-migration."

### J. Copilot exposes Claude models → Tier 2 looks redundant

**Where:** §2 Tier 2 rationale\
**Problem:** If Copilot already lets users pick Claude models in-IDE, an interviewer will ask "why a second Claude Code contract?"\
**Fix:** One sentence, explicitly: _a model is not an agent harness_. Claude Code is a CLI agent loop with MCP-native composability — not a model picker. The two tiers solve different problems.

### K. Mobile — "closes this" is the overpromise your analysis warned against

**Where:** §3 mobile paragraph\
**Problem:** Your vendor-evaluation.md explicitly flagged "overpromising that Copilot solves mobile" as a credibility risk. The deliverable took the dangerous side.\
**Fix:** "Opens a path" not "closes this." Mobile is a dedicated workstream (context quality + custom MCP integrations), not a vendor-selection fix. For an ecommerce/delivery company, mobile is strategically core — frame the gap as a _business risk_.

### L. The 76% → shadow-users leap rests on a biased sample

**Where:** §1, §3\
**Problem:** 76% comes from n=180 (3.6% of org), self-selected by people who use AI. The extrapolation to 3,700+ shadow users is inference, not fact.\
**Fix:** Label it inference; note the n=180 caveat; clarify the action holds under both readings (governance is warranted whether it's 76% or far lower).

### M. PR volume is a gameable proxy — use DORA/SPACE

**Where:** §3 metrics — 12-month\
**Problem:** More PRs ≠ more value; AI inflates PR count trivially. DORA was in your notes and dropped.\
**Fix:** Lead 12-month metrics with DORA (lead time for changes, change failure rate) or SPACE. Naming the industry-standard frame is itself a systems-thinking signal.

### N. Security is a hard gate AND a 20% weight — double-counted

**Where:** §2 Vendor Evaluation Framework\
**Problem:** A gate is pass/fail (a filter); a weight is a quality score. Calling it both is logically muddy.\
**Fix:** Gate out anything that fails security first. Then apply the 5-criterion weighted framework to what remains.

### O. Google/GCP procurement-relationship risk is gone

**Where:** §4 Risks\
**Problem:** Your vendor-evaluation.md flagged it (killing Gemini may have commercial sensitivity if GCP is a platform partner — plausible for a global ecommerce org); the deliverable dropped it.\
**Fix:** Add as a named risk. It signals business/political awareness, which maps to the change-management criterion.

### P. Enablement needs a forcing function, not just infrastructure

**Where:** §3 Enablement\
**Problem:** Section describes an IDP page, prompt libraries, MCP layer — all opt-in. Your own plan.md flagged "how do we make learning a forcing function?" The section doesn't answer it.\
**Fix:** State the principle: fluency is built into the golden path by default, not taught separately. Provisioning ships the prompts, configs, and MCP servers on day one — you raise fluency by shipping it, not teaching it.

---

## Priority 4 — Quick wins (low effort, visible polish)

### Q. Merge the two duplicate "What we're not doing" tables

**Where:** §2 (output.md:77) and §4 (output.md:146)\
There is heavy overlap. One table, one place. Saves nearly a page.

### R. Check the 6-page budget

The deliverable is dense — four sections + tables + prompts appendix. Worth a page-count check after the merge above.

### S. Curate the prompts appendix with a meta-narrative

**Where:** Prompts appendix\
Don't just dump the repo. Tell the meta-story: AI used as adversarial reviewer with an explicit no-fabrication guardrail (CLAUDE.md), not as a solution generator. That mirrors the enablement philosophy you're recommending — and is free points on the AI-fluency criterion, which is separately graded.

---

## Summary table

| #   | Finding                                         | Priority | Section    |
| --- | ----------------------------------------------- | -------- | ---------- |
| A   | Disarm "pile of subscriptions" head-on          | P1       | TL;DR + §1 |
| B   | Budget mechanics — seats against cohorts        | P1       | §3/§4      |
| C   | Shadow users: behavioral model + detection      | P1       | §3         |
| D   | Validate-stage clog — systems thinking signal   | P1       | §1         |
| E   | Binding constraint into the diagnosis           | P2       | §1         |
| F   | Name the moat (platform layer + corpus)         | P2       | §3/TL;DR   |
| G   | Couple fragmentation + unmeasurability          | P2       | §2/§3      |
| H   | Falsifiability + "why now"                      | P2       | §3 metrics |
| I   | Gemini migration — soften the claim             | P3       | §2/§3      |
| J   | Copilot model ≠ agent harness — say it plainly  | P3       | §2         |
| K   | Mobile — "opens a path" not "closes this"       | P3       | §3         |
| L   | 76% shadow-user extrapolation is inference      | P3       | §1/§3      |
| M   | Replace PR volume with DORA/SPACE               | P3       | §3 metrics |
| N   | Security: gate then weight, not both            | P3       | §2         |
| O   | Add GCP/Google procurement risk                 | P3       | §4         |
| P   | Enablement forcing function — ship, don't teach | P3       | §3         |
| Q   | Merge duplicate "not doing" tables              | P4       | §2 + §4    |
| R   | Check 6-page budget                             | P4       | —          |
| S   | Prompts appendix meta-narrative                 | P4       | Appendix   |
