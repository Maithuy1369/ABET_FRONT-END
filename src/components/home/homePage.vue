<template>
  <div class="part22-card text-justify">
    <div class="row">
      <v-col cols="12" sm="12">
        <v-sheet class="ma-2 pa-1">
          <div class="d-flex">
            <v-col cols="12" sm="9">
              <h2 style="color: blue"><strong>Mọi thứ</strong></h2>
              <h2 style="color: brown">cần thiết cho việc</h2>
              <h2 style="color: blue"><strong>đánh giá sinh viên</strong></h2>
              <p>
                Website ứng dụng cho hoạt động kiểm định theo chuẩn ABET là
                trang điện tử giúp quản lý, đánh giá chuẩn đầu ra của sinh viên
                (Student Outcomes) một cách nhanh chóng và hiệu quả!
              </p>
            </v-col>
            <v-col cols="12" sm="3" class="justify-center mb-20">
              <v-img
                class="bg-blue"
                src="https://banner2.cleanpng.com/20180716/laj/kisspng-square-academic-cap-graduation-ceremony-hat-academ-gottfried-wilhelm-leibniz-5b4c3708062e21.2091548715317214800253.jpg"
              ></v-img>
            </v-col>
          </div>
          <v-img
            class="mb-30"
            src="https://schoolmanagementschoolblog.files.wordpress.com/2019/12/student-management.png?w=1412"
            cover
          ></v-img>
        </v-sheet>
      </v-col>
      <!-- <div class="row"> -->

      <v-col cols="12" md="4">
        <v-sheet class="ma-2 pa-1">
          <div class="image">
            <a
              href="https://fee.haui.edu.vn/vn"
              title="Truy cập trang Đại học Công nghiệp Hà Nội"
            >
              <v-img
                src="https://tv.haui.edu.vn//media/77/t77498.jpg"
                width="350"
                height="220"
              ></v-img>
            </a>
          </div>
          <div class="content text-center">
            <a
              href="https://fee.haui.edu.vn/vn"
              title="Truy cập trang Đại học Công nghiệp Hà Nội"
              style="text-decoration: none"
              >Trường Đại học Công nghiệp Hà Nội là cơ sở giáo dục đại học công
              lập với bề dày lịch sử 125 năm xây dựng và phát triển luôn được
              đánh giá là cơ sở đào tạo cán bộ kinh tế - kỹ thuật hàng đầu của
              cả nước.
            </a>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="4">
        <v-sheet class="ma-2 pa-1">
          <div class="image">
            <a
              href="https://fee.haui.edu.vn/vn"
              title="Truy cập trang Khoa Điện tử HaUI"
            >
              <v-img
                src="https://fee.haui.edu.vn//media/76/t76468.jpg"
                cover
              ></v-img>
            </a>
          </div>
          <div class="content text-center">
            <a
              href="https://fee.haui.edu.vn/vn"
              title="Truy cập trang Khoa Điện tử HaUI"
              style="text-decoration: none"
              >Khoa Điện tử được thành lập ngày 19 tháng 10 năm 1998, với tiền
              thân là tổ Điện tử thuộc Ban Điện trường CĐ Công nghiệp Hà Nội là
              1 trong 15 khoa đào tạo mũi nhọn của trường Đại học Công nghiệp Hà
              Nội.
            </a>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="4">
        <v-sheet class="ma-2 pa-1">
          <div class="image">
            <a href="https://www.abet.org/" title="Truy cập trang ABET">
              <v-img
                src="https://www.abet.org/wp-content/uploads/2017/12/ABET-Logo-thumbnail.svg"
                width="350"
                height="220"
              ></v-img>
            </a>
          </div>
          <div class="content text-center">
            <a
              href="https://www.abet.org/"
              title="Truy cập trang ABET "
              style="text-decoration: none"
              >ABET là một tổ chức được thành lập bởi các hiệp hội ngành nghề
              tại Mỹ. ABET thực hiện kiểm định các chương trình giáo dục đại học
              trong các lĩnh vực Kỹ thuật (Engineering), Công nghệ (Technology),
              Điện toán (Computing) và Khoa học ứng dụng (Applied Science) với
              bộ 9 tiêu chuẩn
            </a>
          </div>
        </v-sheet>
      </v-col>
    </div>
  </div>
</template>
<script></script>
<style>
.part22-card {
  position: relative;
  margin-left: 60px;
  margin-top: 20px;
  margin-right: 30px;
  padding-top: 30px;
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  display: block;
  border-top: 3px solid #2980e4;
  border-width: 2;
  width: -webkit-fill-available;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
.row {
  box-sizing: border-box;
}
.col-md-3 {
  box-sizing: border-box;
}

.image a {
  cursor: pointer;
  display: block;
  position: relative;
  box-sizing: border-box;
}
.content a {
  color: black;
  cursor: pointer;
}

.content a:hover {
  color: #264cf8;
}
</style>
