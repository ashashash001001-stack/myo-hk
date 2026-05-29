import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { classic } from "../chapters/02-classic/classic";
import { NARRATIONS as N02 } from "../chapters/02-classic/narrations";
import { modern } from "../chapters/03-modern/modern";
import { NARRATIONS as N03 } from "../chapters/03-modern/narrations";
import { fit } from "../chapters/04-fit/fit";
import { NARRATIONS as N04 } from "../chapters/04-fit/narrations";
import { accessories } from "../chapters/05-accessories/accessories";
import { NARRATIONS as N05 } from "../chapters/05-accessories/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "新郎西裝指南", narrations: N01, Component: Coldopen },
  { id: "02-classic", title: "02 classic", narrations: N02, Component: classic },
  { id: "03-modern", title: "03 modern", narrations: N03, Component: modern },
  { id: "04-fit", title: "04 fit", narrations: N04, Component: fit },
  { id: "05-accessories", title: "05 accessories", narrations: N05, Component: accessories },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];