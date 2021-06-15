<script>
    export let blog;
    let islike = false;
</script>

<div class="w-full grid m-4 p-4 text-lg shadow-lg">
    <div class="text-sm">
        {blog.url?blog.url:'no url'}
    </div>
    <h1>
        {blog.title}
    </h1>

    <ion-chip color="danger" mode="ios" outline="true">
        <ion-label />
        <ion-icon name={islike ? "heart" : "heart-outline"} />
    </ion-chip>
</div>

<!-- markup (zero or more items) goes here -->
<style>
    /* your styles go here */
</style>
