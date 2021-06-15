import { writable } from "svelte/store";
import { API } from "$lib/Env";

export const blogs = writable([])



async function getBlog() {

    const url = `${API}/blogs`;
    const res = await fetch(url);

    const data = await res.json();

    blogs.set(data)

}


getBlog();