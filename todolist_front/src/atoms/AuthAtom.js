import { atom } from "recoil";

export const authStateAtom = atom({
    key: "authState",
    default: false
});

export const authUserStateAtom = atom({
    key: "authUserState",
    default: {
        userId: 0,
        username: "",
        name: "",
        email: ""
    }
});