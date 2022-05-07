<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div class="counter" :style="{ color: $store.state.colorCode }">
    <div class="count">{{ $store.state.count }}</div>
    <div class="sqr">
      {{ $store.state.count }} <sup>2</sup> = {{ $store.getters.squared }}
    </div>
    <div class="actions">
      <button @click="$store.dispatch('less')">-</button>
      <button @click="$store.dispatch('plus')">+</button>
    </div>
    <div>
      <input type="text" placeholder="color code" v-model="colorCode" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(val) {
        this.$store.commit("setColor", val);
      },
    },
  },
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
