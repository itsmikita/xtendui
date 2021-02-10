---
type: "Components"
category: "Core"
parent: "Link"
title: "Link"
description: "Default link styles for html links, can also be applied to buttons and other tags."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/link.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/link.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      link: {
        utility: theme => ({
          // modify utilities
        }),
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use `a` without classes or `.link` to create a **link**.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                         | Syntax                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.link`                 | `link`              | Link styles            |

</div>

[[noteDefault]]
| Links `a` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

[[notePrimary]]
| Links `a` with `target="_blank"` needs `rel="noopener"` or `rel="noreferrer"` to avoid [cross-origin issues](https://web.dev/external-anchors-use-rel-noopener/).

<demo>
  <demovanilla src="vanilla/components/core/link/usage">
  </demovanilla>
</demo>

## Variant

Use **component utility** `.links-default` and `.links-inverse` on **parent elements** to style **child links**.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.links-default`       | `links-default`                | `responsive`                | Default links colors            |
| Utility                  | `.links-inverse`       | `links-inverse`                | `responsive`                | Inverse links colors            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/link/variant-inverse">
  </demovanilla>
</demo>
