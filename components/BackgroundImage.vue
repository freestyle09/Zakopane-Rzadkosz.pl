<template>
  <div class="background">
    <img class="background__image" src="/valley.jpg" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  background-color: var(--primary-color-rgba);
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-attachment: fixed;
    mix-blend-mode: darken;
  }
}
</style>
