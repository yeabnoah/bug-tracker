import { atom } from "recoil";

const modalOpened = atom<boolean>({
    key: "modalOpened",
    default: false
})

export default modalOpened