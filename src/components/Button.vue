<template>
  <button class="c-button" type="button" @click="callback($event)">
    <slot></slot>
  </button>
</template>

<style lang="scss">
  .c-button {
    border: 0;
    color: white;
    background: none;
    background-color: lightblue;
    border-radius: 3px;
    font-size: .9rem;
    font-weight: 500;
    text-transform: uppercase;
    outline: none;
    padding: .25rem 1rem;
  }
</style>

<script>
export default {  
  methods: {
    callback: function(e) {
      this.$emit('click', e)
    }
  }
}
</script>