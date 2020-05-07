<template>
  <div>
    <img src="./assets/img/logo.png" alt="Logo" />
    Hello this is patrick
    <div>
      <v-button @click="testClick">Sup</v-button>
    </div>
  </div>
</template>

<style lang="scss">
  html {
    font-family: 'Quicksand', sans-serif;
  }

  body {
    font-size: 14px;
  }
</style>

<script>
import Button from './components/Button'

export default {
  components: {
    'v-button': Button
  },
  methods: {
    testClick: function() {
      console.log('pull my finger')
    }
  }
}
</script>