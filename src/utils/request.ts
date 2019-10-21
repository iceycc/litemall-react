type httpMethod = 'GET' | 'POST'

interface InterRequestInit {
    method?: httpMethod,
    headers?: HeadersInit,
    body?: BodyInit | null;
    credentials?: RequestCredentials,
    mode?: RequestMode,
}

interface InterCommonFetchOptions extends InterRequestInit {
    url: string,
    body?: BodyInit | null,
    headers?: Record<string, string>,
    method?: httpMethod
}

interface IntertHttp {
    readonly baseUrl: string
    headers: Record<string, string>;

    formtGetHttp(options: object): string;

    commonFetch(options: InterCommonFetchOptions): Promise<Response>;

    post(options: InterCommonFetchOptions): Promise<any>;

    get(options: InterCommonFetchOptions): Promise<any>;
}

class Http implements IntertHttp {
    baseUrl = 'http://198.181.58.233:8080/'
    headers = {
        'Content-Type': 'application/json',
    }

    /**
     * url序列化
     * @param obj
     */
    formtGetHttp(obj: object) {
        const getHttp = []
        for (const key in obj) {
            getHttp.push(
                key + "=" + (typeof obj[key] === 'object' ? JSON.stringify(obj[key]) : obj[key])
            )
        }
        return getHttp.join('&')
    }

    /**
     * 请求前公共头及参数组装
     * @param url
     * @param body
     * @param headers
     * @param method
     */
    commonOptions({url, body, headers, method}: InterCommonFetchOptions) {
        let initParams: InterRequestInit = {
            method,
            headers,
            // credentials: 'include',
            // mode: 'no-cors',
        }
        if (method === 'GET') {
            url = url + "?" + this.formtGetHttp(body as object)
            initParams = {
                ...initParams,
                method,
            }
        } else if (method === 'POST') {
            initParams = {
                body: JSON.stringify(body),
                ...initParams,
            }
        }
        return {
            url,
            initParams
        }
    }

    /**
     * 判断请求头
     */
    private async compilerHeader(contentType: string, res: Response) {
        if (contentType && contentType.indexOf('json') > -1) {
            return await res.json()
        }
        if (contentType && contentType.indexOf('text') > -1) {
            return await res.text()
        }
        if (contentType && contentType.indexOf('form') > -1) {
            return await res.formData()
        }
        if (contentType && contentType.indexOf('video') > -1) {
            return await res.blob()
        }
        return await res.text() // contentType为null是可能出现不确定的情况。可以返回text文本，然后在拦截器单独处理。
    }

    /**
     * fetch基础请求
     * @param options
     */
    commonFetch(options: InterCommonFetchOptions) {
        const {url, initParams} = this.commonOptions(options)
        return fetch(this.baseUrl + url, initParams).then(async (res) => {
            const contentType: string = res.headers.get('Content-Type') || ''
            let {data} = await this.compilerHeader(contentType, res)
            return data
            // if (res.status >= 200 && res.status < 300) {
            //     return this.compilerHeader(contentType, res)
            // }
            // const error = new Error(res.statusText);
            // throw error;
        })
    }

    /**
     * post
     * @param url
     * @param body
     * @param headers
     */
    async post({url, body, headers = {}}: InterCommonFetchOptions) {
        headers = {...this.headers, ...headers}
        const res: any = await this.commonFetch({url, body, headers, method: "POST"})
        return new Promise((resolve, reject) => {
            resolve(res)
        })
    }

    /**
     * get
     * @param url
     * @param body
     * @param headers
     */
    async get({url, body, headers = {}}: InterCommonFetchOptions) {
        headers = {...this.headers, ...headers}
        const res: any = await this.commonFetch({url, body, headers, method: "GET"})
        return new Promise((resolve, reject) => {
            resolve(res)
        })
    }
}

export default new Http()
