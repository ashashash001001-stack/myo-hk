import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { dates } from "../chapters/02-dates/dates";
import { NARRATIONS as N02 } from "../chapters/02-dates/narrations";
import { items } from "../chapters/03-items/items";
import { NARRATIONS as N03 } from "../chapters/03-items/narrations";
import { actions } from "../chapters/04-actions/actions";
import { NARRATIONS as N04 } from "../chapters/04-actions/narrations";
import { modern } from "../chapters/05-modern/modern";
import { NARRATIONS as N05 } from "../chapters/05-modern/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "結婚禁忌全面睇", narrations: N01, Component: Coldopen },
  { id: "02-dates", title: "著裝禁忌", narrations: N02, Component: dates },
  { id: "03-items", title: "婚禮禁忌", narrations: N03, Component: items },
  { id: "04-actions", title: "婚宴禁忌", narrations: N04, Component: actions },
  { id: "05-modern", title: "現代觀念", narrations: N05, Component: modern },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];