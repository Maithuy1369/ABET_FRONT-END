<template>
  <div id="mainnn">
    <div class="part22-card card fluid">
      <div class="title">
        <span> <strong>PHIẾU ĐÁNH GIÁ PI </strong></span>
      </div>

      <ag-grid-vue
        style="width: 100%; height: 500px; margin: 0 auto"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rawData"
        :defaultColDef="defaultColDef"
        v-if="agReady"
      >
      </ag-grid-vue>
    </div>
    <div>
      <v-btn
        class="btn text-white"
        type="submit"
        color="#c96d04"
        @click="ListPIbySO"
        size="x-large"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left text-white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        QUAY LẠI</v-btn
      >
      <v-btn
        @click="edit"
        v-if="editable"
        color="#19940e"
        class="btn text-white"
        >GHI NHẬN</v-btn
      >
    </div>
  </div>
</template>
<script>
import { documentAPI } from "@/api/document";
import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import html2pdf from "html2pdf.js";
export default {
  components: {
    AgGridVue,
  },
  methods: {
    ListPIbySO() {
      this.$router.push("/document/all-document-by-so/:id");
    },
    exportToPDF() {
      html2pdf(document.getElementById("mainnn"));
    },
    edit() {
      if (this.derivative) {
        let data = [];

        for (let i in this.detailDocumentOrigin.data) {
          let dataO = this.detailDocumentOrigin.data[i].detail;
          for (let d in dataO) {
            let rawData = this.rawData.find(
              (a) => a.studentId == dataO[d].studentId
            );
            let value = JSON.parse(dataO[d].value);
            for (let v of Object.keys(value)) {
              let feeValueField = dataO[d].feeValueField;
              console.log(feeValueField);
              let customField = (v + dataO[d].feeValueField).replaceAll(
                ".",
                ""
              );
              value[v] = rawData[customField] ? rawData[customField] : value[v];
            }
            dataO[d].value = JSON.stringify(value);
            data.push(dataO[d]);
          }
        }
        documentAPI.editDocument(data);
      } else {
        let data = [];
        let rawData = this.rawData;
        this.detailDocumentOrigin.data[0].detail.map((a) => {
          let rData = rawData.find((r) => r.studentId == a.studentId);
          let value = JSON.parse(a.value);
          for (let v of Object.keys(value)) {
            value[v] = rData[v];
          }
          a.value = JSON.stringify(value);
          data.push(a);
        });
        documentAPI.editDocument(data);
      }
      alert("Đã ghi nhận thành công!");
    },
  },
  async created() {
    let id = this.$route.params.id;
    let res = await documentAPI.getDetailDocument(id);
    if (res.status == 200) {
      let rawData = [];
      this.$set(this, "detailDocumentOrigin", res.data);
      // this.detailDocumentOrigin = res.data;
      this.editable = this.detailDocumentOrigin.assessorId.includes(
        this.$store.state.user.user.profile.userName
      );
      let eluvationField = this.columnDefs.find((a) => a.isEluvation);
      eluvationField.headerName = res.data.evaluateField;
      res.data.data.map((a) => {
        if (a.field != 0) {
          this.derivative = true;
          eluvationField.children.push({
            editable: this.editable,
            headerName: a.field,
            children: [],
          });
          let value = JSON.parse(a.detail[0].value);

          for (let v of Object.keys(value)) {
            eluvationField.children[
              eluvationField.children.length - 1
            ].children.push({
              editable: this.editable,
              field: (v + a.field).replaceAll(".", ""),
              originField: v + a.field,
              headerName: v,
            });
            eluvationField.children[
              eluvationField.children.length - 1
            ].children.push({
              editable: this.editable,
              field: v,
              hide: true,
              headerName: v,
            });
            // a.detail.map(r=>r[])
          }
          // a.detail = [...a.detail, ...value];
          a.detail.map((b, i) => {
            let v = JSON.parse(b.value);
            for (let I of Object.keys(v)) {
              a.detail[i][(I + a.field).replaceAll(".", "")] = v[I];
              a.detail[i]["feeValueField"] = a.field;
            }
            // a.detail[i] = { ...b, ...v };
          });
        } else {
          let value = JSON.parse(a.detail[0].value);

          for (let v of Object.keys(value)) {
            eluvationField.children.push({
              editable: this.editable,
              field: v,
              headerName: v,
            });
          }
          // a.detail = { ...a.detail, ...value };
          a.detail.map((b, i) => {
            let v = JSON.parse(b.value);
            a.detail[i] = { ...b, ...v };
          });
        }
        rawData = [...rawData, ...a.detail];

        // this.rawData = [...this.rawData, ...a.detail];
      });
      let distinc = [];
      let computedRawData = [];
      rawData.map((r) => {
        if (distinc.includes(r.studentId)) {
          let index = distinc.indexOf(r.studentId);
          for (let a of Object.keys(r)) {
            if (computedRawData[index][a] == "" || !computedRawData[index][a]) {
              computedRawData[index][a] = r[a];
            }
          }
        } else {
          computedRawData.push(r);
          distinc.push(r.studentId);
        }
      });
      this.rawData = computedRawData;
      this.agReady = true;
    }
  },
  computed: {},
  watch: {},
  data() {
    return {
      derivative: false,
      editable: false,
      agReady: false,
      defaultColDef: {
        resizable: true,
      },
      columnDefs: [
        {
          headerName: "Họ tên",
          children: [
            {
              field: "firstName",
              headerName: "Họ đệm",
            },
            {
              field: "lastName",
              headerName: "Tên",
            },
          ],
        },

        {
          field: "studentId",
          headerName: "MSV",
        },

        {
          field: "classId",
          headerName: "Lớp",
        },
        {
          isEluvation: true,
          headerName: "eluvation",
          children: [],
        },
      ],
      rawData: [],
      detailDocumentOrigin: {},
    };
  },
};
</script>
<style>
/* .ag-theme-alpine {
  --ag-header-column-separator-display: block;
  --ag-header-column-separator-height: 100%;
  --ag-header-column-separator-width: 2px;
  --ag-header-column-separator-color: purple;

  --ag-header-column-resize-handle-display: block;
  --ag-header-column-resize-handle-height: 25%;
  --ag-header-column-resize-handle-width: 5px;
  --ag-header-column-resize-handle-color: orange;
} */
.ag-root-wrapper {
  border: none !important;
}
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
  border-top-color: blue;
  border-top: 3px solid #2980e4;
  border-width: 2;
  width: -webkit-fill-available;
}
.title {
  margin: 0 10px 30px;
  border-bottom: 1px solid #d9d9d9;
  font-weight: 400;
  color: #0355b3;
}
</style>
