<template>
  <svg class="g-icon">
    <use :xlink:href="`#i${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: false
    }
  }
}
</script>

<style lang="scss">
  .g-icon {
    width: 1rem;
    height: 1rem;
  }
</style>