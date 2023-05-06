<template>
  <div class="v-nav-bar">
    <div class="d-flex flex-column flex-shrink-0 p-3">
      <div class="h-[50px] text-white flex items-center">
        <h6 class="font-bold text-xl">HỆ THỐNG ĐIỆN TỬ</h6>
      </div>
      <hr />
      <!--[-->
      <div class="title">
        <router-link to="/homeView" class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 -1.5 16 24"
          >
            <path
              d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"
            />
          </svg>
          <span class="material-symbols-outlined"> Trang chủ </span>
        </router-link>
      </div>
      <hr />
      <!-- PROFILE -->
      <div class="group">
        <section class="VPSidebarGroup text-white">
          <div class="title" style="font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="24"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 -1.5 16 24"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
              />
            </svg>
            <span class="material-symbols-outlined"> Thông tin cá nhân</span>
          </div>
          <div class="flex flex-col justify-between space-y-[30px]">
            <router-link
              to="/profile"
              class="relative items-center w-full text-sm rounded-md transition duration-400 ease-in-out"
            >
              Hồ sơ cá nhân
            </router-link>
            <div class="mx-auto mb-2"></div>
            <router-link
              to="/changePass"
              class="relative items-center w-full text-sm rounded-md transition duration-400 ease-in-out"
            >
              Đổi mật khẩu
            </router-link>
          </div>
        </section>
      </div>
      <hr />
      <!-- SO -->
      <div class="group">
        <section class="VPSidebarGroup text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            fill="currentColor"
            class="bi bi-clipboard-check"
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
          <span class="material-symbols-outlined"> Danh sách các SO</span>
          <div
            v-for="(value, key, index) in computedAllSODocument"
            :key="index"
          >
            <p>{{ key }}</p>
            <div
              v-for="(soo, I) in value"
              :key="'detail' + I"
              style="cursor: pointer"
              @click="() => allDocumentBySO(soo.id)"
            >
              - {{ soo.name }}
            </div>
          </div>
          <v-btn v-if="isSuperUser" @click="configSODocument">Tạo mới</v-btn>
          <!--] -->
        </section>
      </div>
      <hr />
      <div class="title text-white">
        <span class="material-symbols-outlined"> Biểu đồ thống kê </span>
      </div>
      <hr />
      <div class="group">
        <!--[-->
        <router-link to="/Logout" class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            fill="currentColor"
            class="bi bi-power"
            viewBox="0 -1.5 16 24"
          >
            <path d="M7.5 1v7h1V1h-1z" />
            <path
              d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
            />
          </svg>
          <span class="material-symbols-outlined"> Đăng xuất </span>
        </router-link>

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
    configSODocument() {
      this.$router.push("/SO/config");
    },
    allDocumentBySO(id) {
      this.$router.push("/document/all-document-by-so/" + id);
    },
  },
  data() {
    return {
      allSODocument: [],
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
  width: 200;
  background-color: #0d0d24;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
</style>
