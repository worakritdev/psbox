<script>
  // your script goes here
  export let article;
  const { id, url, title, content } = article;
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


<div class="h-full flex flex-col justify-between shadow-md">
  <div class="bg-purple-300 truncate">
{title}

</div>
  <a href={url} class="text-blue-500">
    {url}
</a>
{content}
<div class="w-full text-center bg-purple-200">
  <a sveltekit:prefetch href='blogs/{id}'>
    <ion-icon  name="cube"></ion-icon>
  </a>
</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
