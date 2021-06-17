<script>
    export let blog = {};

    const { title, author, conents, url } = blog;
</script>

<ion-card>
    <ion-card-header>
        <ion-card-subtitle>{url||'หาข้อมูล url ไม่พบ'}</ion-card-subtitle>
        <ion-card-title>{title||'หาข้อมูล title ไม่พบ'}</ion-card-title>
    </ion-card-header>
    <ion-card-content> {conents||'หาข้อมูลไม่พบ'} </ion-card-content>
</ion-card>

<style>
    /* your styles go here */
</style>
