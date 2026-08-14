export class BaseClient
{
    constructor(request)
    {
        this.request = request;
    }

    async get(endpoint, optionalParameter={})
    {
        return await this.request.get(endpoint, {...optionalParameter});
    }

    async post(endpoint, requestPayload, optionalParameter={})
    {
        return await this.request.post(endpoint, {data : requestPayload, ...optionalParameter});
    }

    async put(endpoint, requestPayload, optionalParameter={})
    {
        return await this.request.put(endpoint, {data : requestPayload, ...optionalParameter});
    }

    async delete(endpoint, optionalParameter={})
    {
        return await this.request.delete(endpoint, {...optionalParameter});
    }
}