---
type: "Components"
category: "Global"
parent: "Animation"
title: "Mousefollow"
description: "Javascript animation utility to follow mouse position."
date: "1900-10-10"
---

## Styles

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.mousefollow`.

Check [xtendui/src/mousefollow.css.js](https://github.com/minimit/xtendui/blob/beta/src/mousefollow.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/mousefollow'`.

Initialize automatically **within markup** with `[data-xt-mousefollow="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Mousefollow(document.querySelector('#my-object'), {/* options */})`.

## Usage

Use **component classes** to create a **mouse follow**.

[[notePrimary]]
| Remember **not to transition transform** of `.xt-mousefollow` element.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-mousefollow`                     | `mousefollow`                | Styles for mouse follow            |

</div>

<demo>
  <demoinline src="demos/components/animation/mousefollow">
  </demoinline>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `targets:Query`                          | `':scope > .xt-mousefollow'`        | Mouse follow targets            |
| Option                    | `transform:Boolean`                          | `true`        | Use transform instead of position            |
| Option                    | `friction:Function`                          | `<function>`        | Function for friction             |
| Option                    | `mouseCheck(self):Function|Boolean`                          | `false`        | Function called on activate/deactivate, return false to not activate/deactivate             |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.mousefollow`       | `object` | Activation event             |
| Event                   | `off.xt.mousefollow`      | `object` | Deactivation event            |
| Event                   | `change.xt.mousefollow`       | `object` | Change event             |
| Event                   | `init.xt.mousefollow`           | `object` | Init event             |
| Event                   | `destroy.xt.mousefollow`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `targets:Array`       | Targets nodes            |

</div>
