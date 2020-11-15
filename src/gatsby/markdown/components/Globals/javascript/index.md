---
type: "Components"
category: "Globals"
parent: "Javascript"
title: "Javascript"
description: "Javascript utilities and animations usability improvements."
---

## Installation

Import the **component javascript** file.

```jsx
import { Xt } from 'xtendui'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/layout.css.js](https://github.com/minimit/xtendui/blob/master/src/core/javascript.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      javascript: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Animations

You can **opt out** some animations behaviour:

* **Flash of Unstyled Content (FOUC)**: Xtend UI **automatically disables page load duration** for animation and transition until javascript is loaded, add `html.no-js-fouc` to disable this behaviour.

* **Initial component animations**: Xtend UI **automatically disables duration** for animation and transition on `initial` class used in components init and reinit, add `html.no-js-initial` to disable this behaviour.

* **Prefers Reduced Motion**: Xtend UI **automatically disables duration** for animation and transition when the the user has activated "Prefers Reduced Motion" (needs also [gsap setup](/introduction/getting-started/setup#javascript-animation)), add `html.no-js-prm` to disable this behaviour, also set this variables `Xt.durationTimescale = 1` and `Xt.autoTimescale = 1`.

* **Global Duration Timescale**: Xtend UI have an option to **change javascript durations timescales**, for example set this variables `Xt.durationTimescale = 1.5` to have faster animations by an half.

* **Global Auto Timescale**: Xtend UI have an option to **change javascript auto duration timescales**, for example set this variables `Xt.autoTimescale = 0.5` to have double time on component auto changes.

An **example setup** for accessibility and faster animation on mobile, used in this docs and demos is this:

```js
gsap.config({ force3D: false })

if (Xt.durationTimescale === 1000) {
  // instant animations accessibility
  gsap.globalTimeline.timeScale(1000)
  // double auto time accessibility
  Xt.autoTimescale = 0.5
}

// faster javascript animations on small screens

const animationResponsive = () => {
  if (Xt.durationTimescale !== 1000 && matchMedia('(max-width: 767px)').matches) {
    gsap.globalTimeline.timeScale(1.5)
    Xt.durationTimescale = 1.5
  } else {
    gsap.globalTimeline.timeScale(1)
    Xt.durationTimescale = 1
  }
}
addEventListener('resize', animationResponsive)
animationResponsive()
```

## Xt.debug

Set `NODE_ENV=development` to have **Xt.debug activated**. On Linux and mac globally with `export NODE_ENV = development`, on windows globally with `Add-Content -Path $Profile.CurrentUserAllHosts -Value '$Env:NODE_ENV = "development"'`.

## Event Delay

For the `resize` and `scroll` events we use a special wrapper `Xt.eventDelay` that set the delay on which the resize gets triggered with `Xt.resizeDelay` and `Xt.scrollDelay`.

```js
addEventListener('resize', e => {
  Xt.eventDelay(e, document.documentElement, () => {
    // logic
  })
})

addEventListener('scroll', e => {
  Xt.eventDelay(e, document.documentElement, () => {
    // logic
  })
})
```

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Function                  | `Xt.eventDelay:Function`              | `e:Event, element:Node, function:Function, prefix:String = '', instant:Boolean = false`       | event delay wrapper                  |
| Variable                  | `Xt.resizeDelay:Number|Boolean`              | `500`        | Delay for the `resize` event with `Xt.eventDelay`            |
| Variable                  | `Xt.scrollDelay:Number|Boolean`              | `500`        | Delay for the `scroll` event with `Xt.eventDelay`                 |

</div>

You can also manually specify a **custom delay**, for instant use `delay: 0`.

```js
dispatchEvent(new CustomEvent('resize', { detail: { delay: 0 } }))
```

#### Resize Force

With `resize`, `Xt.eventDelay` also calls the function **only if the height of the window changes**, to not trigger the resize event on mobile when the address bar hides, and to fix multiple calls on sume browsers when scrolling.

To **force** `resize` event also on **window width change** use `e.detail.force`:

```js
dispatchEvent(new CustomEvent('resize', { detail: { force: true } }))
```

#### Resize Container

You can trigger some components events only inside some **container node**, not possible normally for resize events, just use `e.detail.container`:

```js
const checkResize = document.querySelector('.my-element')
const eventResize = function (e) {
  // triggering e.detail.container
  if (!e || !e.detail || !e.detail.container || e.detail.container.contains(checkResize)) {
    // logic
  }
}
document.querySelector.addEventListener(eventResize)

// triggering e.detail.container
dispatchEvent(new CustomEvent('resize', { detail: { force: true, container: document.querySelector('.my-container') } }))
```
