<script>

  import Header from '../lib/components/Header.svelte';
</script>

<body>
  <Header></Header>
  <div class="2xl:container">

    <slot><!-- optional fallback --></slot>
  </div>
</body>
