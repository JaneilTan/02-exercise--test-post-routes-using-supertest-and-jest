// FIXME! Write tests for the POST routes
const request = require("supertest");
const app = require('./app');

const endpoint = "/wishlists";

describe("/wishlists endpoint", () => {
    it('should return a new product in the wishlists when we send a POST', async () => {
        const expectedStatus = 200
        const requestBody = {
            "productId": "614abf0a93e8e80ace792ac6"
          }

        const response = await request(app).post(endpoint).send(requestBody);
        
        expect(response.status).toBe(expectedStatus)
        expect(response.body).toEqual(expect.objectContaining(requestBody))
    });
});