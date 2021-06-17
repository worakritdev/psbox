<script context="module">
  import { API } from "$lib/Env";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session, context }) {
    const url = `${API}/blogs`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          blogs: await res.json(),
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
  import Card from "$lib/components/Card.svelte";
  import Icon, { rocket } from "$lib/components/Icon.svelte";

  export let blogs;
  console.log(blogs);
</script>

<div
  class="container grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 text-center"
>
  {#each blogs as blog}
    <Card {blog} />
  {/each}
</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
