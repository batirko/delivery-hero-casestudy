# Delivery Hero — PM Case Study

## What this is

Vitalii Batyr is completing a **Product Manager take-home case study** for an application to **Delivery Hero** — role: **(Sr) PM, Agentic AI IDEs (Developer Tools)**, Berlin. He is at the interview stage. The actual task will be added to `task-context/` when it arrives.

This is **not a coding project**. Claude's role is **consultant and thinking partner**, not solution generator. Vitalii does the PM work; Claude helps stress-test reasoning, surface data patterns, flag blind spots, and pressure-check arguments.

> Structure, conventions, and approach mirror the prior `~/Projects/n8n-casestudy` (which reached the presentation/interview stage). See `references.md`.

## ⚠️ CRITICAL: Source Data Integrity

**NEVER fabricate, estimate, or hallucinate numbers.** Every metric or statistic must come from (1) data provided with the task, (2) official Delivery Hero sources, or (3) cited research with URLs. If a number isn't available, say so. Fabricated data in a case study = instant credibility loss. (n8n's brief explicitly warned that submissions are weakened by over-reliance on AI — use it thoughtfully.)

## The Candidate & Role

- **Candidate:** Vitalii Batyr — Senior PM, 9 yrs. Currently Dynatrace, leading the Internal Developer Platform's user-facing interface (portal, catalog, TechDocs, self-service, AI, MCP, agentic control plane). Archetypes: DevEx → Platform → Technical AI PM.
- **Target role:** Delivery Hero, (Sr) PM Agentic AI IDEs / Developer Tools, Berlin.
- Full profile + role details: `references.md` (points to `~/Projects/career-ops`).

## Key Data Points (all numbers from the brief — do not invent others)

- ~5,000 engineers; ~900 known AI tool users; ~4,100+ on nothing
- Tool breakdown: Gemini ~400, Claude Code ~300 (growing), Copilot ~120, Cursor ~60
- 76% report using AI daily; only 41% say it meaningfully improves productivity
- Only 29% know how to get the most out of their tool
- Constraints: security/IP governance, unclear budget, no productivity measurement
- VP quote: "I don't just want us to pick a tool. I want us to have a strategy."

## Key Context Files

- `task-context/index.md` — **START HERE**: task overview + map of all context files
- `task-context/casestudy-original-task.md` — the verbatim task/brief from Delivery Hero
- `references.md` — candidate profile + the DH role (career-ops)
- `analysis/` — research findings and data analysis (treat closed findings as settled)

## File Map

| File            | Purpose                                                                 |
| --------------- | ----------------------------------------------------------------------- |
| `task-context/` | Source material provided with the case study (read-only)                |
| `analysis/`     | Research findings / data deep-dives (one topic per file)                |
| `work.md`       | **User written.** Vitalii's blackboard — notes, brainstorming, in-progress thinking. Messy is fine. Claude does not write here. |
| `output.md`     | The deliverable being assembled. "Final truth" at any point in time.    |
| `plan.md`       | Step-by-step plan with done-criteria per step                           |
| `todo.md`       | Flat checklist distilled from `plan.md`                                 |
| `audit.md`      | Point-in-time audit of project state (goals, insights, gaps)            |

## File Authorship Convention

Every file has a plain-text authorship marker as its **first line**:

- `Claude generated.` — produced by Claude (variants like `Claude generated, user asked for X` are fine)
- `User written.` — written by Vitalii

**All new files Claude creates must include this marker as line 1.**

## Working Approach

1. **Understand** — read `task-context/` + `references.md` before doing anything substantive
2. **Research & analyze** — gather data, store findings in `analysis/`
3. **Synthesize** — diagnose the core problem(s); form a defensible thesis
4. **Prescribe** — prioritize, design solutions, define metrics, sketch a shipping plan
5. **Assemble** — pull it into `output.md` with a clear red thread (goals → solutions)

## How Claude Should Operate

- **Don't solve the case study unprompted.** Wait for Vitalii to drive; respond to specific asks. Don't generate full deliverable sections for him.
- **Analytical copilot mode.** When he shares a hypothesis or draft, push back where logic is weak, surface data that complicates the picture, name what's missing.
- **Flag relevant data** from source material — especially counter-intuitive patterns.
- **Short, direct responses.** This is working time, not a lecture.
- **No framework theater.** These exercises grade reasoning and trade-offs, not which framework you name. Depth over breadth — spending judgment on where to go deep is itself the signal.

## Deliverable Guidelines

- Format is Vitalii's choice (doc / slides). Content matters far more than polish.
- Open with a short TL;DR; keep a red thread from goals through to solutions.
- Evidence-driven; every claim backed by data or cited research.
- Prioritized, actionable recommendations; edge cases and risks named, not dodged.
- Tailored to Delivery Hero's business and the Agentic-AI-developer-tools role.
- Come ready to defend reasoning under push-back (the interview is a discussion).

## Privacy

Don't commit interview-confidential or personal-sensitive material. Respect `.cursorignore` / `.gitignore`.
