---
type: "Components"
category: "Core"
parent: "Media"
title: "Content"
date: "2030-10-10"
---

## Responsive

Use **tailwind classes** on `.xt-media-inner` to assign relative position. The result is a **responsive media**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Tailwind                  | `.relative`                     | `relative`                | Relative size            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/media/responsive">
  </demovanilla>
</demo>

## Aspect ratio

Assing `padding-bottom` on `.xt-media-container` to the aspect ratio you desire.

<demo>
  <demovanilla src="vanilla/components/core/media/ratio">
  </demovanilla>
</demo>

Use **component utility** `.xt-ratio-<value>` on `.xt-media-container` to make aspect ratio images (resize screen to see it in action).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-ratio-<value>`       | `ratio-<value>`                | `responsive`                | Apply aspect ratio, can be `15`, `37.5`, `50`, `56.2`, `75`, `100`, `125`, `150`            |

</div>

You can add your own aspect ratio value as [media utility](/components/core/media#customization).

<demo>
  <demovanilla src="vanilla/components/core/media/ratio-class">
  </demovanilla>
</demo>

## Object fit

Use **tailwind classes** to assign object fit. (e.g. [object-position](https://tailwindcss.com/docs/object-position)).

<demo>
  <demovanilla src="vanilla/components/core/media/cover">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/contain">
  </demovanilla>
</demo>

You can also use **video** or **iframe** for media.

<demo>
  <demovanilla src="vanilla/components/core/media/video">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/iframe">
  </demovanilla>
</demo>

## Height

Use **tailwind classes** to assign height (e.g. [height](https://tailwindcss.com/docs/height)).

<demo>
  <demovanilla src="vanilla/components/core/media/height">
  </demovanilla>
</demo>

You can also use `min-height: <Value>` to have a min height (use narrow screen to see it in action).

<demo>
  <demovanilla src="vanilla/components/core/media/min-height">
  </demovanilla>
</demo>
