<script>
  export let item = ["Title", "Name", "Description"];
  export let name;
  function handlerSubmit() {
    let myForm = document.getElementById("myForm");
    let formData = new FormData(myForm);
    formData.forEach((k, v) => {
      console.log(k);
    });
    console.log(formData.get("Title"));
  }
</script>

<ion-card>
  <ion-card-header>
    <ion-card-title>{name || "NO Name"}</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <form on:submit|preventDefault={handlerSubmit} id="myForm">
      {#each item as item}
        <ion-item>
          <ion-label position="floating">{item}</ion-label>
          <ion-input
            type="text"
            name={item}
            id={item}
            placeholder={item}
            required
          />
        </ion-item>
      {/each}

      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </ion-card-content>
</ion-card>

<style>
  /* your styles go here */
</style>
