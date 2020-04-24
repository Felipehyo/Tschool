const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async store(request, response) {
        //request.body - corpo json enviado
        //request.params - enviado pela rota
        //request.headers.authorization - por uma requisição geralmente com o nome de authorization
        const { name, number_students } = request.body;

        await connection('schools').insert({
            name,
            number_students,
        });

        //console.log(result);

        return response.json({  });
    },

    async delete(request, response) {

    },

    async update(request, reponse) {
    
    },
};