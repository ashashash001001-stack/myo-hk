import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Hotel } from "../chapters/02-hotel/Hotel";
import { Restaurant } from "../chapters/03-restaurant/Restaurant";
import { Church } from "../chapters/04-church/Church";
import { Outdoor } from "../chapters/05-outdoor/Outdoor";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-hotel/narrations";
import { NARRATIONS as N03 } from "../chapters/03-restaurant/narrations";
import { NARRATIONS as N04 } from "../chapters/04-church/narrations";
import { NARRATIONS as N05 } from "../chapters/05-outdoor/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "香港婚禮場地", narrations: N01, Component: Coldopen },
  { id: "02-hotel", title: "酒店婚禮", narrations: N02, Component: Hotel },
  { id: "03-restaurant", title: "酒樓婚宴", narrations: N03, Component: Restaurant },
  { id: "04-church", title: "教堂行禮", narrations: N04, Component: Church },
  { id: "05-outdoor", title: "戶外婚禮", narrations: N05, Component: Outdoor },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
