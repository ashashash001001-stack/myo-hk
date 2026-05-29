import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { cut } from "../chapters/02-cut/cut";
import { NARRATIONS as N02 } from "../chapters/02-cut/narrations";
import { color } from "../chapters/03-color/color";
import { NARRATIONS as N03 } from "../chapters/03-color/narrations";
import { clarity } from "../chapters/04-clarity/clarity";
import { NARRATIONS as N04 } from "../chapters/04-clarity/narrations";
import { carat } from "../chapters/05-carat/carat";
import { NARRATIONS as N05 } from "../chapters/05-carat/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "鑽石4C指南", narrations: N01, Component: Coldopen },
  { id: "02-cut", title: "02 cut", narrations: N02, Component: cut },
  { id: "03-color", title: "03 color", narrations: N03, Component: color },
  { id: "04-clarity", title: "04 clarity", narrations: N04, Component: clarity },
  { id: "05-carat", title: "05 carat", narrations: N05, Component: carat },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];