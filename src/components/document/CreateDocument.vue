<template>
    <div class="part22-card card">
        <div class="back" data-app>
            <div class="title">
                <span> <strong>TẠO MẪU PHIẾU MỚI </strong></span>
            </div>
            <div class="task">
                <span>Nhập dữ liệu từ Excel</span>
                <v-file-input
                    style="width: 50%"
                    @change="handleFile"
                    id="file"
                    v-model="file"
                    class="text-white"
                    label="Chọn file"
                />
            </div>
            <div class="config-document-config">
                <div>
                    <table>
                        <tr>
                            <th>
                                <div class="input-field">
                                    <p>Tên:</p>
                                    <v-text-field
                                        v-model="firstNameField"
                                        type="text"
                                        placeholder="Tên hiển thị"
                                    ></v-text-field>
                                </div>
                            </th>
                            <th>
                                <div class="input-field">
                                    <p>Họ đệm:</p>
                                    <v-text-field
                                        v-model="lastNameField"
                                        type="text"
                                        placeholder="Họ đệm"
                                    ></v-text-field>
                                </div>
                            </th>
                            <th>
                                <div class="input-field">
                                    <p>Mã lớp:</p>
                                    <v-text-field
                                        v-model="classId"
                                        type="text"
                                        placeholder="Mã lớp"
                                    ></v-text-field>
                                </div>
                            </th>
                            <th>
                                <div class="input-field">
                                    <p>Tên báo cáo:</p>
                                    <v-text-field
                                        v-model="documentName"
                                        type="text"
                                        placeholder="Tên phiếu"
                                    ></v-text-field>
                                </div>
                            </th>
                            <th>
                                <div class="input-field">
                                    <p>Mã sinh viên:</p>
                                    <v-text-field
                                        v-model="studentIdField"
                                        type="text"
                                        placeholder="Mã sinh viên"
                                    ></v-text-field>
                                </div>
                            </th>
                            <th>
                                <div class="input-field">
                                    <p>Ngành:</p>
                                    <v-text-field
                                        v-model="major"
                                        type="text"
                                        placeholder="Ngành"
                                    ></v-text-field>
                                </div>
                            </th>
                            <th>
                                <div class="input-field">
                                    <p>Khóa:</p>
                                    <v-text-field
                                        v-model="course"
                                        type="text"
                                        placeholder="Khóa"
                                    ></v-text-field>
                                </div>
                            </th>
                        </tr>
                    </table>
                    <table class="mt-2">
                        <tr>
                            <th style="width: 55%">
                                <div class="input-field">
                                    <p>Thành viên:</p>
                                    <v-autocomplete
                                        v-model="assesorId"
                                        :items="allUser"
                                        filled
                                        chips
                                        color="blue-grey lighten-2"
                                        label="Select"
                                        item-value="userName"
                                        multiple
                                    >
                                        <template v-slot:selection="data">
                                            <v-chip
                                                v-bind="data.attrs"
                                                :input-value="data.selected"
                                                close
                                                @click="data.select"
                                                @click:close="
                                                    remove(data.item.userName)
                                                "
                                            >
                                                {{
                                                    data.item.firstName +
                                                    " " +
                                                    data.item.lastName
                                                }}
                                            </v-chip>
                                        </template>
                                        <template v-slot:item="data">
                                            <template>
                                                <v-list-item-content>
                                                    <v-list-item-title
                                                        v-html="
                                                            data.item
                                                                .firstName +
                                                            ' ' +
                                                            data.item.lastName
                                                        "
                                                    ></v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </template>
                                    </v-autocomplete>
                                </div>
                            </th>
                            <th>
                                <div class="input-field">
                                    <p>Trưởng nhóm đánh giá:</p>
                                    <v-autocomplete
                                        v-model="verifierId"
                                        :items="allUser"
                                        filled
                                        chips
                                        color="blue-grey lighten-2"
                                        label="Select"
                                        item-value="userName"
                                    >
                                        <template v-slot:selection="data">
                                            <span
                                                v-bind="data.attrs"
                                                :input-value="data.selected"
                                                close
                                                @click="data.select"
                                                @click:close="remove(data.item)"
                                            >
                                                {{
                                                    data.item.firstName +
                                                    " " +
                                                    data.item.lastName
                                                }}
                                            </span>
                                        </template>
                                        <template v-slot:item="data">
                                            <template>
                                                <v-list-item-content>
                                                    <v-list-item-title
                                                        v-html="
                                                            data.item
                                                                .firstName +
                                                            ' ' +
                                                            data.item.lastName
                                                        "
                                                    ></v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </template>
                                    </v-autocomplete>
                                </div>
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="input-field">
                    <br />
                    <p><strong>PI (Có thể chọn nhiều):</strong></p>
                    <v-autocomplete
                        v-model="evaluateField"
                        :items="allPIField"
                        filled
                        chips
                        color="blue-grey lighten-2"
                        label="Select"
                        item-value="userName"
                        multiple
                    >
                    </v-autocomplete>
                </div>
            </div>
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
                    class="btn text-white"
                    color="#2980e4"
                    @click="createDocument"
                    size="x-large"
                >
                    <v-icon dark left>mdi-plus</v-icon>LƯU LẠI</v-btn
                >
            </div>
            <ag-grid-vue
                @grid-ready="onGridReady"
                rowSelection="multiple"
                style="width: 90%; height: 450px; margin: 0 auto"
                class="ag-theme-alpine"
                :columnDefs="fetchColumnDefs"
                :rowData="rawData"
                :suppressScrollOnNewData="false"
            >
            </ag-grid-vue>
        </div>
    </div>
</template>

<script>
import { read, utils } from "xlsx";
import { AgGridVue } from "ag-grid-vue";
import { documentAPI } from "@/api/document.js";
// import { AutoCompleteComponent } from './shared/auto-complete.component';
import { sODocumentAPI } from "@/api/sODocument.js";

export default {
    async created() {
        this.allUser = this.$store.state.user.users;
        this.allUser.map((a) => this.allUserId.push(a.id));
        let id = this.$route.params.id;
        let res = await sODocumentAPI.getDetailSODocument(id);
        this.detailSODocument = res.data;
        let soField =
            this.detailSODocument.name[this.detailSODocument.name.length - 1];
        let result = [];
        for (let i = 1; i < 5; i++) {
            result.push("PI." + soField + "." + i);
        }
        this.allPIField = result;
    },
    components: {
        AgGridVue,
    },
    data() {
        return {
            gridApi: null,
            allUserId: [],
            allPIField: [],
            evaluateField: [],
            detailSODocument: {},
            firstNameField: "",
            lastNameField: "",
            documentName: "",
            studentIdField: "",
            major: "",
            course: "",
            classId: "",
            allUser: [],
            columnDefs: [
                {
                    headerName: "",
                    field: "userNameDisplay",
                },
                {
                    headerName: "",
                    field: "id",
                },
            ],
            rawData: [],
            assesorId: [],
            verifierId: "",

            file: undefined,
            fetchColumnDefs: [],
        };
    },
    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
        },
        lookupValue(mappings, index) {
            let user = mappings.find((a) => a.id == index);
            return user.firstName + " " + user.lastName;
        },
        valueFormatter(params) {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        remove(userName) {
            this.assesorId.splice(this.assesorId.indexOf(userName), 1);
        },
        async createDocument() {
            let listStuden = [];
            // let name = this.documentName;
            this.rawData.map((a) => {
                listStuden.push({
                    classId: a[this.classId],
                    firstName: a[this.firstNameField],
                    lastname: a[this.lastNameField],
                    studentId: a[this.studentIdField],
                    course: a[this.course],
                    major: a[this.major],
                    assessorId: a.assesorId,
                });
            });
            let name = this.documentName;
            for (let i of this.evaluateField) {
                let res = documentAPI.createDocument(
                    name,
                    this.assesorId,
                    this.verifierId,
                    i,
                    "abcd",
                    listStuden,
                    this.detailSODocument.Id
                );
                console.log(res);
            }
            alert("Đã ghi nhận!");
        },
        async handleFile(e) {
            let file = await e.arrayBuffer();
            const wb = read(file);
            const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);

            this.rawData = data;
            this.translateRawData();
        },
        translateRawData() {
            // let rawData =[]
            let columnDefs = [];
            let headerName = [];
            this.rawData.map((e) => {
                headerName = [...new Set(headerName.concat(Object.keys(e)))];
            });
            headerName.map((field) => {
                columnDefs.push({
                    field: field,
                    headerName: field,
                });
            });
            columnDefs.unshift({
                field: "assessorId",
                headerName: "Người đánh giá",
                editable: true,
                cellEditor: "agRichSelectCellEditor",
                cellEditorPopup: true,
                cellEditorParams: {
                    values: this.allUserId,
                    cellRenderer: "ColourCellRenderer",
                },
                onCellValueChanged: (param) => {
                    let newValue = param.newValue;
                    let allRowSelected = this.gridApi.getSelectedRows();
                    for (let r of allRowSelected) {
                        if (r.assesorId != newValue) {
                            this.$set(r, "assesorId", newValue);
                            this.rawData[3].assessorId = newValue;
                            r.assessorId = newValue;
                        }
                    }
                    this.rawData = JSON.parse(JSON.stringify(this.rawData));
                    // this.gridApi.refreshServerSide();

                    // settimeout(()=>this.)
                },
                valueFormatter: (params) => {
                    if (params.value) {
                        return this.lookupValue(this.allUser, params.value);
                    } else {
                        return "";
                    }
                },
            });
            this.fetchColumnDefs = columnDefs;
        },
        ListPIbySO() {
            this.$router.push("/document/all-document-by-so/:id");
        },
    },
    computed: {
        // allPIField() {
        //     let soField =
        //         this.detailSODocument.name[
        //             this.detailSODocument.name.length - 1
        //         ];
        //     let result = [];
        //     for (let i = 1; i < 6; i++) {
        //         result.push("PI." + soField + "." + i);
        //     }
        //     return result;
        // },
        // allUser() {
        //     return this.$store.state.user.users;
        // },
    },
};
</script>

<style scoped>
.part22-card {
    position: relative;
    margin-left: 60px;
    margin-top: 20px;
    margin-right: 25px;
    margin-bottom: 20px;
    padding-top: 30px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
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
.btn {
}
.task {
    margin-bottom: 20px;
    justify-content: end;
}
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid rgb(159, 171, 187);
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
.config-document-config {
}
.config-document-config-field {
    display: flex;
    justify-content: space-around;
}
.config-document-config-field .input-field {
    width: 25%;
}
.config-document-config-field .input-field p {
    margin: 0;
}
.config-document-config-field > .input-field > .v-text-field {
    margin: 0;
    padding: 0;
}
.config-document-specific-field {
    margin-top: 25px;
}

.config-document-specific-field p {
    margin: 0;
}
.config-document-specific-field >>> .v-text-field {
    margin: 0;
    padding: 0;
}
.config-document-specific-field {
    display: flex;
    justify-content: space-around;
}
/* .input-field >>> .v-select__slot {
  height: 120px;
  overflow: auto;
} */
</style>
