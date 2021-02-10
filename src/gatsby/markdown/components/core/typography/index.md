---
type: "Components"
category: "Core"
parent: "Typography"
title: "Typography"
description: "Component for customize headers, body text, text tags and lists."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/typography.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/typography.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      xtendui: {
        typography: {
          utility: theme => ({
            // modify utilities
          }),
          component: theme => ({
            // modify components
          }),
        },
      },
    },
  },
}
```

## Usage

Check subpage to [customize content](/components/core/typography/content).
