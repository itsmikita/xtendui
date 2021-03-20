---
type: "Components"
category: "Core"
parent: "List Group"
title: "List Group"
description: "List subcomponent to group up buttons, inputs and other content."
---

## Usage

Use [list](/components/core/list) to create a **group**.

#### Horizontal

Use this code to create a **group horizontal**.

Use **tailwind classes** to assign styles (e.g. [border-color](https://tailwindcss.com/docs/border-color), [border-radius](https://tailwindcss.com/docs/border-radius)).

<demo>
  <demoinline src="demos/components/core/list-group/usage">
  </demoinline>
</demo>

#### Vertical

Use this code to create a **group vertical** with `.flex-col`.

Use **tailwind classes** to assign styles (e.g. [border-color](https://tailwindcss.com/docs/border-color), [border-radius](https://tailwindcss.com/docs/border-radius)).

<demo>
  <demoinline src="demos/components/core/list-group/usage-vertical">
  </demoinline>
</demo>

Check subpage to [customize content](/components/core/list-group/content).

#### Nested

Use **component classes** to style **nested**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |
| Component                  | `.xt-list-inner`       | `xt-list-inner`                | Group list content            |

</div>

You can nest `.xt-list-inner` and [flex-direction](https://tailwindcss.com/docs/flex-direction).

<demo>
  <demoinline src="demos/components/core/list-group/usage-nested">
  </demoinline>
</demo>
