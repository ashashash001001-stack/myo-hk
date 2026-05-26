import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Prep } from "../chapters/02-prep/Prep";
import { Ceremony } from "../chapters/03-ceremony/Ceremony";
import { Group } from "../chapters/04-group/Group";
import { Couple } from "../chapters/05-couple/Couple";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-prep/narrations";
import { NARRATIONS as N03 } from "../chapters/03-ceremony/narrations";
import { NARRATIONS as N04 } from "../chapters/04-group/narrations";
import { NARRATIONS as N05 } from "../chapters/05-couple/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "婚禮必影清單", narrations: N01, Component: Coldopen },
  { id: "02-prep", title: "準備時刻", narrations: N02, Component: Prep },
  { id: "03-ceremony", title: "行禮時刻", narrations: N03, Component: Ceremony },
  { id: "04-group", title: "大合照", narrations: N04, Component: Group },
  { id: "05-couple", title: "新人合照", narrations: N05, Component: Couple },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
