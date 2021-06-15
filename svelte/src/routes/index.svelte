<!-- markup (zero or more items) goes here -->
<script context="module">
  import { API } from "$lib/Env";

  export async function load({}) {
    const url = `${API}/blogs`;
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
  import SearchBox from "$lib/components/SearchBox.svelte";
</script>

<div class="container text-center">
  <SearchBox />
</div>

<style>
  /* your styles go here */
</style>
