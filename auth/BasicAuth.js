import { request } from '@playwright/test';

export class BasicAuth
{
    static async addBasicAuth(username, password)
    {
        const apiContext = await request.newContext(
            {
                httpCredentials :
                {
                    "username" : username,
                    "password" : password
                }
            }
        );
        return (apiContext);
    }
}