<template>
    <button @click="$emit('click')" class="g-button" :class="`icon-${iconPosition}`">
      <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
      <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
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
    loading: {
      type: Boolean,
      default: false
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
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
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
    .loading {
      animation: spin 2s infinite linear;
    }
}

</style>