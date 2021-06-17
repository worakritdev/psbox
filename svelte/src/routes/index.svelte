<script>
  import Blogdetails from './blogs/Blogdetails.svelte';

  import { blogs } from "$lib/store/blogStores";

  // your script goes here
</script>

<!-- markup (zero or more items) goes here -->
{#each $blogs as blog}
  <Blogdetails {blog}></Blogdetails>
{/each}

<style>
  /* your styles go here */
</style>
