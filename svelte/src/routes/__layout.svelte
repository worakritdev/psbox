<script>
  import '../app.postcss'
  import Header from '../lib/components/Header.svelte';
</script>

<body>
  <Header color="light"></Header>
  <div class="2xl:container">

    <slot><!-- optional fallback --></slot>
  </div>
</body>
