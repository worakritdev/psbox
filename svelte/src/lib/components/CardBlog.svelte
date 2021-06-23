<script>
  // your script goes here
  export let article;
  const { id, url, title, content, categories, authors, likes, comments } =
    article;
  let c = [
    "primary",
    "secondary",
    "tertiary",
    "success",
    "danger",
    "warning",
    "light",
  ];
</script>

<div
  class="shadow-md ring-4 ring-inset flex flex-col justify-between drop-shadow-md "
>
  <div class="p-2 justify-between drop-shadow-md ">
    <a href={url}>
      <header>{title}</header>
    </a>
    <p>
      {content}
      {categories}
    </p>
  </div>
  <div class="flex">
    <ion-chip color="danger" mode="ios" outline="true">
      <ion-label>{likes || 0}</ion-label>
      <ion-icon name="heart" />
    </ion-chip>
    <ion-chip color="secondary" mode="ios" outline="true">
      <ion-label>{comments || 0}</ion-label>
      <ion-icon name="chatbox" />
    </ion-chip>
    <a href="blogs/{id}">
      <ion-chip color="tertiary" mode="ios" outline="true">
        <ion-label />
        <ion-icon name="cube" />
      </ion-chip>
    </a>
  </div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
