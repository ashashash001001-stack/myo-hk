import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { year1 } from "../chapters/02-year1/year1";
import { NARRATIONS as N02 } from "../chapters/02-year1/narrations";
import { year5 } from "../chapters/03-year5/year5";
import { NARRATIONS as N03 } from "../chapters/03-year5/narrations";
import { year10 } from "../chapters/04-year10/year10";
import { NARRATIONS as N04 } from "../chapters/04-year10/narrations";
import { year15 } from "../chapters/05-year15/year15";
import { NARRATIONS as N05 } from "../chapters/05-year15/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "結婚週年禮物指南", narrations: N01, Component: Coldopen },
  { id: "02-year1", title: "週年慶祝", narrations: N02, Component: year1 },
  { id: "03-year5", title: "重要里程碑", narrations: N03, Component: year5 },
  { id: "04-year10", title: "禮物推薦", narrations: N04, Component: year10 },
  { id: "05-year15", title: "結婚15週年", narrations: N05, Component: year15 },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];