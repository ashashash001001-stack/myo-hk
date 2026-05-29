import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { hotel } from "../chapters/02-hotel/hotel";
import { NARRATIONS as N02 } from "../chapters/02-hotel/narrations";
import { restaurant } from "../chapters/03-restaurant/restaurant";
import { NARRATIONS as N03 } from "../chapters/03-restaurant/narrations";
import { church } from "../chapters/04-church/church";
import { NARRATIONS as N04 } from "../chapters/04-church/narrations";
import { outdoor } from "../chapters/05-outdoor/outdoor";
import { NARRATIONS as N05 } from "../chapters/05-outdoor/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "香港婚禮場地比較", narrations: N01, Component: Coldopen },
  { id: "02-hotel", title: "02 hotel", narrations: N02, Component: hotel },
  { id: "03-restaurant", title: "03 restaurant", narrations: N03, Component: restaurant },
  { id: "04-church", title: "04 church", narrations: N04, Component: church },
  { id: "05-outdoor", title: "05 outdoor", narrations: N05, Component: outdoor },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];