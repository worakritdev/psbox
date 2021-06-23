<script context="module">
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
  import { API } from "$lib/Env";

  export let article;
  const { title, description, authors, comments, likes, url, id, content } =
    article;
  let qa = [],
    docs,
    contat,
    relation,
    comment,
    selected = "";
  function handleChange() {}
  function newComment() {}
  const data = [
    { name: "qa", data: ["test"] },
    { name: "comment", comments: [] },
    { name: "docs", docs: [] },
  ];

  let total = data.flat();

  const items = data.map((item) => {
    return item;
  });

  $: findItem = data.find((item) => {
    return item.name === selected;
  });
</script>

<div class="grid grid-cols-1 text-center">
  <h1>
    <ion-header>
      <ion-toolbar>
        <ion-title> {title}</ion-title>
      </ion-toolbar>
    </ion-header>
  </h1>
  <h2>
    <a href={url}>
      {url}
    </a>
  </h2>
  <p>
    {content}
    {authors}
  </p>
</div>
{#each data as t}
{JSON.stringify(t)}
{/each}
<ion-segment on:click={(ev) => (selected = ev.target.value)}>
  <ion-segment-button value="comment">
    <ion-label>Comments</ion-label>
  </ion-segment-button>
  <ion-segment-button value="qa">
    <ion-label>Q/A</ion-label>
  </ion-segment-button>
  <ion-segment-button value="docs">
    <ion-label>Docs</ion-label>
  </ion-segment-button>
</ion-segment>
{selected}
{JSON.stringify(findItem)}
<form on:submit|preventDefault={newComment}>
  <input
    type="text"
    bind:value={comment}
    class="bg-indigo-300"
    on:submit={(ev) => {
      qa = [...qa, comment];
    }}
  />
  <button type="submit">Add</button>
</form>


<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
