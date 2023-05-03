<template>
  <div class="v-nav-bar">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
      <p class="text-center">Menu</p>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link text-white">
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
            Trang chủ
          </a>
        </li>
        <li class="nav-item">
          <a
            href="#"
            class="nav-link text-white"
            data-bs-toggle="collapse"
            data-bs-target="#information-collapse"
          >
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
            Thông tin cá nhân
          </a>
          <div class="collapse" id="information-collapse">
            <ul class="list-unstyled px-4">
              <li>
                <a href="#" class="nav-link text-white">Cập nhật thông tin</a>
              </li>
              <li><a href="#" class="nav-link text-white">Đổi mật khẩu</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a
            href="#"
            class="nav-link text-white"
            data-bs-toggle="collapse"
            data-bs-target="#form-collapse"
          >
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
            Danh sách các SO
          </a>
          <div class="collapse" id="form-collapse">
            <ul class="list-unstyled px-4">
              <li>
                <a href="#" class="nav-link text-white">Đánh giá SO1</a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">Đánh giá SO2</a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">Đánh giá SO3</a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">Đánh giá SO4</a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">Đánh giá SO5</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#logoutnow"
          >
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
            Thoát
          </button>
          <div
            class="modal"
            id="logoutnow"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header text-dark">
                  <h5 class="modal-title">Thoát hệ thống điện tử</h5>
                </div>
                <div class="modal-body text-center text-dark">
                  <p>Bạn đã chắc chắn muốn rời đi ?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    Chấp nhận
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Huỷ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
