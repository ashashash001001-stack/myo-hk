import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Dates } from "../chapters/02-dates/Dates";
import { Items } from "../chapters/03-items/Items";
import { Actions } from "../chapters/04-actions/Actions";
import { Modern } from "../chapters/05-modern/Modern";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-dates/narrations";
import { NARRATIONS as N03 } from "../chapters/03-items/narrations";
import { NARRATIONS as N04 } from "../chapters/04-actions/narrations";
import { NARRATIONS as N05 } from "../chapters/05-modern/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "婚禮禁忌", narrations: N01, Component: Coldopen },
  { id: "02-dates", title: "日子禁忌", narrations: N02, Component: Dates },
  { id: "03-items", title: "物品禁忌", narrations: N03, Component: Items },
  { id: "04-actions", title: "行為禁忌", narrations: N04, Component: Actions },
  { id: "05-modern", title: "現代睇法", narrations: N05, Component: Modern },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
