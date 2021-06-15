<script>
    import IonSplit from "../lib/templates/IonSplit.svelte";

    import "../app.postcss";
    import {
        home,
        board,
        box,
        rocket,
        user,
    } from "$lib/components/Icon.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<!-- markup (zero or more items) goes here -->

<div class="flex flex-row h-screen">
    <div class="w-10 flex flex-col justify-between bg-purple-200">
        <div class="flex-col m-2 mx-auto ">
            <Nav />
        </div>
        <div class="flex-col my-10 mx-auto">
            {@html user}
        </div>
    </div>
    <div class="flex-1 ">
        <Header />
        <div class="container">
            <slot><!-- optional fallback --></slot>
        </div>
    </div>
</div>

<style>
    /* your styles go here */
</style>
