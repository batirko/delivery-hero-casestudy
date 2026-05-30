Claude generated.

# Ideation: Step 3 — Strategy

_This file is a working draft for the four pillars of the Strategy section. We will refine the ideas here before moving them to `output.md`._

## 1. Enablement and Fluency at Scale

**The Challenge:** 76% of engineers use AI tools daily, but only 29% feel they know how to get the most out of them. This is our biggest constraint. **PM Input Needed from Vitalii:**

- What specific mechanisms will we use to raise fluency? (e.g., standardizing prompt libraries in the IDP, pair-programming workshops, setting up an internal "AI Champions" guild).
- How do we make learning a _forcing function_ rather than an optional side task?
- Who owns enablement? (Is it DevRel, platform engineering, or team leads?)

> **Vitalii's thoughts:** From a "marketing" side of things we should have knoweldge sharing sessions and concise best practices and case studies. But this can be only a supporting thing that sits on top of tooling and policies. What we should strive for is either a standartized marketplace/repository of the available AI tools (Skills, MCP servers, prompts, agentic projects scaffolds) or a some form of an agentic gatway to these tools - via dedicated CLI or MCP, most probably. On of the key points of the organizational AI enablement is to provide it access to the internal knowledge and agentic actions around it. This should be owned by platform engineers.

## 2. Driving Adoption Among ~3,700 Non-Users

**The Challenge:** We have a large base of engineers not using any tools, and mobile engineers have been largely excluded from the landscape so far. **PM Input Needed from Vitalii:**

- How do we approach the rollout? (e.g., cohort-based, volunteer-first, or top-down mandate?)
- How do we specifically activate the mobile engineers (now that Copilot supports Xcode/Android Studio)?
- What is the behavior change hook? How do we sell the "Why" to skeptics?

> **Vitalii's thoughts:** I'd rather frame these not as non-users, but shadow users. It is contrintuitive to me that all of these are not using any AI at all. The previos point will affect this problem already, but to go deeper it means that it should alos directly address the mobile engineers as well. In terms of rollout - I'd focus on the power users and early adopters first to see if we are not creating too much friciton where the value already was established. Then we should identify the group of users that are using but are not the most satisfied to see if we are providing aney new value. And then a full rollout with all the supporting communication.

## 3. Handling the Existing Fragmented Base

**The Challenge:** We have 400 Gemini users, 300 Claude Code users, 120 Copilot users, and 60 Cursor users. **PM Input Needed from Vitalii:**

- What is the pragmatic communication plan? How do we tell the Gemini users they are moving to the Copilot platform (but can still use the Gemini model)?
- What happens to the Cursor users? How long is their grace period before we shut down ungoverned access?
- How do we recruit the existing power users (especially the Claude Code enthusiasts) to become advocates rather than detractors?

> **Vitalii's thoughts:**\
> 1\. Gemini migration to Copilot (Important: if greenlit after the check with stakeholders and the actual feature parity check for the most valuable flows) should be handeled and communicated around the notion of standartized tooling that enables us as an org to focus on a single approach and foster the network effect there. As well as the financial and managerial reasons.\
> 2\. Cursor should not be banned, just remoed from the golden path. I.e. not get it by default, but request and state your case to get access to it.\
> 3\. Demonstations of their setups and workflows in dedicated interactive sessions

## 4. Defining and Measuring Success (Metrics & Telemetry)

**The Challenge:** The VP wants to know if this works. We have zero feedback loop today. **PM Input Needed from Vitalii:**

- **3-Month Metrics:** What does early success look like? (e.g., adoption rate, telemetry wired up).
- **6-Month Metrics:** How do we measure the _quality_ of usage? (e.g., acceptance rates, self-reported fluency in pulse surveys).
- **12-Month Metrics:** What is our proxy for engineering velocity/productivity? (e.g., PR cycle time, DORA metrics).

> **Vitalii's thoughts:**\
> 1\. Nothing broke, power users and early adopters are not rioting, their usage is not going down, there is a beggining of steady stream of additional tracked usage\
> 2\. Surveys stay, but we also now have more centrilized analytics that can tell us how deep is the adoption\
> 3\. Increased feature velocity without the harm to the quality (number of PRs and their average review time)
