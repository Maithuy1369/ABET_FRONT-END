<template>
  <div class="v-app-bar theme--light">
    <div>
      <v-list-item>
        <v-img
          src="@/assets/image/logo_haui.jpg"
          max-width="50"
          alt="logoHAUI"
        />
        <v-spacer class="text-center justify-space-around text-white pt-1">
          <div><strong>Khoa Điện tử - HaUI</strong></div>
          <div>Chương trình kiểm định theo chuẩn ABET</div>
        </v-spacer>
      </v-list-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBar",
};
</script>

<style>
.v-app-bar {
  background-color: #0d0461;
  font-family: "Times New Roman", Times, serif;
  font-size: 19px;

  /* position: fixed; */
}
</style>
