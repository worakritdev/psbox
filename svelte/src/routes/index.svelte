<!-- markup (zero or more items) goes here -->
<script context="module">
import { API } from "$lib/Env";


  export async function load({}) {

    const url = `${API}/blogs`
    const res = await fetch(url);

    const data = await res.json();

    return {
      props: {
        blogs: data,
      },
    };
  }
</script>

<script>

    export let blogs;
</script>
    {JSON.stringify(blogs)}
<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
  /* your styles go here */
</style>
