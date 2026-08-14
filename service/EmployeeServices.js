import  env from "../env/env.config.js";
import {BaseClient} from '../client/BaseClient.js';

export class EmployeeServices extends BaseClient
{
    constructor(request)
    {
        super(request);
    }

    async getAllEmployees(optionalParameter={})
    {
        return await this.get(`${env.BASE_URI}/api/employees`);
    }

    async getEmployee(id, optionalParameter={})
    {
        return await this.get(`${env.BASE_URI}/api/employees/${id}`);
    }

    async createEmployee(requestPayload, optionalParameter={})
    {
        return await this.post(`${env.BASE_URI}/api/employees`, requestPayload);
    }

    async updateEmployee(id, requestPayload, optionalParameter={})
    {
        return await this.put(`${env.BASE_URI}/api/employyees/${id}`, requestPayload)
    }

    async deleteEmployee(id, optionalParameter={})
    {
        return await this.delete(`${env.BASE_URI}/api/employees/${id}`);
    }
}