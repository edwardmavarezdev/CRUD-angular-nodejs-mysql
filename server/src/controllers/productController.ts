import { Client } from '../models/clients.js'
import { Product } from '../models/products.js'

class IndexController {

        async list(req: any, res: any){
            try {
                const products = await Product.findAll();
                res.json(products)
            } catch (error) {
                return res.status(500).json({error})
            }
        }

        async create (req: any, res: any){
            try {
                const {id, name, price, ClientId} = req.body;
                const newProduct = await Product.create({
                    id, name, price, ClientId
                });
                res.send(newProduct);
            } catch (error) {
                return res.status(500).json({error})
            }
        }
        
        async update (req: any, res: any){
            const { id } = req.params;
            const { name, price } = req.body;
            
            const product =  await Product.findByPk(id);
            if(product!=null){
            product.name = name;
            product.price = price;

            await product.save();
            }
            res.send(product)

        }

        async delete (req: any, res: any){
            try {
                const { id } = req.params;
                await Product.destroy({
                    where: {id,}
                });
                res.json({"delelted":req.body})
            } catch (error) {
                return res.status(500).json({error})
            }
        }

        async getOneById(req: any, res: any){
            try {
                const { id } = req.params
                const product = await Product.findByPk(id);
                res.send(product);
            } catch (error) {
                return res.status(500).json({error})
            }
        }

        //relationship
        async getClients(req: any, res: any){
            const { id } = req.params;
                const clients = await Client.findAll({where:{ProductId:id}});
                res.json(clients)
        }

    }

const indexController = new IndexController();
export default indexController;