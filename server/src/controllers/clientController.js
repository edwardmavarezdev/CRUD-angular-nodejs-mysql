import { Client } from '../models/clients.js'

class ClientController {

    async list(req, res){
        try {
            const clients = await Client.findAll();
            res.send(clients);
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }
    }

    async create (req, res){
        try {
            const {id, name, age, cellNumber, address} = req.body;
            const client = await Client.create({
                id, name, age, cellNumber, address
            });
            res.json(client);
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }
    }
    
    async update (req, res){
        try {
            const { id } = req.params;
            const { name, age, cellNumber, address } = req.body;
            
            const client =  await Client.findByPk(id);
            client.name = name;
            client.age = age;
            client.cellNumber = cellNumber;
            client.address = address;

            await client.save();
            res.json({"Client":client})
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }

    }

    async delete (req, res){
        try {
            const { id } = req.params;
            await Client.destroy({
                where: {id,}
            });
            res.json('client was deleted')
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }
    }

    async getOneById(req, res){
        try {
            const { id } = req.params
            const client = await Client.findByPk(id);
            res.send(client);
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }
    }
 
}

const clientController = new ClientController();
export default clientController;    