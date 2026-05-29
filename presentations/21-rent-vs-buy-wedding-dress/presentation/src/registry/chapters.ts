import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { rent } from "../chapters/02-rent/rent";
import { NARRATIONS as N02 } from "../chapters/02-rent/narrations";
import { buy } from "../chapters/03-buy/buy";
import { NARRATIONS as N03 } from "../chapters/03-buy/narrations";
import { consider } from "../chapters/04-consider/consider";
import { NARRATIONS as N04 } from "../chapters/04-consider/narrations";
import { hybrid } from "../chapters/05-hybrid/hybrid";
import { NARRATIONS as N05 } from "../chapters/05-hybrid/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "租 vs 買婚紗", narrations: N01, Component: Coldopen },
  { id: "02-rent", title: "02 rent", narrations: N02, Component: rent },
  { id: "03-buy", title: "03 buy", narrations: N03, Component: buy },
  { id: "04-consider", title: "04 consider", narrations: N04, Component: consider },
  { id: "05-hybrid", title: "05 hybrid", narrations: N05, Component: hybrid },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];