---
type: "Components"
category: "Interaction"
parent: "Slider"
title: "Position"
date: "2009-10-10"
---

## Align

Slide alignment on activation.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `align:String`                          | `'center'`        | Alignment 'left' or 'center' or 'right'           |

</div>

<demo>
  <demoinline src="demos/components/slider/align-center">
  </demoinline>
  <demoinline src="demos/components/slider/align-left">
  </demoinline>
  <demoinline src="demos/components/slider/align-right">
  </demoinline>
</demo>

## Group

With `group: Number` you set a number from 0 to 1 to automatically group the slides with a factor of the available `drag.dragger` width.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `group:Number`                          | `false`        | Set automatic grouping based on available width from 0 to 1            |

</div>

<demo>
  <demoinline src="demos/components/slider/group">
  </demoinline>
</demo>

## Contain

Disable slider containing the slides.

Also when enabled **automatically group the slides** on start and end position (when position values would be the same).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain:Boolean`                          | `true`        | If true contain the slides on available width            |

</div>

<demo>
  <demoinline src="demos/components/slider/contain-center">
  </demoinline>
  <demoinline src="demos/components/slider/contain-left">
  </demoinline>
  <demoinline src="demos/components/slider/contain-right">
  </demoinline>
</demo>

## Auto Height

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `autoHeight:Query`                          | `false`        | Element inside slider to automaticaly height, remember to transition height            |
| Option                  | `keepHeight:Query`                          | `false`        | Elements to keep height of the first slide (ex: `.xt-slides`)            |

</div>

<demo>	
  <demoinline src="demos/components/slider/autoheight">	
  </demoinline>	
</demo>	
