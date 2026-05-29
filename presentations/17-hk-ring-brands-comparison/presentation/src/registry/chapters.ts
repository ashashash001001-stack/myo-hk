import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { highend } from "../chapters/02-highend/highend";
import { NARRATIONS as N02 } from "../chapters/02-highend/narrations";
import { midrange } from "../chapters/03-midrange/midrange";
import { NARRATIONS as N03 } from "../chapters/03-midrange/narrations";
import { local } from "../chapters/04-local/local";
import { NARRATIONS as N04 } from "../chapters/04-local/narrations";
import { online } from "../chapters/05-online/online";
import { NARRATIONS as N05 } from "../chapters/05-online/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "香港戒指品牌比較", narrations: N01, Component: Coldopen },
  { id: "02-highend", title: "Tiffany對戒", narrations: N02, Component: Highend },
  { id: "03-midrange", title: "Cartier對戒", narrations: N03, Component: Midrange },
  { id: "04-local", title: "Piaget對戒", narrations: N04, Component: Local },
  { id: "05-online", title: "本地品牌", narrations: N05, Component: Online },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];