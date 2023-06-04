import { atom } from "jotai";
import Features from "features";

export const activeNavAtom = atom(Features[0].ViewName);