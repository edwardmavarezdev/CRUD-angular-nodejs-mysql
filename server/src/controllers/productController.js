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
                const {id, name, price} = req.body;
                const newProduct = await Product.create({
                    id, name, price
                });
                res.json(newProduct);
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
            res.json({"product":product})

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

    }

const indexController = new IndexController();
export default indexController