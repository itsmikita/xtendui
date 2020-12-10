---
type: "Components"
category: "Core"
parent: "Card"
title: "Content Full"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

<demo>
  <demovanilla src="vanilla/components/core/card/variant-full">
  </demovanilla>
</demo>

## Interactive

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demovanilla src="vanilla/components/core/card/interactive-full">
  </demovanilla>
</demo>

## Size

Use **component classes** to assign size. You can add **additional size** for example `.card-xs` or `.card-xl`.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.card-sm`                     | `card-sm`                | `responsive`                | Size small            |
| Utility                  | `.card-md`                     | `card-md`                | `responsive`                | Size medium            |
| Utility                  | `.card-lg`                     | `card-lg`                | `responsive`                | Size large            |

</div>

Otherwise use **tailwind classes** to assign custom size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demovanilla src="vanilla/components/core/card/size-full">
  </demovanilla>
</demo>

## Content

Card content **stack vertically**. Use **tailwind classes** to assign styles (e.g. [padding](https://tailwindcss.com/docs/padding), [background-color](https://tailwindcss.com/docs/background-color), [border-radius](https://tailwindcss.com/docs/border-radius)) 

<demo>
  <demovanilla src="vanilla/components/core/card/content-full">
  </demovanilla>
</demo>

## Group

Use **component utility** `.card-group` to stack card content **horizontally**.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.card-group`       | `card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

Use **tailwind classes** to assign size (e.g. [width](https://tailwindcss.com/docs/width)).

<demo>
  <demovanilla src="vanilla/components/core/card/group-full">
  </demovanilla>
</demo>

## Separator

Use **tailwind classes** to style **borders** for separation.

<demo>
  <demovanilla src="vanilla/components/core/card/separator-full">
  </demovanilla>
</demo>

## Overflow

Use **tailwind classes** to overflow divs. Use **component classes** to style **overflow**.

<div class="table-overflow">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.overflow-main`                     | `overflow-main`                | Overflow scrollbar style            |
| Component                  | `.overflow-sub`                     | `overflow-sub`                | Overflow scrollbar style small version            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/overflow-y-full">
  </demovanilla>
</demo>

## List

You can use [list component](/components/core/list) to space card's internal content.

<demo>
  <demovanilla src="vanilla/components/core/card/list-full">
  </demovanilla>
</demo>

## Close button

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demovanilla src="vanilla/components/core/card/close-full">
  </demovanilla>
</demo>
