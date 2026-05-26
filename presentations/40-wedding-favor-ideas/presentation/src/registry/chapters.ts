import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Food } from "../chapters/02-food/Food";
import { Candles } from "../chapters/03-candles/Candles";
import { Personal } from "../chapters/04-personal/Personal";
import { Practical } from "../chapters/05-practical/Practical";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-food/narrations";
import { NARRATIONS as N03 } from "../chapters/03-candles/narrations";
import { NARRATIONS as N04 } from "../chapters/04-personal/narrations";
import { NARRATIONS as N05 } from "../chapters/05-practical/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "結婚回禮小禮物", narrations: N01, Component: Coldopen },
  { id: "02-food", title: "食品類", narrations: N02, Component: Food },
  { id: "03-candles", title: "香氛類", narrations: N03, Component: Candles },
  { id: "04-personal", title: "個人化", narrations: N04, Component: Personal },
  { id: "05-practical", title: "實用類", narrations: N05, Component: Practical },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
