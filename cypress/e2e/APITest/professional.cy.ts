describe('Professionals API', () => {
    it('should return a list of professionals', () => {
        cy.request('GET', 'http://localhost:8080/api/professionals')
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    });

    // it('should return a user by id', () => {
    //     cy.request('GET', 'http://localhost:8080/api/professionals/65edb99e15531d14b9bbf903')
    //         .then((response) => {
    //             expect(response.status).to.eq(200);
    //         });
    // }
    // );

    // it('should update a user', () => {
    //     cy.request('PUT', 'http://localhost:8080/api/professionals/65edb99e15531d14b9bbf903', {
    //         "name": "John Doe",
    //         "email": "tst@mail.c",
    //         "password": "123456"
    //     })
    //         .then((response) => {
    //             expect(response.status).to.eq(200);
    //         });
    // }
    // );
});