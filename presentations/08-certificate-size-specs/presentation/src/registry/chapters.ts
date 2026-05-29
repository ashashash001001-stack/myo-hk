import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { size } from "../chapters/02-size/size";
import { NARRATIONS as N02 } from "../chapters/02-size/narrations";
import { content } from "../chapters/03-content/content";
import { NARRATIONS as N03 } from "../chapters/03-content/narrations";
import { care } from "../chapters/04-care/care";
import { NARRATIONS as N04 } from "../chapters/04-care/narrations";
import { myo } from "../chapters/05-myo/myo";
import { NARRATIONS as N05 } from "../chapters/05-myo/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "結婚證書尺寸規格", narrations: N01, Component: Coldopen },
  { id: "02-size", title: "02 size", narrations: N02, Component: size },
  { id: "03-content", title: "03 content", narrations: N03, Component: content },
  { id: "04-care", title: "04 care", narrations: N04, Component: care },
  { id: "05-myo", title: "05 myo", narrations: N05, Component: myo },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];