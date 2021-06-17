import { browser } from "$app/env";
import { writable } from "svelte/store";


export const user = writable('')


if (browser) {
    user.set(localStorage.getItem('user') || '')

    user.subscribe((value) => {
        localStorage.setItem('user', value)
    })
}