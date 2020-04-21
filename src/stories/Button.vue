<template>
  <button :class="{ rounded: rounded }"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    rounded: {
      type: Boolean,
      default: false
    }
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