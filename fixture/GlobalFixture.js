import { test as base } from '@playwright/test';
import { EmployeeServices } from "../service/EmployeeServices.js";
import { BasicAuth } from "../auth/BasicAuth.js";
import env  from "../env/env.config.js";

const customFixture = base.extend({
    apiContext : async({}, use)=>{

        const apiContext = await BasicAuth.addBasicAuth(env.UNAME, env.PASSWORD);
        
        await use (apiContext);
    },

    employeeServices : async({apiContext}, use) => {
        
        const employeeServices = new EmployeeServices(apiContext);

        await use(employeeServices);
    }
});

module.exports = { test : customFixture};
