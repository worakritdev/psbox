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
    import SideMenu from "$lib/layouts/SideMenu.svelte";
</script>

<!-- markup (zero or more items) goes here -->

<body>
    <Header></Header>
    <div class="contianer">
        <SideMenu />
        <div class="ml-14 md:ml-64">
            <slot><!-- optional fallback --></slot>
        </div>
    </div>
</body>

<style>
    /* your styles go here */
</style>
