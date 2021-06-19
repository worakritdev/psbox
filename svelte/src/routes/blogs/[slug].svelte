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
  export let article;
  const { title, description, authors, comments, likes, url, id, content } =
    article;
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
  <iframe src={url} frameborder="0"></iframe>
  <p>
    {content}
    {authors}
  </p>
  <ion-segment value="qa" onIonChange="segmentChanged($event)" scrollable >
    <ion-segment-button value="qa">
      <ion-label>ถาม-ตอบ</ion-label>
    </ion-segment-button>
    <ion-segment-button value="docs">
      <ion-label>คู่มือ</ion-label>
    </ion-segment-button>
    <ion-segment-button value="contact">
      <ion-label>ติดต่อ</ion-label>
    </ion-segment-button>
    <ion-segment-button value="relation">
      <ion-label>เกี่ยวข้อง</ion-label>
    </ion-segment-button>
  </ion-segment>
</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
