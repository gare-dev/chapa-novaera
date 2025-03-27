

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
            baseURL: 'https://chapaera-api.vercel.app/',
            headers: {
                "Content-Type": "application/json",
                "Authorization": this._jwt
            },
            responseType: "json",
        });

        // this._instance.interceptors.request.use(req => {
        //     const token = localStorage.getItem('accessToken');

        //     if (this.isIOS) {
        //         req.headers.Cookie = `token=${token}`;
        //     }

        //     return req;
        // });

        // this._instance.interceptors.response.use(response => {
        //     console.log(response.headers)
        //     const jwtCookie = response.headers['set-cookie']?.find((cookie: string) => cookie.startsWith('token='));
        //     console.log("JWTCOOKIE: " + jwtCookie)

        //     const jwtToken = jwtCookie ? jwtCookie.split(';')[0].split('=')[1] : null;
        //     console.log("JWTTOKKEN: " + jwtToken)
        //     if (jwtToken) {
        //         localStorage.setItem("accessToken", jwtToken)
        //     }
        //     return { ...response, data: handleDates(response.data) };
        // });

    }

    public setJWT(jwt: string) {
        this._jwt = jwt
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
}

const Api = new _Api('');

export default Api;
