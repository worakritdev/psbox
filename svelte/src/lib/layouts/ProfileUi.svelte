<script>
    import { user } from "$lib/store/userStores";


    const [pid, name, lastname, role] = $user.split(",", 4);
</script>

<ion-card>
    <ion-card-header>
        <ion-card-subtitle>{pid}</ion-card-subtitle>
        <ion-card-title>{name} {lastname}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
        {role}
    </ion-card-content>

    <button class="btn btn-primary" on:click={()=>$user=''}>Logout</button>
</ion-card>

<!-- markup (zero or more items) goes here -->
<style>
    /* your styles go here */
</style>
