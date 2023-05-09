<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

// import Content from "@/components/home/Content.vue";
// import HeaderBar from "@/components/home/HeaderBar.vue";
// import NavBar from "@/components/home/NavBar.vue";

export default {
  name: "HomeView",
  // components: {
  //     HeaderBar,
  //     NavBar,
  //     Content,
  // },
};
</script>

<style>
.v-main {
  display: block;
  /* flex-direction: column;
  flex-wrap: wrap; */
  justify-content: center;
  margin: 0px;
  padding-top: 59px;
  min-height: 100%;
  box-sizing: border-box;
}
.part1 {
  width: 100%;
  position: fixed;
  top: 0;
  min-height: 50px;
  margin-bottom: 0;
}
.part21 {
  height: 100%;
  width: 230px;
  background-color: gray-200;
  box-sizing: border-box;
  display: block;
  margin-top: 2px;
  position: fixed;
}
.part22 {
  width: 100%;
  width: -webkit-fill-available; /*Mozilla-based browsers will ignore this. */
  left: 0;
  position: relative;
  margin-left: 230px;
  min-height: 100%;
  box-sizing: border-box;
  display: block;
}
.v-app-bar {
  height: 100%;
}
.v-main {
  height: 100%;
}
</style>
