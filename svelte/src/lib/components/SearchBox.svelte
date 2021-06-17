<script>
    import { blogs } from "$lib/store/blogStores";
    import Fuse from "fuse.js";
    import Card from "./Card.svelte";

    const fuse = new Fuse($blogs, {
        keys: ["title", "content"],
    });
    let q = "";
    $: result = fuse.search(q);
</script>

<div class="container">
    <input
        type="search"
        class="outline-none m-4 ring-purple-200 ring-4 p-2  mx-auto "
        name="q"
        placeholder="Search"
        bind:value={q}
    />
</div>


<div class="container p-2 mx-auto">

    {#each result as { item }}
    <div class="p-10 shadow-md ">
        <div class="text-md">
            <a href={item.url}>
                {item.url}
            </a>
        </div>
        <h1 class=" text-lg font-bold">
            {item.title}
        </h1>
        {item.content}
    </div>
    {/each}
</div>

<!-- markup (zero or more items) goes here -->
<style>
    /* your styles go here */
</style>
