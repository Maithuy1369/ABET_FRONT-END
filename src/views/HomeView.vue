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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  padding: 0px;
}
.part1 {
  height: 10%;
  width: 100%;
}
.part2 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90%;
}
.part21 {
  height: 100%;
  width: 20%;
  background-color: gray-200;
}
.part22 {
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;

  background-color: gray-400;
}
.v-app-bar {
  height: 100%;
}
.v-main {
  height: 100%;
}
</style>
