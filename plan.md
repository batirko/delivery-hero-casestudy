Claude generated.

# Delivery Hero Case Study — Project Plan

**Time budget: 4 hours. Clock started at email receipt.Deliverable: written doc, max 6 pages + AI prompts log. Submitted by email.**

---

## Step 1 — Problem Positioning ✅ (done at setup)

**What this produces:** A clear framing of where the Code stage fits in the developer journey, and what the specific problem is — anchoring the rest of the document.

- [x] Task captured (`task-context/casestudy-original-task.md`)
- [x] Context indexed (`task-context/index.md`)
- [x] Repo + CLAUDE.md updated with key data points

**Still to do:** Vitalii writes the actual "Position the Problem" section in `output.md`.

**Must establish all three problem axes (the red thread for the whole doc):**

1. No golden path + safe hatchway → fragmentation, IP exposure, no network effect
2. No enablement path → usage high (76%), value low (41%), skill gap (29%) is the real bottleneck
3. No feedback loop → leadership can't steer, can't prove, can't improve

The opening should make clear: this is not a tool problem, it's a system problem.

---

## Step 2 — Vendor Evaluation Framework

**What this produces:** A structured, weighted framework applied to the 4 known tools, with a clear recommendation.

Criteria to define and weight (Acme context):

- Security / IP governance compliance (likely highest weight — it's a hard gate)
- Efficacy / model quality for the actual stacks in use
- Adoption inertia — what's already working for which teams
- Cost / budget clarity
- Visibility / telemetry — can we measure impact? (connects directly to feedback loop pillar; weight this explicitly, don't bury it)
- IDE / workflow integration breadth
- Agentic capabilities (forward-looking, given the VP's "coherent strategy" ask)
- Enablement ecosystem — does the vendor support training, usage guidance, prompt libraries? (connects to enablement pillar)

Apply to: Gemini Code Assist, Claude Code, GitHub Copilot, Cursor. Make a recommendation.

**Weight justification must connect back to the three problem axes** — e.g. telemetry is weighted highly because without it the feedback loop problem persists regardless of which tool wins.

**Done when:** Framework is defensible, weights are justified by Acme context, recommendation is clear (not "it depends").

---

## Step 3 — Strategy

**What this produces:** The "how" — adoption, enablement, handling existing users, success metrics.

Sub-sections (ordered by weight — enablement is the centrepiece, not a footnote):

- **Enablement + training approach** ← heaviest section; this is the primary differentiator from a generic "pick a tool" answer. Must go beyond "run workshops." Concrete: what does good look like, how do you build fluency at scale, what are the forcing functions. Target: 29% → majority know how to use it well.
- Driving adoption among ~3,700 non-users (behaviour change, not just access; address mobile stack gap explicitly)
- Handling the existing fragmented base (Gemini happy, Claude Code growing — pragmatism over policy; golden path + hatchway model)
- Success metrics (feedback loop pillar: what telemetry, what thresholds, 3/6/12 month view)

**Done when:** Clear POV per sub-section; no generic platitudes; developer empathy visible. Enablement section must be substantively longer/deeper than vendor discussion.

---

## Step 4 — Risks & Trade-offs

**What this produces:** Honest acknowledgement of what could go wrong, and explicit "not doing" list.

- Biggest risks in the recommended approach. Lead with: solving the golden path without solving enablement still yields low value — tool consolidation is necessary but not sufficient.
- What you're explicitly NOT doing, and why (e.g. full consolidation to one tool, big-bang rollout, productivity measurement before tooling is stable)

**Done when:** Risks are specific (not generic); the "not doing" list shows prioritisation judgment.

---

## Step 5 — Assembly + Polish

**What this produces:** `output.md` as a clean, 6-page-max document ready to submit.

- [ ] TL;DR at top (5 lines: diagnosis, recommendation, strategy north star, key metric)
- [ ] Red thread check: every section follows causally from the previous
- [ ] All 4 task questions answered
- [ ] No fabricated numbers; all data from the brief
- [ ] AI prompts log compiled (separate appendix or section)
- [ ] Final read: senior, concise, defensible under push-back

---

## Time Allocation Guidance

| Step                    | Suggested time   |
| ----------------------- | ---------------- |
| 1 — Problem positioning | 20–30 min        |
| 2 — Vendor framework    | 45–60 min        |
| 3 — Strategy            | 60–75 min        |
| 4 — Risks & trade-offs  | 20–30 min        |
| 5 — Assembly + polish   | 45–60 min        |
| **Total**               | **~3.5–4 hours** |

---

## Current Status

- [x] Setup complete (task captured, context indexed, repo structured)
- [x] Step 1 written in `output.md`
- [x] Step 2 complete — two-tier + Hatchway recommendation; ported to `output.md`
- [ ] Step 3 complete
- [ ] Step 4 complete
- [ ] Step 5: final assembly + polish
- [ ] Submitted
