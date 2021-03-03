<template>
  <blockquote class="quote">
    <slot />
  </blockquote>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.quote {
  color: var(--white-color);
  font-weight: 700;
  text-align: center;
  font-size: 1.2rem;
  font-style: italic;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
}
</style>
