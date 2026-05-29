import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { where } from "../chapters/02-where/where";
import { NARRATIONS as N02 } from "../chapters/02-where/narrations";
import { ring } from "../chapters/03-ring/ring";
import { NARRATIONS as N03 } from "../chapters/03-ring/narrations";
import { words } from "../chapters/04-words/words";
import { NARRATIONS as N04 } from "../chapters/04-words/narrations";
import { photography } from "../chapters/05-photography/photography";
import { NARRATIONS as N05 } from "../chapters/05-photography/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "求婚大作戰攻略", narrations: N01, Component: Coldopen },
  { id: "02-where", title: "02 where", narrations: N02, Component: where },
  { id: "03-ring", title: "03 ring", narrations: N03, Component: ring },
  { id: "04-words", title: "04 words", narrations: N04, Component: words },
  { id: "05-photography", title: "05 photography", narrations: N05, Component: photography },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];