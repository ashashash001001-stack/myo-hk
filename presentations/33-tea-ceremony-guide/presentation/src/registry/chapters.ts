import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { prepare } from "../chapters/02-prepare/prepare";
import { NARRATIONS as N02 } from "../chapters/02-prepare/narrations";
import { order } from "../chapters/03-order/order";
import { NARRATIONS as N03 } from "../chapters/03-order/narrations";
import { kneeling } from "../chapters/04-kneeling/kneeling";
import { NARRATIONS as N04 } from "../chapters/04-kneeling/narrations";
import { gifts } from "../chapters/05-gifts/gifts";
import { NARRATIONS as N05 } from "../chapters/05-gifts/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "敬茶儀式指南", narrations: N01, Component: Coldopen },
  { id: "02-prepare", title: "02 prepare", narrations: N02, Component: prepare },
  { id: "03-order", title: "03 order", narrations: N03, Component: order },
  { id: "04-kneeling", title: "04 kneeling", narrations: N04, Component: kneeling },
  { id: "05-gifts", title: "05 gifts", narrations: N05, Component: gifts },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];