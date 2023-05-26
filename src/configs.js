// import { util } from './plugins/util';
 const host = 'http://api.xn--khoa-in-t-ugb1874fena.vn'
 export const fileServiceHost = 'http://localhost:1236/'
// const host = 'http://localhost:1234'
// export const fileServiceHost = 'http://localhost:1236/'

var configs = {
    defaultAvatar: '/img/avatar_default.jpg',
    dataTypeIcon: {
        // icon cho các kiểu dữ liệu: numeric, text, date, datetime, time,
        numeric: 'mdi-numeric',
        text: 'mdi-alphabetical-variant',
        date: 'mdi-calendar-month-outline',
        datetime: 'mdi-calendar-clock',
        time: 'mdi-timer-outline',
        all: 'mdi-table-row'
    },
    maxOpenTab: 15,
    apiDomain: {
        auth: 'users-account/',
        document: 'document/',
        sODocument: 'SO/'
        // subject: 'API/subject/',
        // scheduler: 'API/scheduler/'
    },
    reformatUrl(obj) {
        for (let key in obj) {
            if (obj[key]) {
                if (typeof obj[key] == 'string') {
                    // obj[key] = util.addEnvToUrl(obj[key]);
                } else if (typeof obj[key] == 'object') {
                    this.reformatUrl(obj[key]);
                }
            }
        }
    },
    getAPIUrl(path) {
        let url = host + '/' + path
        return url
    },
};
// sửa lại url theo môi trường code
configs.reformatUrl(configs.apiDomain);

// Thêm các domain thuộc uniqueApiDomain vào khai báo domain của api
for (let key in configs.uniqueApiDomain) {
    configs.apiDomain[key] = configs.uniqueApiDomain[key];
}

export const appConfigs = configs;
