import { atom } from "recoil";

const themeAtom = atom<string>({
    key: "themeAtom",
    default: "dark"
})

export default themeAtom