<template>
    <button class="g-button" :class="`icon-${iconPosition}`">
      <svg class="icon">
        <use :xlink:href="`#i${icon}`"></use>
      </svg>
      <div class="content">
        <slot />
      </div>
    </button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    icon: {
      type: String,
      required: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
       return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss">
.g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
    border-color: var(--border-color-hover);
    }
    &:active {
        background-color: var(--button-active-bg);
    }
    &:focus {
        outline: none;
    }
    > .icon {
      order: 1;
      margin-right: .3rem;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .icon {
        order: 2;
        margin-left: .3rem;
        margin-right: 0;
      }
      > .content {
        order: 1;
      }
    }
}

</style>