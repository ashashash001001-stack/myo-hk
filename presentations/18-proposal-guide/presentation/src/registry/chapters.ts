import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Where } from "../chapters/02-where/Where";
import { Ring } from "../chapters/03-ring/Ring";
import { Words } from "../chapters/04-words/Words";
import { Photography } from "../chapters/05-photography/Photography";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-where/narrations";
import { NARRATIONS as N03 } from "../chapters/03-ring/narrations";
import { NARRATIONS as N04 } from "../chapters/04-words/narrations";
import { NARRATIONS as N05 } from "../chapters/05-photography/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "求婚攻略", narrations: N01, Component: Coldopen },
  { id: "02-where", title: "地點選擇", narrations: N02, Component: Where },
  { id: "03-ring", title: "戒指準備", narrations: N03, Component: Ring },
  { id: "04-words", title: "台詞準備", narrations: N04, Component: Words },
  { id: "05-photography", title: "記錄時刻", narrations: N05, Component: Photography },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
