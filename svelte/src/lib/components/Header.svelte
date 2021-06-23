<ion-header>
    <ion-toolbar color={color}>
      <ion-title class="w-screen flex flex-row justify-between uppercase">
          <a sveltekit:prefetch href="/">home</a>
          <a sveltekit:prefetch href="/about">about</a>
          <a sveltekit:prefetch href="/blogs">blogs</a>
          <a sveltekit:prefetch href="/settings/profile">profile</a>
      </ion-title>
    </ion-toolbar>
  </ion-header>

<script>
  export let color;
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->