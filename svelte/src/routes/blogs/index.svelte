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
  export let blogs;
</script>

{#each blogs as blog}
  {blog.title}
  <a href="blogs/{blog.id}">a</a>
{/each}

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
