import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { prep } from "../chapters/02-prep/prep";
import { NARRATIONS as N02 } from "../chapters/02-prep/narrations";
import { ceremony } from "../chapters/03-ceremony/ceremony";
import { NARRATIONS as N03 } from "../chapters/03-ceremony/narrations";
import { group } from "../chapters/04-group/group";
import { NARRATIONS as N04 } from "../chapters/04-group/narrations";
import { couple } from "../chapters/05-couple/couple";
import { NARRATIONS as N05 } from "../chapters/05-couple/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "婚紗相必影清單", narrations: N01, Component: Coldopen },
  { id: "02-prep", title: "02 prep", narrations: N02, Component: prep },
  { id: "03-ceremony", title: "03 ceremony", narrations: N03, Component: ceremony },
  { id: "04-group", title: "04 group", narrations: N04, Component: group },
  { id: "05-couple", title: "05 couple", narrations: N05, Component: couple },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];