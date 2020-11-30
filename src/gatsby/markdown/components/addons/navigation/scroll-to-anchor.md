---
type: "Components"
category: "Addons"
parent: "Navigation"
title: "scroll-to-anchor"
description: "Automatically scroll to an id clicking the relative anchor with that id."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/scroll-to-anchor'
```

## Usage

Use this code to create a **scroll to anchor**.

[[notePrimary]]
| This addon uses [sticky](/components/core/sticky) see documentation to import javascript and customize.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/navigation/scroll-to-anchor">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `elements:Array`                          | `[href*="#"]:not([aria-controls])`        | Elements nodes (filter out toggle components toggles with `:not([aria-controls])`)            |
| Option                    | `matches:Query`                          | `'[href$="{hash}"]:not([aria-controls])'`        | Matches nodes (filter out toggle components toggles with `:not([aria-controls])`)               |
| Option                    | `scrollElements:Array`                          | `[document.scrollingElement]`        | Scroll nodes (ordered parent > child)             |
| Option                    | `class:String`                          | `'active'`        | Activation class             |
| Option                    | `scrollDelay:Number`                          | `250`        | Delay on scroll checks             |
| Option                    | `position(scrollingElement, target, self):Function`             | `<Function>`        | Positioning function return `Number`             |
| Option                    | `scrollSpace(scrollingElement, target, self):Function`                          | `<Function>`        | Positioning space from top return `Number`             |
| Option                    | `scrollDistance(scrollingElement, target, self):Function`                          | `<Function>`        | Distance from top on scroll checks return `Number`            |

</div>

## Trigger

Trigger events on **DOM elements**.

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scroll.trigger.xt.scrolltoanchor`       | `scrollElement` | Scroll event             |

</div>

## Listen

Listen to events on **DOM elements**.

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.scrolltoanchor`      | `object` | Change event            |
| Event                   | `init.xt.scrolltoanchor`           | `object` | Init event             |
| Event                   | `destroy.xt.scrolltoanchor`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |

</div>

## Initialization

Initialize automatically within markup with `[data-xt-scroll-to-anchor="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.ScrollToAnchor(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.ScrollToAnchor(object, {
      // options
    })

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  }
})
```
