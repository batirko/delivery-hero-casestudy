User written (verbatim from PDF).

# Case Study: Building Next-Gen Agentic Workspaces

## Source

- Received via: email from Delivery Hero
- Date: 2026-05-30
- Due: 4 hours from email send timestamp
- Submit: reply-all to the email, attachments
- Format: written document, max 6 pages + AI prompts used (evaluated separately)

---

## 1. Company & Team Context

Acme Inc is a global leader in the ecommerce industry, operating in over 50 countries. Technology is at the core of our operations. The Tech Foundations vertical is dedicated to empowering our internal engineering community — helping our ~5,000 engineers build, scale, and deliver quality features faster.

One of Tech Foundations' core responsibilities is owning the tooling and platforms that engineers use every day — from how a ticket is written to how code reaches production.

## 2. The Developer Journey

Before diving into the challenge, it helps to understand how software gets built here. At a high level, the developer journey looks like this:

| Discover           | Plan                      | Code                 | Validate                                       | Deploy          | Operate                        |
| ------------------ | ------------------------- | -------------------- | ---------------------------------------------- | --------------- | ------------------------------ |
| Backlog & ideation | Jira ticketing, RFC, ARDs | Engineer writes code | CI/CD pipeline runs, PR review, Quality checks | Release to prod | Monitoring & incident response |

Each stage has its own tooling, its own friction points, and its own opportunities for improvement. This role is primarily focused on the **Code stage** — specifically, the AI-assisted coding tools that engineers use inside their IDEs day to day.

## 3. Scenario

AI coding tools have been spreading across Acme Inc organically for the past 18 months. No standard has ever been set. No guardrails have been put in place. Teams have found their own tools, expensed their own subscriptions, and built their own habits — largely without coordination.

You have just joined Tech Foundations as the PM for Agentic IDEs and Internal Coding Tools. In your first week, you speak to a dozen engineers and engineering managers. Here is what you hear:

- Several backend teams have settled on Gemini Code Assist and are broadly happy with it
- A significant and growing number of engineers — particularly in platform and frontend — prefer Claude Code and have organising this independently.
- Other tools are in use across the organisation: Cursor, GitHub Copilot (in some acquired brands), and various open source or self-hosted alternatives
- Mobile teams largely report that nothing works well enough with their stack to justify the effort
- However, 76% of developers in the recent survey reported they are using AI Daily
- Engineering managers are frustrated by the inconsistency — different tools, different contexts, no shared practices, and real concerns about security and IP exposure

Here is the uncomfortable truth: we can report on roughly 900 engineers using some form of AI coding tool, but we know our tracking is weak. The actual number is likely higher — and the actual variety of tools in use is certainly broader than what we can see.

In your first leadership touchpoint, your VP of Engineering says:

> "I don't just want us to pick a tool. I want us to have a strategy. We're investing in a lot of AI initiatives right now and I want to make sure they add up to something coherent for our engineers — not just a pile of subscriptions."

## 4. Available Context

### Current tooling landscape (indicative — tracking is known to be incomplete)

| Tool                 | How it spread                                 | Known Active Users                        |
| -------------------- | --------------------------------------------- | ----------------------------------------- |
| Gemini Code Assist   | Team-led adoption, some central licenses      | ~400                                      |
| Claude Code          | Individual subscriptions, team expense claims | ~300 (growing fast)                       |
| GitHub Copilot       | Legacy use in some acquired brands            | ~120                                      |
| Cursor               | Self-organised trials                         | ~60                                       |
| Other / open source  | Unknown                                       | Untracked                                 |
| **Total reportable** |                                               | **~900**                                  |
| **Estimated actual** |                                               | **Unknown — likely significantly higher** |
| No AI coding tool    | Default state                                 | ~4,100+                                   |

### Developer sentiment (from informal survey, n=180)

| Statement                                                             | Agree |
| --------------------------------------------------------------------- | ----- |
| "My current AI coding tool meaningfully improves my productivity"     | 41%   |
| "I know how to get the most out of my AI coding tool"                 | 29%   |
| "I would recommend my current AI coding tool to a colleague"          | 38%   |
| "I feel confident that AI-generated code meets our quality standards" | 33%   |

### Key constraints

- **Security and data governance**: any tool handling internal code must meet Acme's data residency and IP protection requirements.
- **Budget**: lack of clarity on what is needed and expected spend.
- **Visibility gap**: we cannot currently measure the productivity impact of any tool with confidence

## 5. The Challenge

You need to do two things:

1. **Make a tooling decision** - evaluate the landscape, apply a framework, and recommend a path forward given the budget and constraints
2. **Build an approach** - not just which tool, but how AI-assisted coding fits into the wider developer experience at Acme Inc, how you will drive adoption, and how you will measure success

## 6. Your Tasks

Prepare a response covering the following. Your output should be a **written document (max 6 pages)**. You should also **include the prompts you used** when working with AI tools to develop your answer — this is part of what we are evaluating. You are encouraged to use any (approved) AI tools during the case study.

Any other artefacts you want to include to support your work is encouraged.

- **Position the Problem:** Where does AI-assisted coding fit within the developer journey? What is the specific problem you are trying to solve at the Code stage, and how does it connect to the broader goal of improving engineering velocity?
- **Vendor Evaluation Framework:** What criteria would you use to evaluate and compare AI coding tools? How would you weight them given Acme's context? Apply your framework to the tools in the landscape and make a recommendation.
- **Your Strategy:** Beyond the vendor decision, what is your strategy for making AI-assisted coding work at Acme Inc? Address:
  - How you would drive adoption among the ~3,700 engineers not currently using any tool
  - How you would handle the teams already using non-standard tools
  - What your enablement and training approach would look like
  - How you would define and measure success
- **Risks & Trade-offs:** What are the biggest risks in your recommended approach? What are you explicitly not doing, and why?

## 7. Evaluation Criteria

Your response will be evaluated on:

- **Systems thinking:** Do you position the tooling decision within the broader developer journey, rather than treating it as an isolated vendor selection exercise?
- **Vendor evaluation rigour:** Is your framework structured, defensible, and appropriately weighted for the Acme context?
- **Strategic clarity:** Is there a clear point of view, not just a list of considerations?
- **Developer empathy:** Do you show understanding of why adoption is low and what it would actually take to change behaviour at scale?
- **Change management:** How do you handle the teams already using non-standard tools — with pragmatism, not just policy?
- **AI fluency:** How effectively did you use AI tools in your process? Does your prompting strategy reflect structured thinking.
