<template>
  <button @click="onClick" :class="{ rounded: rounded }"><slot></slot></button>
</template>

<script>
const log = () => console.log('Welcome to storybook!')

export default {
  name: "MyButton",
  props: {
    click: {
      type: Function,
      default: log,
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event) {
      event.preventDefault();
      this.click();
    },
  }
}
</script>

<style>
button {
  padding: 0.5rem;
}
.rounded {
  border: 0;
  border-radius: 5px;
  background-color: lightgray;
}
</style>