<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div class="counter">
    <div class="count">{{ count }}</div>
    <div class="actions">
      <button @click="count--">-</button>
      <button @click="count++">+</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
button {
  font-size: 3rem;
  width: 6rem;
  height: 4rem;
  margin: 1rem;
  border-radius: 5px;
}
.count {
  font-size: 6rem;
}
</style>
