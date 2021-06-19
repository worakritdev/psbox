<script context="module">
  import { API } from "$lib/Env";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session, context }) {
    const url = `${API}/blogs/`;
    const res = await fetch(url);
    console.log(res);
    if (res.ok) {
      return {
        props: {
          articles: await res.json(),
        },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<script>
  import CardBlog from "$lib/components/CardBlog.svelte";
  // your script goes here
  export let articles;
</script>


<div class="grid lg:grid-cols-3 gap-5 m-4 md:grid-cols-2 grid-cols-1 ">

    {#each articles as article}
    <!-- content here -->
    
    <CardBlog {article} />
    {/each}
</div>

<!-- markup (zero or more items) goes here -->

<style>
  /* your styles go here */
</style>
