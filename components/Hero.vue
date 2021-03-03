<template>
  <div class="hero">
    <h2 class="hero__title">Szukasz dobrego miejsca na wypoczynek?</h2>
    <h3 class="hero__subtitle">Sprawdź naszą ofertę!</h3>
    <Button class="hero__btn" uppercase>
      <nuxt-link class="hero__link" to="/o-nas">Sprawdź</nuxt-link>
    </Button>
  </div>
</template>

<script>
export default {
  components: {
    Button: () => import('@/components/Button'),
  },
}
</script>

<style scoped lang="scss">
.hero {
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 1.6rem;
  color: var(--white-color);
  text-align: center;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
  &__title {
    font-size: 2rem;
  }
  &__subtitle {
    font-size: 1.6rem;
  }
  &__btn {
    color: var(--white-color);
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
      background-color: var(--white-color);
    }
  }
  &__link {
    text-decoration: none;
    color: currentColor;
  }
}
</style>
