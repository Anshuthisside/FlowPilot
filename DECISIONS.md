# DECISIONS.md

## 1. Why this approach?

I chose the **Premium Home Page** track because it lets me demonstrate product thinking, responsive frontend implementation, interaction design, and attention to visual detail in one focused deliverable.

I built the page with **vanilla HTML, CSS, and JavaScript** rather than adding a framework or dependency. The challenge says stack choice is open and that judgment matters more than tool choice. A dependency-free implementation keeps the demo fast to ship, easy to inspect, and easy to deploy on any static host.

I invented **FlowPilot**, a believable AI-assisted operations workspace. The page uses a product UI preview rather than fabricated testimonials, user counts, customer logos, or unsupported performance claims. The challenge explicitly asks for honest copy when real numbers are unavailable.

## 2. One trade-off

I prioritized **responsive polish and one useful interactive product preview** over adding many animations or multiple complex pages.

With a full week, I would:
- Add a small component system if the product expanded beyond one page.
- Add keyboard/focus testing across every interactive element.
- Add automated visual regression checks at 390px and 1440px.
- Test accessibility with a screen reader and Lighthouse.
- Add a real backend/API only if the product concept required it.

## 3. AI tools

AI was used as a development assistant for brainstorming the product concept, checking implementation ideas, and reviewing edge cases.

I personally reviewed and edited the final HTML, CSS, and JavaScript. The interaction logic, responsive breakpoints, visual hierarchy, copy, and final structure were verified in the browser. I would be able to explain the implementation and design decisions during the follow-up call.
