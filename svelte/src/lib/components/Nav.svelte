<script>
    import { home, board, box, rocket,user,search } from "./Icon.svelte";

    export let routes = [
        { path: ".", icon: home },
        { path: "blogs", icon: board },
        { path: "search", icon: search },
    ];

    
</script>

<!-- markup (zero or more items) goes here -->


    {#each routes as route}
    <a href={route.path} class="m-4 my-auto text-gray-400">{@html route.icon}</a>
    {/each}
<style>
    /* your styles go here */
</style>
