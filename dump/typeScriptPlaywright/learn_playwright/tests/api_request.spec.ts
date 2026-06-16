import {test, expect, request} from '@playwright/test';

// Run the jar file using the command: java -jar way2automation-restapi.jar
// Swagger URL: http://localhost:8080/swagger-ui.html#/

test('API request get', async () => {

    const reqContext = await request.newContext();
    const response = await reqContext.get('http://localhost:8080/api/users/1');
    console.log(await response.json());
    console.log(response.status());
    expect(response.status()).toBe(200);

    const jsonResponse = await response.json();
    expect(jsonResponse.firstName).toBe('Rahul');
    console.log(jsonResponse.firstName);
})

test('API request post', async () => {
    const requestContext = await request.newContext();
    const response = await requestContext.post('http://localhost:8080/api/users', 
            {
                 data: {
                    "firstName": "Arunava",
                    "lastName": "Chatterjee",
                    "email": "chat.bunty@gmail.com",
                },
                headers: {
                 'Content-Type': 'application/json',
                }
            });
    expect(response.status()).toBe(201);
    console.log(await response.status());
    //console.log(response.json());
});