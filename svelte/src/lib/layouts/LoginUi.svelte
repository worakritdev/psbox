<script>
  import { AUTH } from "$lib/Env";
  import { user } from "$lib/store/userStores";

  export let email, password, username;

  async function handlerAction() {
    const res = await fetch(
      `${AUTH}username=${username}&&password=${password}`,
      {
        method: "GET",
      }
    );
    const auth = await res.json();

    if (auth != "NOUSER" && auth != undefined) {
      console.log(`Auth`, auth);
      $user = auth;
    }
  }
</script>

<ion-card>
  <ion-card-header>
    <ion-card-subtitle>เข้าสู่ระบบ</ion-card-subtitle>
    <ion-card-title>Login</ion-card-title>
  </ion-card-header>
  <form on:submit|preventDefault={handlerAction}>
    <ion-card-content>
      <ion-item>
        <ion-label position="floating">Username</ion-label>
        <ion-input
          type="text"
          name="email"
          on:input={(ev) => (username = ev.target.value)}
        />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input
          type="password"
          on:input={(ev) => (password = ev.target.value)}
        />
      </ion-item>
      <ion-button
        type="submit"
        on:click={handlerAction}
        fill="solid"
        shape="round"
      >
        Login
      </ion-button>
    </ion-card-content>
  </form>
</ion-card>

<style>
  /* your styles go here */
</style>
