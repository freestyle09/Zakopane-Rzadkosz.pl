<template>
  <button
    class="button"
    :style="{ textTransform: uppercase ? 'uppercase' : 'initial' }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.button {
  padding: 0.7rem 2rem;
  background-color: var(--primary-color);
  font-size: 0.8rem;
  font-weight: 900;
  color: var(--white-color);
  border: 3px solid var(--primary-color);
}
</style>
