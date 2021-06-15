<script context="module">
  import { API } from "$lib/Env";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session, context }) {
    const url = `${API}/blogs/${page.params.slug}`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          article: await res.json(),
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
    // your script goes here
    export let article;
</script>

<style>
    /* your styles go here */
</style>



{JSON.stringify(article)}