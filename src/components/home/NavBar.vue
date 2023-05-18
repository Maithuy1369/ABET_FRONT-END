<template>
  <div class="v-nav-bar text-white">
    <div class="d-flex flex-column flex-shrink-0 p-3">
      <div class="h-[55px] text-black flex items-center">
        <span>HỆ THỐNG ĐIỆN TỬ</span>
      </div>
      <hr class="text-black" />

      <!--[-->
      <div class="group1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-house text-black"
          viewBox="0 -1.5 16 24"
        >
          <path
            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"
          />
        </svg>

        <span class="material-symbols-outlined" @click="homePage" type="button">
          Trang chủ
        </span>
      </div>

      <!-- PROFILE -->
      <div class="group mt-2">
        <section class="VPSidebarGroup text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-person text-black"
            viewBox="0 -1.5 16 24"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
            />
          </svg>
          <span class="material-symbols-outlined">Thông tin cá nhân</span>

          <div class="bt-list">
            <div class="group1">
              <span
                class="material-symbols-outlined-1 mb-1"
                variant="tonal"
                v-if="isSuperUser"
                @click="showprofile"
                type="button"
                >Hồ sơ cá nhân
              </span>
            </div>

            <div class="group1">
              <span
                class="material-symbols-outlined-1 mb-2"
                variant="tonal"
                v-if="isSuperUser"
                @click="changePass"
                type="button"
                >Đổi mật khẩu</span
              >
            </div>
          </div>
        </section>
      </div>
      <!-- QUAN LY THANH VIEN -->
      <div class="group1 mt-2">
        <v-icon class="bi text-black">mdi-account-group-outline</v-icon>
        <span
          class="material-symbols-outlined"
          @click="group_profile"
          type="button"
        >
          Quản lý thành viên
        </span>
      </div>
      <!-- SO -->
      <div class="group mt-2">
        <section class="VPSidebarGroup text-white">
          <div class="group1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-clipboard-check text-black"
              viewBox="0 -1.5 16 24"
            >
              <path
                fill-rule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path
                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
              />
              <path
                d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
              />
            </svg>
            <span
              class="material-symbols-outlined"
              @click="configSO"
              type="button"
            >
              Danh sách các SO</span
            >
          </div>
          <div class="bt-list">
            <div
              v-for="(value, key, index) in computedAllSODocument"
              :key="index"
              class="mb-1"
            >
              <span
                ><strong>Năm: {{ key }}</strong></span
              >
              <div
                v-for="(soo, I) in value"
                :key="'detail' + I"
                style="cursor: pointer"
                @click="() => allDocumentBySO(soo.id)"
                class="group1"
              >
                {{ soo.name }}
              </div>
            </div>
          </div>

          <!--] -->
        </section>
      </div>
      <!-- BIEU DO -->
      <div class="group1 mt-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-bar-chart-line text-black"
          viewBox="0 -1.5 16 24"
        >
          <path
            d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
          />
        </svg>
        <span class="material-symbols-outlined" @click="chartSO" type="button">
          Biểu đồ thống kê
        </span>
      </div>
      <!-- DANG XUAT -->
      <div class="group1 mt-2 text-white">
        <!--[-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-power text-black"
          viewBox="0 -1.5 16 24"
        >
          <path d="M7.5 1v7h1V1h-1z" />
          <path
            d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
          />
        </svg>

        <span
          class="material-symbols-outlined"
          @click="showDialog"
          type="button"
        >
          Đăng xuất
        </span>

        <v-dialog
          v-model="dialog"
          width="500px"
          :style="{
            display: dialog ? 'block' : 'none',
          }"
          style="z-index: 9999"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">XÁC NHẬN ĐĂNG XUẤT ?</span>
            </v-card-title>
            <v-card-text>
              <span class="text-h5 text-black"
                >Bạn đã chắc chắn muốn rời khỏi hệ thống điện tử?</span
              >
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="btn text-white"
                color="#03741b"
                variant="elevated"
                @click="login"
              >
                Xác nhận
              </v-btn>
              <v-btn
                class="btn text-white"
                color="#cf0d0d"
                variant="elevated"
                @click="dialog = false"
              >
                Hủy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--]-->
      </div>
      <!--]--><!--[--><!--]-->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  created() {
    this.allSODocument = this.$store.state.sODocument.allSODocument;
  },
  methods: {
    homePage() {
      this.$router.push("/homePage");
    },
    configSO() {
      this.$router.push("/SO/config");
    },
    configSODocument() {
      this.$router.push("/SO/config");
    },
    allDocumentBySO(id) {
      this.$router.push("/document/all-document-by-so/" + id);
    },
    group_profile() {
      this.$router.push("/group_profile");
    },
    showprofile() {
      this.$router.push("/profile");
    },
    changePass() {
      this.$router.push("/changePass");
    },
    showDialog() {
      this.dialog = true;
    },
    login() {
      localStorage.removeItem("feeUserInfo");
      // localStorage.feeUserInfo = JSON.stringify({});
      this.$router.push("/login");
    },
    chartSO() {
      this.$router.push("/chart");
    },
  },
  data() {
    return {
      allSODocument: [],
      dialog: false,
    };
  },
  computed: {
    isSuperUser() {
      return this.$store.state.user.user.profile.userType == 0;
    },
    computedAllSODocument() {
      let allSODOcument = {};
      this.allSODocument.map((a) => {
        if (!allSODOcument[a.identifierId]) {
          allSODOcument[a.identifierId] = [a];
        } else {
          allSODOcument[a.identifierId].push(a);
        }
      });
      return allSODOcument;
    },
  },
};
</script>

<style>
.v-nav-bar {
  height: calc((100%-59px - 0px) - 0px);
  background-color: #fcfdf0e7;
  position: fixed;
  table-layout: fixed;
  display: table;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  border-right: 1px solid #284f7a;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  color: black;
}
.material-symbols-outlined-1 {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  color: black;
}
.bi {
  margin-right: 5px;
  width: 30px;
  height: 30px;
  color: black;
}
.bt-list {
  margin-left: 36px;

  color: black;
}

.group1 {
  color: black;
}
.group1:active {
  cursor: pointer;
  pointer-events: auto;
  color: #c52020 !important;
}
.group1:hover {
  cursor: pointer;
  pointer-events: auto;
  box-sizing: inherit;
  border-style: solid #ade9d5;
  background-color: #ccf580;
  position: relative;
  border-radius: 5px;
}
</style>
