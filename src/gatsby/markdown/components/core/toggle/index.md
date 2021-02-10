---
type: "Components"
category: "Core"
parent: "Toggle"
title: "Toggle"
description: "Create advanced interactions with ease, has a comprehensive javascript api."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/core/toggle'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/toggle.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/toggle.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      xtendui: {
        toggle: {
          utility: theme => ({
            // modify utilities
          }),
        },
      },
    },
  },
}
```

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .toggle, :scope > .toggle-inverse'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Self

Use this code to create a **toggle** in **self mode**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-self">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).

#### Unique

Use this code to create a **toggle** in **unique mode**.

The **unique** mode is useful when triggering **targets outside the scope** of the component.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-unique">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/usage-unique-same">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).

#### Multiple

Use this code to create a **toggle** in **multiple mode**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-multiple">
  </demovanilla>
</demo>

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated **targets**. Group's additional elements aren't counted for min and max.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-multiple-group">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).
