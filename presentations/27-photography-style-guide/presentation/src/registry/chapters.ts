import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { traditional } from "../chapters/02-traditional/traditional";
import { NARRATIONS as N02 } from "../chapters/02-traditional/narrations";
import { reportage } from "../chapters/03-reportage/reportage";
import { NARRATIONS as N03 } from "../chapters/03-reportage/narrations";
import { fashion } from "../chapters/04-fashion/fashion";
import { NARRATIONS as N04 } from "../chapters/04-fashion/narrations";
import { mix } from "../chapters/05-mix/mix";
import { NARRATIONS as N05 } from "../chapters/05-mix/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "婚禮攝影風格指南", narrations: N01, Component: Coldopen },
  { id: "02-traditional", title: "02 traditional", narrations: N02, Component: traditional },
  { id: "03-reportage", title: "03 reportage", narrations: N03, Component: reportage },
  { id: "04-fashion", title: "04 fashion", narrations: N04, Component: fashion },
  { id: "05-mix", title: "05 mix", narrations: N05, Component: mix },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];