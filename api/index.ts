

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
            baseURL: 'http://localhost:3001/', // https://chapaera-api.vercel.app/ http://localhost:3001/
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

    public async getMessages(showVisualized: boolean, filter: string) {
        return this._instance.post('/api/listmessage', {
            showVisualized,
            filter
        })
    }

    public async markAsVisualized(operation: boolean, idMessage: string) {
        return this._instance.post('/api/markasvisu', {
            operation,
            idMessage
        })
    }

    public async createUser(login: string, password: string, description: string) {
        return this._instance.post('/api/createuser', {
            login,
            password,
            description
        })
    }

    public async getMatches() {
        return this._instance.post('/api/getmatches')
    }

    public async setMatch(created_by: string, rm: string, ano: string, curso: string, ano_adversario: string, curso_adversario: string, data_jogo: string, periodo: string) {
        return this._instance.post('/api/creatematch', {
            created_by,
            rm,
            ano,
            curso,
            ano_adversario,
            curso_adversario,
            data_jogo,
            periodo
        })
    }

    public async aproveMatch(id_match: string) {
        return this._instance.post('/api/aprovematch', {
            id_match
        })
    }

    public async getAprovedMatches(aprovados: boolean) {
        return this._instance.post('/api/getaprovedmatch', {
            aprovados
        })
    }

    public async getAvisos() {
        return this._instance.post('/api/listaviso')
    }

    public async createAviso(titulo: string, mensagem: string) {
        return this._instance.post('/api/createaviso', {
            title: titulo,
            message: mensagem,
        })
    }
}

const Api = new _Api('');

export default Api;
