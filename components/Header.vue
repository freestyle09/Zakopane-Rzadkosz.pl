<template>
  <header class="header">
    <div class="container header__container">
      <BackgroundImage alt="Pokoje" src="" src-set="" />
      <Navigation />
      <Hero />
      <Quote
        >"Dom nie jest tam gdzie mieszkamy, ale tam gdzie kochamy i jesteśmy
        kochani"</Quote
      >
    </div>
  </header>
</template>

<script>
export default {
  components: {
    Navigation: () => import('@/components/Navigation'),
    BackgroundImage: () => import('@/components/BackgroundImage'),
    Hero: () => import('@/components/Hero'),
    Quote: () => import('@/components/Quote'),
  },
}
</script>

<style scoped lang="scss">
.header {
  height: 100vh;
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding-bottom: 3rem;
  }
}
</style>
