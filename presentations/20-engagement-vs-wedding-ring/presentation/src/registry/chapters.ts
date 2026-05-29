import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { engagement } from "../chapters/02-engagement/engagement";
import { NARRATIONS as N02 } from "../chapters/02-engagement/narrations";
import { wedding } from "../chapters/03-wedding/wedding";
import { NARRATIONS as N03 } from "../chapters/03-wedding/narrations";
import { differences } from "../chapters/04-differences/differences";
import { NARRATIONS as N04 } from "../chapters/04-differences/narrations";
import { wear } from "../chapters/05-wear/wear";
import { NARRATIONS as N05 } from "../chapters/05-wear/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "訂婚戒 vs 結婚戒", narrations: N01, Component: Coldopen },
  { id: "02-engagement", title: "02 engagement", narrations: N02, Component: engagement },
  { id: "03-wedding", title: "03 wedding", narrations: N03, Component: wedding },
  { id: "04-differences", title: "04 differences", narrations: N04, Component: differences },
  { id: "05-wear", title: "05 wear", narrations: N05, Component: wear },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];