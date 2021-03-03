<template>
  <div>
    <Header />
    <Nuxt />
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
</style>
