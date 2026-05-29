import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { food } from "../chapters/02-food/food";
import { NARRATIONS as N02 } from "../chapters/02-food/narrations";
import { candles } from "../chapters/03-candles/candles";
import { NARRATIONS as N03 } from "../chapters/03-candles/narrations";
import { personal } from "../chapters/04-personal/personal";
import { NARRATIONS as N04 } from "../chapters/04-personal/narrations";
import { practical } from "../chapters/05-practical/practical";
import { NARRATIONS as N05 } from "../chapters/05-practical/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "婚禮回禮Ideas", narrations: N01, Component: Coldopen },
  { id: "02-food", title: "02 food", narrations: N02, Component: food },
  { id: "03-candles", title: "03 candles", narrations: N03, Component: candles },
  { id: "04-personal", title: "04 personal", narrations: N04, Component: personal },
  { id: "05-practical", title: "05 practical", narrations: N05, Component: practical },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];