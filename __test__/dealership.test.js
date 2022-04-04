const request = require('supertest')
const db = require('../src/db/models/index')
const { app } = require('../app');
 //supertest hits the HTTP server (your app)
 beforeAll( async () => {
    await db.sequelize.query("DELETE FROM Dealerships");
})
beforeEach ( async () =>  {
    await db.sequelize.query(`INSERT INTO "dealerships" (id, name, location, phone, "createdAt", "updatedAt") VALUES ('e93a7400-8006-4d5d-adfa-9250bb6b42b8', 'chevy', 'houston', 123123, now(), now())`)
    // console.log('yoooooo')
})
afterEach( async () => {
    await db.sequelize.query('DELETE FROM dealerships')
})
afterAll( async () => {
    db.sequelize.close()
})
 describe('GET /dealership', () => {
    it("It responds with a list of all dealerships" , async () => {
        const dealerships = await request(app).get('/v1/dealerships')
        expect(dealerships.body.length).toBe(1)
        expect(dealerships.body[0]).toHaveProperty('id')
        expect(dealerships.body[0]).toHaveProperty('name')
        expect(dealerships.body[0]).toHaveProperty('location')
    })
    
 })
 describe('GET /dealership/1', () => {
     it('It responds with a the specified dealership' , async () => {
         const dealerships = await request(app)
         .get('/v1/dealerships')
         let individualDealership = dealerships.body[0];
         expect(individualDealership.name).toBe('chevy')
         expect(individualDealership.location).toBe('houston')
     })
 })
 describe('POST /dealership', () => {
     it("It responds with the newly created dealership", async () => {
        const newDealership = await request(app)
        .post('/v1/dealerships')
        .send({
            id: 'e10c9da8-9f7e-4ff5-950d-86fee4a00e57',
            name: 'Nissan',
            location: 'Houston',
            phone: 1231231
        });
    
        expect(newDealership.body).toHaveProperty('id');
        expect(newDealership.body.name).toBe('Nissan')
        expect(newDealership.body.location).toBe('Houston')
        const response = await request(app).get('/v1/dealerships')
        expect(response.body.length).toBe(2)
     })

 })
 describe('PUT /dealership/:id', () => {
     it("It respond with an updated dealership", async () => {
         const newDealership = await request(app)
         .post('/v1/dealerships')
         .send({
             id: '3a120467-84f7-45cd-b7e4-f14291070a63',
             name: 'Kia',
             location: 'Houston',
             phone: 1231231
         })
         const updatedDealership = await request(app)
         .put(`/v1/dealerships/${newDealership.body.id}`)
         .send({
             id: newDealership.body.id,
             name: 'Ford',
             location: 'Huntsville',
             phone: 1231231
        })
        expect(updatedDealership.body.name).toBe('Ford')
        expect(updatedDealership.body).toHaveProperty('id')
        const response = await request(app).get('/v1/dealerships')
        expect(response.body.length).toBe(2)
     })
    
 })
 describe('DELETE /dealerships/:id', () => {
     it("It responds with the deleted dealership", async () => {
         const newDealership = await request(app)
         .post('/v1/dealerships')
         .send({
             id: '1dd2ac9b-292d-4edd-94b3-12930db70019',
             name: 'Tesla',
             location: 'Houston',
             phone: 1231231
         })
         const deletedDealership = await request(app)
         .delete(`/v1/dealerships/${newDealership.body.id}`)
         expect(deletedDealership.body).toEqual({message: 'Dealership was deleted successfully!'})
         expect(deletedDealership.statusCode).toBe(200)
         const response = await request(app).get('/v1/dealerships')
         expect(response.body.length).toBe(1)
     })
 })
 describe('DELETE /dealerships', () => {
     it("It responds with response of all dealerships", async () => {
         const deletedDealerships = await request(app)
         .delete('/v1/dealerships')
         expect(deletedDealerships.body).toEqual({message: 'all dealerships were deleted successfully!'})
         expect(deletedDealerships.statusCode).toBe(200)
         const response = await request(app).get('/v1/dealerships')
         expect(response.body.length).toBe(0)
     })
 })
/*
This piece of code is for getting the authorization token after login to your app.
const token;
test("Login to the application", function(){
    return request.post(``).then((response)=>{
        token = response.body.token  //to save the login token for further requests
    })
}); 
*/

