<template>
  <nav class="nav">
    <h1 class="nav__logo">Zakopane-Rzadkosz.pl</h1>
    <ul class="nav__list">
      <li class="nav__item">
        <nuxt-link exact to="/" class="nav__link">Strona główna</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link exact to="/o-nas" class="nav__link">O nas</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link exact to="/lokalizacja" class="nav__link"
          >Lokalizacja</nuxt-link
        >
      </li>
      <li class="nav__item">
        <nuxt-link exact to="/galeria" class="nav__link">Galeria</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link exact to="/kontakt" class="nav__link">Kontakt</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  color: var(--white-color);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  &__logo {
  }
  &__list {
    list-style: none;
    display: grid;
    grid-auto-flow: column;

    align-items: center;
  }
  &__item {
    padding: 1rem;
  }
  &__link {
    text-decoration: none;
    font-weight: 700;
    color: var(--white-color);
    transition: 0.2s ease-in-out;
    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
