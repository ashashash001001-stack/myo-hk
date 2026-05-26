import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Classic } from "../chapters/02-classic/Classic";
import { Modern } from "../chapters/03-modern/Modern";
import { Fit } from "../chapters/04-fit/Fit";
import { Accessories } from "../chapters/05-accessories/Accessories";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-classic/narrations";
import { NARRATIONS as N03 } from "../chapters/03-modern/narrations";
import { NARRATIONS as N04 } from "../chapters/04-fit/narrations";
import { NARRATIONS as N05 } from "../chapters/05-accessories/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "新郎禮服攻略", narrations: N01, Component: Coldopen },
  { id: "02-classic", title: "經典款式", narrations: N02, Component: Classic },
  { id: "03-modern", title: "時尚款式", narrations: N03, Component: Modern },
  { id: "04-fit", title: "揀岩尺寸", narrations: N04, Component: Fit },
  { id: "05-accessories", title: "配飾選擇", narrations: N05, Component: Accessories },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
