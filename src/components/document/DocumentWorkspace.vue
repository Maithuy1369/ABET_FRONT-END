<template>
    <div></div>
</template>
<script>
import { documentAPI } from "@/api/document";
export default {
    async created() {
        let id = this.$route.params.id;
        let res = await documentAPI.getDetailDocument(id);
        console.log(res);
        if (res.status == 200) {
            this.detailDocumentOrigin = res.data;
        }
    },
    data() {
        return {
            columnDefs: [
                {
                    field: "studentId",
                    headerName: "MSV",
                },
                {
                    field: "firstName",
                    headerName: "Họ đệm",
                    rowGroup: true,
                },
                {
                    field: "lastName",
                    headerName: "Tên",
                },
                {
                    field: "classId",
                    headerName: "Lớp",
                },
                {
                    field: "eluvation",
                    pivot: true,
                },
                {
                    field: "field",
                    pivot: true,
                },
                {
                    field: "detailField",
                },
            ],
            rawData: [],
            detailDocumentOrigin: {},
        };
    },
};
</script>
