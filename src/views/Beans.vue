<template>

<LNav parent="Beans" :chapter="['#father', '#origin', '#rosetta']" :title="['Father Coffee', 'Origin Coffee Roasters', 'Rosetta Roastery']"/>


<div class="main">
  <img alt="Coffee Beans" src="./assets/coffee-beans.jpg">
  <p>This is a page about coffee beans.</p>
</div>

  <div v-for="bean in beans" :key="bean" v-scroll-spy="{offset: -120}" class="main">
    <div v-if="bean.active">
      <h2 :id="bean.id">{{bean.heading}}</h2>
      <p class="par">{{bean.text}}</p>
    </div>
  </div>
</template>

<script>
import LNav from'../components/LNav'

import {mapState, mapMutations} from "vuex"

export default {
  name: 'Beans',
  components: {
    LNav
  },
  methods: {
    ...mapMutations(["filterSearch"])
  },
  computed: {
    ...mapState(["beans","search"])
  }
}
</script>
<style scoped>
.par{
  width: 800px;
  text-align: center;
  margin: auto;
}


</style>