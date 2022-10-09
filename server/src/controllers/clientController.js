import { Client } from '../models/clients.js'
import { Product } from '../models/products.js'

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
            const {id, name, age, cellNumber, identityCard} = req.body;
            const client = await Client.create({
                id, name, age, cellNumber, identityCard
            });
            res.send(client);
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }
    }
    
    async update (req, res){
        try {
            const { id } = req.params;
            const { name, age, cellNumber, identityCard} = req.body;
            
            const client =  await Client.findByPk(id);
            client.name = name;
            client.age = age;
            client.cellNumber = cellNumber;
            client.identityCard = identityCard;

            await client.save();
            res.send(client)
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

    //relationship 
 
    async addProduct(req, res){
        try{
            const { id } = req.params;
            const { ProductId } = req.body;

            const client = await Client.findByPk(id);
            client.ProductId = ProductId;
            await client.save();
            res.send(client);
            
            //one by one relation test
            /*
            const product = await Product.findByPk(ProductId);
            product.ClientId = id;
            await product.save();
            res.json({client,product});
            */
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }  
    }

}

const clientController = new ClientController();
export default clientController;    