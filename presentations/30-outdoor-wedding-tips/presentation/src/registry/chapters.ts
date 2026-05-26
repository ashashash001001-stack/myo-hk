import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Weather } from "../chapters/02-weather/Weather";
import { Deco } from "../chapters/03-deco/Deco";
import { Logistics } from "../chapters/04-logistics/Logistics";
import { Photo } from "../chapters/05-photo/Photo";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-weather/narrations";
import { NARRATIONS as N03 } from "../chapters/03-deco/narrations";
import { NARRATIONS as N04 } from "../chapters/04-logistics/narrations";
import { NARRATIONS as N05 } from "../chapters/05-photo/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "戶外婚禮注意", narrations: N01, Component: Coldopen },
  { id: "02-weather", title: "天氣應對", narrations: N02, Component: Weather },
  { id: "03-deco", title: "場地佈置", narrations: N03, Component: Deco },
  { id: "04-logistics", title: "物流安排", narrations: N04, Component: Logistics },
  { id: "05-photo", title: "攝影注意", narrations: N05, Component: Photo },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
