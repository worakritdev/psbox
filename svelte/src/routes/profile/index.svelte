<script>
    // your script goes here

    import LoginUi from "$lib/components/LoginUi.svelte";
    import ProfileUi from "$lib/layouts/ProfileUi.svelte";
    import { user } from "$lib/store/userStores";
</script>

<!-- markup (zero or more items) goes here -->
{#if $user}
    <ProfileUi />
{:else}
    <LoginUi />
{/if}

<style>
    /* your styles go here */
</style>
