---
type: "Components"
category: "Layout"
parent: "Card"
title: "Card"
description: "Multi purpose component to style and contain content."
---

## Styles

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.card`.

Check [xtendui/src/card.css.js](https://github.com/minimit/xtendui/blob/beta/src/card.css.js) for default styles.

## Usage

Use `.xt-card` to create a **button**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-card`                     | `xt-card`                | Card styles            |

</div>

<demo>
  <demoinline src="demos/components/card/usage">
  </demoinline>
</demo>

You can also **stack** card content.

<demo>
  <demoinline src="demos/components/card/usage-stack">
  </demoinline>
</demo>

Check subpage to [customize content](/components/card/content).
