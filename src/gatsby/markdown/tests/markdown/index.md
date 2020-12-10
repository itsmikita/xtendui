---
type: "Tests"
category: "Tests"
parent: "Markdown"
title: "Markdown"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Demos

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/toggle/events-methods">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/slider/events-methods">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/navigation/scroll-to-anchor">
  </div>
  <demovanilla src="vanilla/components/core/slider/progress">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/timing">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/auto">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/prevent-event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/overflow-auto-false">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/core/drop/event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/backdrop">
  </demovanilla>
  <demovanilla src="vanilla/components/core/overlay/disable">
  </demovanilla>
  <demovanilla src="vanilla/components/core/overlay/position">
  </demovanilla>
  <demovanilla src="vanilla/components/addons/slider/automatic-scroll">
  </demovanilla>
</demo>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/hero/fashion-hero-v2">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/hero/fashion-hero-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/layout/industrial-layout-v1">
  </div>
</demo>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/navigation/sequential-megamenu-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/animation/xtend-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/animation/collapse-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/layout/furniture-layout-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/listing/furniture-listing-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/listing/fashion-listing-v1">
  </div>
</demo>

## Markdown

description: "Examples of breadcrumbs, with all the basic functionality and more."

description: "Listing markup component for category pages or simple product listing."

Use this code to create a **card**.

Use this code to create a **group vertical** with `.flex-col`.

Check subpage to [customize content](/components/core/loader/content#spinner).

Use **tailwind classes** to create a **navigation**.

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

Use **component classes** to create a **style disabled**.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |
| Component                  | `.badge-sm`       | `badge-sm`                | Size small            |
| Component                  | `.badge-md`       | `badge-md`                | Size medium            |
| Component                  | `.badge-lg`       | `badge-lg`                | Size large            |

</div>

Use **component utility** `.card-group` to stack card content **horizontally**.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.card-group`       | `card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

See [group component](/components/core/loader) to create a **button with group**.

See [mouse follow addon](/components/core/loader) to create a **loader with mouse follow**.

[[notePrimary]]
| For aria purpose use `<nav></nav>`.

[[noteDefault]]
| List `ul` and `old` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

[[noteDefault]]
| This component uses [card](/components/core/card) see documentation to **import javascript** and **customize**.

[[noteDefault]]
| This addon uses [mouse follow](/components/addons/animation/mouse-follow) see documentation to **import javascript** and **customize**.

[[notePrimary]]
| For aria purpose use `role="toolbar"`.

[[notePrimary]]
| For aria purpose use `aria-disabled="true"` when using the class `.disabled`.

[[notePrimary]]
| For aria purpose use `aria-label="<Description>"` on `input:not([type="hidden"]), select, textarea`.

[[notePrimary]]
| For aria purpose use `<nav></nav>`. For seo purpose add [breadscrumb metadata](https://developers.google.com/search/docs/data-types/breadcrumb).

<!-- For seo purpose add product metadata https://developers.google.com/search/docs/data-types/product -->

(use touch device to see it in action)

(use narrow screen to see it in action)

(use large screen to see it in action)

(resize screen to see it in action)

(navigate on mobile for different behaviour)

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Function                  | `Xt.eventDelay:Function`              | `e:Event, element:Node, function:Function, prefix:String = '', instant:Boolean = false`       | event delay wrapper                  |
| Variable                  | `Xt.resizeDelay:Number|Boolean`              | `500`        | Delay for the `resize` event with `Xt.eventDelay`            |
| Option                    | `elements:Query`                          | `false`        | Elements query            |
| Object                   | `let self = Xt.get('xt-drop', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |
| Property                  | `initial:Boolean`       | If initial or reset activation            |

</div>

Use **component utility** `.row-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing) up to 10.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.list-<space>`       | `list-<space>`                | `responsive`                | Space contents horizontally and vertically            |

</div>

For `<direction>` values use `x` or `y`.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-<direction>`                     | `loader-<direction>`                | Loader direction for filler            |

</div>

You can set **scroll mode** with css selectors.

<div class="table-overflow">

|                      | Syntax                          |  Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Selector                  | `&:not(.scroll-done) {`                     | Animate once            |

</div>

Lorem ipsum `dolor sit` amet, *consectetur* **adipiscing** elit. Nam in [laoreet tellus](/components/list-group/button), nec commodo massa. Aenean ut ex at ex pellentesque efficitur.

<script type="text/plain" class="language-markup">
  <a href="#" class="btn btn-default">
    <!-- content -->
  </a>

  <button type="button" class="btn btn-default">
    <!-- content -->
  </button>
</script>

```
mkdir -p xtendui/
cp -r node_modules/xtendui/dist/ xtendui/
```

```css
body {
  background: #ff0000;
}

.test > * {
}
```

```jsx
const test = 'test'
```
