import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { weather } from "../chapters/02-weather/weather";
import { NARRATIONS as N02 } from "../chapters/02-weather/narrations";
import { deco } from "../chapters/03-deco/deco";
import { NARRATIONS as N03 } from "../chapters/03-deco/narrations";
import { logistics } from "../chapters/04-logistics/logistics";
import { NARRATIONS as N04 } from "../chapters/04-logistics/narrations";
import { photo } from "../chapters/05-photo/photo";
import { NARRATIONS as N05 } from "../chapters/05-photo/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "戶外婚禮貼士", narrations: N01, Component: Coldopen },
  { id: "02-weather", title: "02 weather", narrations: N02, Component: weather },
  { id: "03-deco", title: "03 deco", narrations: N03, Component: deco },
  { id: "04-logistics", title: "04 logistics", narrations: N04, Component: logistics },
  { id: "05-photo", title: "05 photo", narrations: N05, Component: photo },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];