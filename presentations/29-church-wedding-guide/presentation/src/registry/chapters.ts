import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { venues } from "../chapters/02-venues/venues";
import { NARRATIONS as N02 } from "../chapters/02-venues/narrations";
import { booking } from "../chapters/03-booking/booking";
import { NARRATIONS as N03 } from "../chapters/03-booking/narrations";
import { ceremony } from "../chapters/04-ceremony/ceremony";
import { NARRATIONS as N04 } from "../chapters/04-ceremony/narrations";
import { dress } from "../chapters/05-dress/dress";
import { NARRATIONS as N05 } from "../chapters/05-dress/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "教堂婚禮指南", narrations: N01, Component: Coldopen },
  { id: "02-venues", title: "02 venues", narrations: N02, Component: venues },
  { id: "03-booking", title: "03 booking", narrations: N03, Component: booking },
  { id: "04-ceremony", title: "04 ceremony", narrations: N04, Component: ceremony },
  { id: "05-dress", title: "05 dress", narrations: N05, Component: dress },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];