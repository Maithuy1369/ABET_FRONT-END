<template>
    <div class="back" data-app>
        <h1>Tạo văn bản mới</h1>
        <div class="config-document-config">
            <div class="config-document-config-field">
                <div class="input-field">
                    <p>Trường tương ứng với tên sinh viên(firstName):</p>
                    <v-text-field
                        v-model="firstNameField"
                        type="text"
                        placeholder="name display"
                    ></v-text-field>
                </div>
                <div class="input-field">
                    <p>Trường tương ứng với tên sinh viên(lastName):</p>
                    <v-text-field
                        v-model="lastNameField"
                        type="text"
                        placeholder="name display"
                    ></v-text-field>
                </div>
                <div class="input-field">
                    <p>Trường tương ứng với mã lớp:</p>
                    <v-text-field
                        v-model="classId"
                        type="text"
                        placeholder="name display"
                    ></v-text-field>
                </div>
                <div class="input-field">
                    <p>Tên báo cáo:</p>
                    <v-text-field
                        v-model="documentName"
                        type="text"
                        placeholder="name display"
                    ></v-text-field>
                </div>
                <div class="input-field">
                    <p>Trường tương ứng với mã sinh viên:</p>
                    <v-text-field
                        v-model="studentIdField"
                        type="text"
                        placeholder="id"
                    ></v-text-field>
                </div>
                <div class="input-field">
                    <p>Assessor:</p>
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
                                @click:close="remove(data.item)"
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
                                            data.item.firstName +
                                            ' ' +
                                            data.item.lastName
                                        "
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </template>
                        </template>
                    </v-autocomplete>
                </div>
                <div class="input-field">
                    <p>Assessor:</p>
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
                            <v-chip
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
                            </v-chip>
                        </template>
                        <template v-slot:item="data">
                            <template>
                                <v-list-item-content>
                                    <v-list-item-title
                                        v-html="
                                            data.item.firstName +
                                            ' ' +
                                            data.item.lastName
                                        "
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </template>
                        </template>
                    </v-autocomplete>
                </div>
            </div>
            <div class="input-field">
                <p>PI Field(Chọn nhiều trường):</p>
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
            <div style="width: 30%">
                <p>Import danh sách dạng excel vào:</p>
                <v-file-input id="file" v-model="file" @change="handleFile" />
            </div>
            <div style="display: flex; justify-content: center; margin: 30px">
                <v-btn @click="createDocument"> submit </v-btn>
            </div>
        </div>
        <ag-grid-vue
            style="width: 90%; height: 900px; margin: 0 auto"
            class="ag-theme-alpine"
            :columnDefs="fetchColumnDefs"
            :rowData="rawData"
        >
        </ag-grid-vue>
    </div>
</template>

<script>
import { read, utils } from "xlsx";
import { AgGridVue } from "ag-grid-vue";
import { documentAPI } from "@/api/document.js";
import { sODocumentAPI } from "@/api/sODocument.js";
export default {
    async created() {
        this.allUser = this.$store.state.user.users;
        let id = this.$route.params.id;
        let res = await sODocumentAPI.getDetailSODocument(id);
        console.log(res);
        this.detailSODocument = res.data;
        let soField =
            this.detailSODocument.name[this.detailSODocument.name.length - 1];
        let result = [];
        for (let i = 1; i < 6; i++) {
            result.push("PI." + soField + "." + i);
        }
        this.allPIField = result;
    },
    components: {
        AgGridVue,
    },
    data() {
        return {
            allPIField: [],
            evaluateField: [],
            detailSODocument: {},
            firstNameField: "",
            lastNameField: "",
            documentName: "",
            studentIdField: "",
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
        async createDocument() {
            let listStuden = [];
            // let name = this.documentName;
            this.rawData.map((a) => {
                listStuden.push({
                    classId: a[this.classId],
                    firstName: a[this.firstNameField],
                    lastname: a[this.lastNameField],
                    studentId: a[this.studentIdField],
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
        },
        async handleFile(e) {
            let file = await e.arrayBuffer();
            const wb = read(file);
            const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
            console.log(data);
            this.rawData = data;
            this.translateRawData();
        },
        translateRawData() {
            // let rawData =[]
            let columnDefs = [];
            let headerName = [];
            this.rawData.map((e) => {
                console.log(Object.keys(e));
                headerName = [...new Set(headerName.concat(Object.keys(e)))];
                // concat(result, Object.keys(e))
                console.log(headerName);
            });
            headerName.map((field) => {
                columnDefs.push({
                    field: field,
                    headerName: field,
                });
            });
            this.fetchColumnDefs = columnDefs;
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
</style>
