<template>
  <div>
    <div class="part22-card card fluid">
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
  </div>
</template>
<script>
import { documentAPI } from "@/api/document";
import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
export default {
  components: {
    AgGridVue,
  },
  methods: {},
  async created() {
    let id = this.$route.params.id;
    let res = await documentAPI.getDetailDocument(id);
    if (res.status == 200) {
      this.detailDocumentOrigin = res.data;
      let eluvationField = this.columnDefs.find((a) => a.isEluvation);
      eluvationField.headerName = res.data.evaluateField;
      res.data.data.map((a) => {
        if (a.field != 0) {
          eluvationField.children.push({
            // field: a.field,
            headerName: a.field,
            children: [],
          });
          let value = JSON.parse(a.detail[0].value);

          for (let v of Object.keys(value)) {
            eluvationField.children[
              eluvationField.children.length - 1
            ].children.push({
              field: v,
              headerName: v,
            });
          }
          // a.detail = { ...a.detail, ...value };
          a.detail.map((b, i) => {
            let v = JSON.parse(b.value);
            a.detail[i] = { ...b, ...v };
          });
        } else {
          let value = JSON.parse(a.detail[0].value);

          for (let v of Object.keys(value)) {
            eluvationField.children.push({
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

        this.rawData = [...this.rawData, ...a.detail];
      });
      this.agReady = true;
    }
  },
  data() {
    return {
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
  border: #2980e4;
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
</style>
