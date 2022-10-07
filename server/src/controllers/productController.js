import { Client } from '../models/clients.js'
import { Product } from '../models/products.js'

class IndexController {

        async list(req, res){
            try {
                const products = await Product.findAll();
                res.json(products)
            } catch (error) {
                return res.status(500).json({Error:error.message})
            }
        }

        async create (req, res){
            try {
                const {id, name, price, ClientId} = req.body;
                const newProduct = await Product.create({
                    id, name, price, ClientId
                });
                res.send(newProduct);
            } catch (error) {
                return res.status(500).json({Error:error.message})
            }
        }
        
        async update (req, res){
            const { id } = req.params;
            const { name, price } = req.body;
            
            const product =  await Product.findByPk(id);
            product.name = name;
            product.price = price;

            await product.save();
            res.send(product)

        }

        async delete (req, res){
            try {
                const { id } = req.params;
                await Product.destroy({
                    where: {id,}
                });
                res.json({"delelted":req.body})
            } catch (error) {
                return res.status(500).json({Error:error.message})
            }
        }

        async getOneById(req, res){
            try {
                const { id } = req.params
                const product = await Product.findByPk(id);
                res.send(product);
            } catch (error) {
                return res.status(500).json({Error:error.message})
            }
        }

        //relationship
        async getClients(req, res){
            const { id } = req.params;
                const clients = await Client.findAll({where:{ProductId:id}});
                res.json(clients)
        }

    }

const indexController = new IndexController();
export default indexController