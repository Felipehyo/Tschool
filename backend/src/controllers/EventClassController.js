const connection = require('../database/connection');
module.exports = {
    async index(req, res){
        const id_school = req.headers.authorization;

        const eventClass = await connection('event-class')
        .select('event-class.id','title','nameclass','events.id_event', 'class.id_class')
        .innerJoin('events', 'event-class.id_event', 'events.id_event')
        .innerJoin('class', 'event-class.id_class', 'class.id_class')
        .where('events.id_school', id_school);

        return res.json(eventClass);
    },

    async eventbystudent(req, res){
        const id_res = req.headers.authorization;

        const eventRes = await connection('event-class')
        .select('*')
        .innerJoin('events', 'event-class.id_event', 'events.id_event')
        .innerJoin('class', 'event-class.id_class', 'class.id_class')
        .innerJoin('students', 'class.id_class', 'students.id_class')
        .where('students.id_res', id_res);

        //Object.assign()

        return res.json(eventRes);
    },

    async eventbystudatails(req, res){
        const id_res = req.headers.authorization;
        const id_stud = req.headers.authstud;

        const eventRes = await connection('event-class')
        .select('events.*')
        .innerJoin('events', 'event-class.id_event', 'events.id_event')
        .innerJoin('class', 'event-class.id_class', 'class.id_class')
        .innerJoin('students', 'class.id_class', 'students.id_class')
        .where('students.id_res', id_res)
        .andWhere('students.id', id_stud);
        //.andWhere('events.id_event', id_event);

        //Validação de evento (incluir campo de situação)
        for (var i = 0; i <= eventRes.length-1; i++) {
            const authorization = await connection('participants').select('authorization').where('id_student', id_stud).andWhere('id_event', eventRes[i].id_event);

            if(authorization != '') {
                eventRes[i] = Object.assign(eventRes[i], { situation: 'Autorizado' });
            } else {
                eventRes[i] = Object.assign(eventRes[i], { situation: 'Pendente' });
            }
        }

        return res.json(eventRes);
    },

    async create(req, res){
        const { id_event, id_class } = req.body;

        const id_school = req.headers.authorization;

        //checar se associação já existe
        const EvClassExist = await connection('event-class').select('*')
        .where('id_event', id_event)
        .andWhere('id_class', id_class)
        .first();

        if (EvClassExist) {
            return res.status(401).json({error: 'Association already exist'});
        }

        //bd postgress
        await connection('event-class').insert({
            id_class,
            id_event
        });

        //Pegar ids da classe criada por causa do postgres que não retorna
        const ids = await connection('event-class').select('*')
        .where('id_event', id_event)
        .andWhere('id_class', id_class)
        .first();

        return res.json(ids);
    },

    async delete(req, res){
        const { id } = req.params;

        const eventClassExist = await connection('event-class')
        .where('id', id)
        .select('id')
        .first();

        if(!eventClassExist){
            return res.status(401).json({error: 'Association not found'});
        }

        await connection('event-class')
        .where('id', id)
        .delete();

        return res.status(204).send();
    },
};