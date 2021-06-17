<script>
  export let email, password, username;

  function handlerAction() {
    console.log(`handlerAction`, email, password);
  }
</script>

<ion-card>
  <ion-card-header>
    <ion-card-subtitle>เข้าสู่ระบบ</ion-card-subtitle>
    <ion-card-title>Login</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <ion-item>
      <ion-label position="floating">E-Mail</ion-label>
      <ion-input
        type="text"
        name="email"
        on:input={(ev) => (email = ev.target.value)}
      />
    </ion-item>
    <ion-item>
      <ion-label position="floating">Password</ion-label>
      <ion-input
        type="password"
        on:input={(ev) => (password = ev.target.value)}
      />
    </ion-item>
    <ion-button on:click={handlerAction} fill="solid" shape="round">
      Login
    </ion-button>
  </ion-card-content>
</ion-card>

<style>
  /* your styles go here */
</style>

