---
type: "Components"
category: "Global"
parent: "Row"
title: "Row"
description: "Flex component to space columns with paddings, also spaces vertically."
---

## Styles

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.row`.

Check [xtendui/src/row.css.js](https://github.com/minimit/xtendui/blob/beta/src/row.css.js) for default styles.

## Usage

Use `.xt-row` to create a **row**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-row`                     | `xt-row`                | Row styles            |

</div>

<demo>
  <demoinline src="demos/components/row/usage">
  </demoinline>
</demo>

[[notePrimary]]
| You should always use **tailwind width classes** inside `.xt-row`. Otherwise you can space contents with [list](/components/list).

Check subpage to [customize content](/components/row/content).
