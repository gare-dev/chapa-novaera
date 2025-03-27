

// import convertDate from "@/utils/convertDate";
// import { handleDates } from "@/utils/date";
import axios, { AxiosInstance, AxiosResponse } from "axios";



class _Api {
    private _instance: AxiosInstance;
    private _jwt: string

    constructor(jwt: string) {
        this._jwt = jwt
        this._instance = axios.create({
            timeout: 30000,
            baseURL: 'http://localhost:3001',
            headers: {
                "Content-Type": "application/json",
                "Authorization": this._jwt
            },
            responseType: "json",
        });

        this._instance.interceptors.request.use(req => {
            const token = localStorage.getItem('token');

            req.headers.Authorization = token

            return req;
        });


    }



    public async post(url: string, data?: any) {
        return this._instance.post(url, data);
    }

    public async delete(url: string, data?: any) {
        return this._instance.delete(url, data);
    }


    public async get(url: string, data?: any) {
        return this._instance.get(url, data);
    }

    public async sendMessage(name: string, message: string) {
        return this._instance.post('/api/insertanonmessage', {
            name,
            message
        })
    }

    public async login(login: string, password: string) {
        return this._instance.post('/api/login', {
            login,
            password
        })
    }

    public async checkPermission() {
        return this._instance.post('/api/checkpermission')
    }

    public async getMessages() {
        return this._instance.post('/api/listmessage')
    }
}

const Api = new _Api('');

export default Api;
