<template>
  <div class="home">
    <div class="v-main">
      <div class="part1">
        <HeaderBar />
      </div>
      <div class="part2">
        <div class="part21">
          <NavBar />
        </div>
        <div class="part22">
          <Content />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Content from "@/components/home/Content.vue";
import HeaderBar from "@/components/home/HeaderBar.vue";
import NavBar from "@/components/home/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    HeaderBar,
    NavBar,
    Content,
  },
};
</script>

<style>
.v-main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  padding: 0px;
}
.part1 {
  height: 15%;
  width: 100%;
}
.part2 {
  display: flex;
  flex-direction: row;
  height: 85%;
  width: 100%;
}
.part21 {
  height: 85%;
  width: 20%;
}
.part22 {
  height: 85%;
  width: 80%;
}
</style>
