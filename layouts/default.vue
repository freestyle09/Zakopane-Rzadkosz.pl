<template>
  <div>
    <Header />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>
<script>
module.exports = {
  components: {
    Header: () => import('@/components/Header'),
  },
}
</script>

<style lang="scss">
.nuxt-link-active {
  color: var(--primary-color) !important;
}
.main {
  padding: 3.125rem 0;
}
</style>
