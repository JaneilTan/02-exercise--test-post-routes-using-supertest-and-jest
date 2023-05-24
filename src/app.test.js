// FIXME! Write tests for the POST routes
const request = require("supertest");
const app = require('./app');


describe("/wishlists endpoint", () => {
    it('should return a new product in the wishlists when we send a POST', async () => {
        const expectedStatus = 200
        const requestBody = {
            "productId": "614abf0a93e8e80ace792ac6"
          }

        const response = await request(app).post('/wishlists').send(requestBody);
        
        expect(response.status).toBe(expectedStatus)
        expect(response.body).toEqual(expect.objectContaining(requestBody))
    });

});

describe("/orders endpoint", () => {
    it('should return a new order when we send a POST', async () => {
        const expectedStatus = 200
        const requestBody = {
            "groceries": [
              {
                "id": "615915303a9ea9532717f95f",
                "qty": 2
              },
              {
                "id": "6159153639d0db80bed5ec74",
                "qty": 1
              }
            ]
          }

        const response = await request(app).post('/orders').send(requestBody);
        
        expect(response.status).toBe(expectedStatus)
        expect(response.body).toEqual(expect.objectContaining(requestBody))
    });

});

