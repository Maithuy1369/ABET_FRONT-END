<template>
    <div>
        <div class="part22-card card fluid">
            <div class="title">
                <span> <strong>PHIẾU ĐÁNH GIÁ PI </strong></span>
            </div>
            <div id="mainnn">
                <h1
                    style="
                        display: flex;
                        justify-content: center;
                        font-family: 'Times New Roman', Times, serif;
                    "
                >
                    PHIẾU ĐÁNH GIÁ PI
                </h1>
                <div style="margin-left: 80px">
                    <p style="font-family: 'Times New Roman', Times, serif">
                        Học phần: {{ detailDocumentOrigin.name }}
                    </p>
                    <p style="font-family: 'Times New Roman', Times, serif">
                        Hội đồng:
                    </p>
                </div>
                <ag-grid-vue
                    @grid-ready="onGridReady"
                    style="width: 100%; height: 500px; margin: 0 auto"
                    class="ag-theme-alpine"
                    :columnDefs="columnDefs"
                    :rowData="rawData"
                    :defaultColDef="defaultColDef"
                    v-if="agReady"
                >
                </ag-grid-vue>
                <div style="margin-top: 50px; height: 100px">
                    <p style="left: auto; position: absolute; right: 33px">
                        HaUI ngày <span style="margin-left: 30px">tháng</span
                        ><span style="margin-left: 30px"> năm</span>
                    </p>
                    <p
                        style="
                            margin-top: 40px;
                            position: absolute;
                            right: 33px;
                        "
                    >
                        Người đánh giá
                    </p>
                </div>
            </div>
        </div>
        <!-- NUT NHAN -->
        <div
            style="
                display: flex;
                justify-content: start;
                margin: 30px;
                font-size: 25px;
            "
        >
            <v-btn
                class="btn text-white"
                color="#c96d04"
                @click="ListPIbySO"
                size="x-large"
            >
                <v-icon dark left>arrow_back</v-icon>QUAY LẠI
            </v-btn>
            <v-btn
                @click="edit"
                v-if="editable"
                color="#19940e"
                class="btn text-white"
                >GHI NHẬN</v-btn
            >
            <v-btn
                @click="onBtExport"
                v-if="editable"
                color="#19940e"
                class="btn text-white"
                >Xuất file PDF</v-btn
            >
        </div>
        <!--  -->
    </div>
</template>
<script>
import { documentAPI } from "@/api/document";
import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import html2pdf from "html2pdf.js";
const keyRef = {
    tp1: "Thành phần 1",
    tp2: "Thành phần 2",
    tp3: "Thành phần 3",
    tp4: "Thành phần 4",
};
export default {
    components: {
        AgGridVue,
    },
    methods: {
        contains(target, lookingFor) {
            return target && target.indexOf(lookingFor) >= 0;
        },
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
        },
        onBtExport() {
            this.cells.prependContent[2].cells[0].data.value +=
                this.detailDocumentOrigin.name;
            this.gridApi.exportDataAsExcel(this.cells);
        },
        translateHeaderName(key) {
            let keyOnly = Object.keys(keyRef);
            let k = keyOnly.find((a) => key.includes(a));
            return keyRef[k];
        },
        validatorCellInputValue(params) {
            let newVal = params.newValue;
            if (
                newVal != parseInt(newVal) ||
                parseInt(newVal) <= 0 ||
                parseInt(newVal) >= 5
            ) {
                this.rawData[params.node.childIndex][params.colDef.field] =
                    params.oldValue;
                this.rawData = JSON.parse(JSON.stringify(this.rawData));
            }
        },
        cellEditable(params) {
            return (
                params.data.assesserId == this.$store.state.user.user.profile.id
            );
        },
        lookupValue(mappings, index) {
            let user = mappings.find((a) => a.id == index);
            return user.firstName + " " + user.lastName;
        },
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
                            let customField = (
                                v + dataO[d].feeValueField
                            ).replaceAll(".", "");
                            value[v] = rawData[customField]
                                ? rawData[customField]
                                : value[v];
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
        this.allUser = this.$store.state.user.users;
        this.allUser.map((a) => this.allUserId.push(a.id));
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
                        editable: this.cellEditable,
                        onCellValueChanged: this.validatorCellInputValue,
                        headerName: a.field,
                        children: [],
                    });
                    let value = JSON.parse(a.detail[0].value);

                    for (let v of Object.keys(value)) {
                        eluvationField.children[
                            eluvationField.children.length - 1
                        ].children.push({
                            editable: this.cellEditable,
                            onCellValueChanged: this.validatorCellInputValue,
                            field: (v + a.field).replaceAll(".", ""),
                            originField: v + a.field,
                            headerName: this.translateHeaderName(v),
                        });
                        eluvationField.children[
                            eluvationField.children.length - 1
                        ].children.push({
                            editable: this.cellEditable,
                            onCellValueChanged: this.validatorCellInputValue,
                            field: v,
                            hide: true,
                            headerName: this.translateHeaderName(v),
                        });
                        // a.detail.map(r=>r[])
                    }
                    // a.detail = [...a.detail, ...value];
                    a.detail.map((b, i) => {
                        let v = JSON.parse(b.value);
                        for (let I of Object.keys(v)) {
                            a.detail[i][(I + a.field).replaceAll(".", "")] =
                                v[I];
                            a.detail[i]["feeValueField"] = a.field;
                        }
                        // a.detail[i] = { ...b, ...v };
                    });
                } else {
                    let value = JSON.parse(a.detail[0].value);

                    for (let v of Object.keys(value)) {
                        eluvationField.children.push({
                            editable: this.cellEditable,
                            onCellValueChanged: this.validatorCellInputValue,
                            field: v,
                            headerName: this.translateHeaderName(v),
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
                        if (
                            computedRawData[index][a] == "" ||
                            !computedRawData[index][a]
                        ) {
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
            countryFilterParams: {
                filterOptions: ["contains"],
                textMatcher: ({ value, filterText }) => {
                    var aliases = {
                        usa: "united states",
                        holland: "netherlands",
                        niall: "ireland",
                        sean: "south africa",
                        alberto: "mexico",
                        john: "australia",
                        xi: "china",
                    };
                    var literalMatch = this.contains(value, filterText || "");
                    return (
                        !!literalMatch ||
                        !!this.contains(value, aliases[filterText || ""])
                    );
                },
                trimInput: true,
                debounceMs: 1000,
            },
            cells: {
                prependContent: [
                    { cells: [] },
                    {
                        cells: [
                            {
                                data: {
                                    value: "Phiếu đánh giá PI",
                                    type: "String",
                                },
                                mergeAcross: 5,
                            },
                        ],
                    },
                    {
                        cells: [
                            {
                                data: {
                                    value: "Học phần:",
                                    type: "String",
                                },
                            },
                        ],
                    },
                    {
                        cells: [
                            {
                                data: { value: "Hội đồng:", type: "String" },
                                mergeAcross: 1,
                            },
                            // {
                            //     data: {
                            //         value: "is empty because the first cell has mergeAcross=1",
                            //         type: "String",
                            //     },
                            // },
                        ],
                    },
                    { cells: [] },
                ],
                appendContent: [
                    { cells: [] },
                    {
                        cells: [
                            {
                                data: {
                                    value: "HaUI ngày       tháng       năm",
                                    type: "String",
                                },
                                mergeAcross: 5,
                            },
                        ],
                    },
                    {
                        cells: [
                            {
                                data: {
                                    value: "Người đánh giá",
                                    type: "String",
                                },
                                mergeAcross: 5,
                            },
                        ],
                    },
                ],
            },
            gridApi: null,
            allUserId: [],
            allUser: [],
            derivative: false,
            editable: false,
            agReady: false,
            defaultColDef: {
                resizable: true,
            },
            columnDefs: [
                {
                    field: "studentId",
                    headerName: "MSV",
                },
                {
                    headerName: "Họ và tên",
                    children: [
                        {
                            field: "lastName",
                            headerName: "Họ đệm",
                        },
                        {
                            field: "firstName",
                            headerName: "Tên",
                        },
                    ],
                },

                {
                    field: "classId",
                    headerName: "Lớp",
                },
                {
                    field: "course",
                    headerName: "Khóa",
                },
                {
                    field: "major",
                    headerName: "Ngành",
                },
                {
                    field: "assesserId",
                    filterParams: {
                        valueFormatter: (params) => {
                            if (params.value) {
                                return this.lookupValue(
                                    this.allUser,
                                    params.value
                                );
                            } else {
                                return "";
                            }
                        },
                    },
                    filter: "agSetColumnFilter",
                    headerName: "Người đánh giá",
                    valueFormatter: (params) => {
                        if (params.value) {
                            return this.lookupValue(this.allUser, params.value);
                        } else {
                            return "";
                        }
                    },
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
