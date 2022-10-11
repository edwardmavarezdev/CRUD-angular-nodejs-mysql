import { Client } from '../models/clients.js'
// import { Product } from '../models/products.js'

class ClientController {

    async list(req: any, res: any){
        try {

          const clients = await Client.findAll();
            res.send(clients);
        } catch (error) {
            return res.status(500).json({error})
        }
    }

     async create (req: any, res: any){
        try {
            const {id, name, age, cellNumber, identityCard} = req.body;
            const client = await Client.create({
                id, name, age, cellNumber, identityCard
            });
            res.send(client);
        } catch (error) {
            return res.status(500).json({error})
        }
    }
    
    async update (req: any, res: any){
        try {
            const { id } = req.params;
            const { name, age, cellNumber, identityCard} = req.body;
            
            const client =  await Client.findByPk(id);
            if(client!=null){
            client.name = name;
            client.age = age;
            client.cellNumber = cellNumber;
            client.identityCard = identityCard;
            await client.save();
            }

            res.send(client)
        } catch (error) {
            return res.status(500).json({error})
        }

    }

    async delete (req: any, res: any){
        try {
            const { id } = req.params;
            await Client.destroy({
                where: {id,}
            });
            res.json('client was deleted')
        } catch (error) {
            return res.status(500).json({error})
        }
    }

    async getOneById(req: any, res: any){
        try {
            const { id } = req.params
            const client = await Client.findByPk(id);
            res.send(client);
        } catch (error) {
            return res.status(500).json({error})
        }
    }

/*     //relationship 
        // one to one relationship
      async addProduct(req: any, res: any){
        try{
            const { id } = req.params;
            const { ProductId } = req.body;

            const client = await Client.findByPk(id);
            if(client!=null){
            client.ProductId = ProductId;
            await client.save();
            res.send(client);
            } 

        } catch (error) {
            return res.status(500).json({error})
        }  
    } */

}




const clientController = new ClientController();
export default clientController;