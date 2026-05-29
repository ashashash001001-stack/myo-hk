import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { legal } from "../chapters/02-legal/legal";
import { NARRATIONS as N02 } from "../chapters/02-legal/narrations";
import { property } from "../chapters/03-property/property";
import { NARRATIONS as N03 } from "../chapters/03-property/narrations";
import { prenup } from "../chapters/04-prenup/prenup";
import { NARRATIONS as N04 } from "../chapters/04-prenup/narrations";
import { tax } from "../chapters/05-tax/tax";
import { NARRATIONS as N05 } from "../chapters/05-tax/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "結婚法律與財產", narrations: N01, Component: Coldopen },
  { id: "02-legal", title: "02 legal", narrations: N02, Component: legal },
  { id: "03-property", title: "03 property", narrations: N03, Component: property },
  { id: "04-prenup", title: "04 prenup", narrations: N04, Component: prenup },
  { id: "05-tax", title: "05 tax", narrations: N05, Component: tax },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];