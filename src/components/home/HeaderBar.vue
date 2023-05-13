<template>
  <div class="v-app-bar theme--light">
    <div>
      <v-list-item>
        <v-img
          src="@/assets/image/logo_haui.jpg"
          max-width="50"
          alt="logoHAUI"
          style="margin-top: 3px"
        />

        <v-spacer class="title1 pt-2">
          <div>
            <strong>Chương trình kiểm định theo chuẩn ABET</strong>
          </div>
        </v-spacer>
        <div class="right">
          <input
            :disabled="true"
            class="form-control mt-2"
            v-model="fullName"
            type="text"
          />
        </div>
      </v-list-item>
    </div>
  </div>
</template>

<script>
import { userAPI } from "@/api/user";
export default {
  name: "headerBar",
  created() {
    let profile = this.$store.state.user.user.profile;
    // console.log(headerBar);
    this.fullName = profile.lastName + " " + profile.firstName;
  },
  data() {
    return {
      fullName: "",
    };
  },
  methods: {
    submit() {
      let name = this.fullName.split(" ");
      let firstName = name[name.length - 1];
      let lastName = name.slice(0, name.length - 1).join(" ");

      let data = {
        email: this.email,
        firstName: firstName,
        lastName: lastName,
      };
      userAPI.updateUserInfo(data);
    },
  },
};
</script>

<style>
.v-app-bar {
  background-color: #0c5ebb;
  font-family: "Times New Roman", Times, serif;
  font-size: 26px;
  padding-bottom: 5px;
  border-bottom: 1px solid #b8bec5;

  /* position: fixed; */
}
.title1 {
  color: #ffffff;
  margin-left: 50px;
}
</style>
