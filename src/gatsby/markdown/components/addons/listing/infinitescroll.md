---
type: "Components"
category: "Addons"
parent: "Listing"
title: "Infinite Scroll"
description: "Automatic pagination activable on click or on scroll, with browser navigation support that loads only the current page."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/infinitescroll'
```

## Usage

Use this code to create a **infinite scroll**.

Remember to set a `options.get` variable for a **get request on current url** to load items. Also remember to set `options.max` number of pages.

[[noteDefault]]
| Check advanced feature [open this demo on a new page](/iframe/components/addons/listing/infinitescroll). You can see on page refresh and browser navigation that **the page is retained**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/addons/listing/infinitescroll">
  </div>
</demo>

## Options

Here are the main **javascript options**.

For advanced options see javascript file source code `xtendui/src/addons/infinitescroll.js`.

Inside `elements.pagination:Query` you can use this strings that gets populated with variables:

- `xt-num` replaced with current page number
- `xt-tot` replaced with total pages number

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `get:String`                          | `false`        | **url get** variable to use            |
| Option                    | `min:Number`                          | `1`        | Initial and minimum page number            |
| Option                    | `max:Number`                          | `'Infinity'`        | Maximum page number            |
| Option                    | `add:Number`                          | `1`        | Amount to increase page number            |
| Option                    | `events.scroll:Boolean`                          | `true`        | Automatically activate on scroll            |
| Option                    | `events.trigger:String`                          | `'click'`        | Event to trigger infinite scroll            |
| Option                    | `events.reset:String`                          | `'click'`        | Event to trigger infinite scroll reset            |
| Option                    | `elements.scrollOffset:Query`                          | `'.infinitescroll'`        | Object query for automatic scroll element            |
| Option                    | `elements.trigger:Query`                          | `'.infinitescroll-trigger .xt-button'`        | Object query for trigger element            |
| Option                    | `elements.reset:Query`                          | `'.infinitescroll-pre .xt-button'`        | Object query for reset element            |
| Option                    | `elements.spaceAdditional:Query`                          | `'.infinitescroll-pre'`        | Object query for additional space on reset            |
| Option                    | `elements.pagination:Query`                          | `'.infinitescroll-pagination'`        | Object query for pagination            |
| Option                    | `elements.items:Query`                          | `'.xt-listing-inner .xt-row'`        | Object query for items container            |
| Option                    | `elements.item:Query`                          | `':scope > *'`        | Items container query for items            |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `populate.xt.infinitescroll`           | `object` | Replace event             |
| Event                   | `init.xt.infinitescroll`           | `object` | Init event             |
| Event                   | `destroy.xt.infinitescroll`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `current:Number`       | Current page             |
| Property                   | `scrollElement:Node`       | Scroll node             |
| Property                   | `triggerElement:Node`       | Trigger node             |
| Property                   | `resetElement:Node`       | Reset node             |
| Property                   | `itemsElement:Node`       | Items node             |

</div>

## Initialization

Initialize automatically **within markup** with `[data-xt-infinitescroll="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Infinitescroll(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: ({ object }) => {
    // init

    let self = new Xt.Infinitescroll(object, {
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
