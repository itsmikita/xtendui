---
type: "Components"
category: "Interaction"
parent: "Overlay"
title: "Overlay"
description: "Use overlay when you need to display any content over the main page, comes in different options and factors."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.overlay`.

Check [xtendui/src/overlay.css.js](https://github.com/minimit/xtendui/blob/beta/src/overlay.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/overlay'`.

Initialize automatically **within markup** with `[data-xt-overlay="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Overlay(document.querySelector('.my-object'), {/* options */})`.

## Usage Self

Use this code to create a **overlay** in **self mode**.

Just use the class `on` if you want to automatically open, or use the [api](/components/overlay/api)

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/overlay/usage-self">
  </div>
</demo>

## Usage Unique

Use this code to create a **overlay** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

<demo>
  <demoinline src="demos/components/overlay/usage-unique">
  </demoinline>
</demo>

## Usage Multiple

Use this code to create a **overlay** in **multiple mode**.

<demo>
  <demoinline src="demos/components/overlay/usage-multiple">
  </demoinline>
</demo>
