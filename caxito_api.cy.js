describe('API Test - Create User', () => {
  const baseUrl = 'https://reqres.in/api';

  it('should create a user successfully', () => {
    cy.fixture('user').then((user) => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/users`,
        body: user
      }).then((response) => {
        // Validação do status code
        expect(response.status).to.eq(201);
        
        // Validação dos campos obrigatórios
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
        
        // Validação do contrato da resposta
        expect(response.body).to.have.property('name', user.name);
        expect(response.body).to.have.property('job', user.job);
      });
    });
  });
});
