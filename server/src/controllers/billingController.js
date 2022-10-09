import { Billing } from "../models/billings.js";

class BillingController {

    async list(req, res){
        try {

            const billings = await Billing.findAll();
            res.send(billings);
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }
    }

    async create (req, res){
        try {
            const {
                id, 
                clientName, 
                clientIdentityCard,
                clientAge,
                clientCellNumber,
                serviceName,
                servicePrice,
                locationProduct,
                afiliatedPrice,
                fiscalAddress
            } = req.body;

            const billing = await Billing.create({
                id, 
                clientName, 
                clientIdentityCard,
                clientAge,
                clientCellNumber,
                serviceName,
                servicePrice,
                locationProduct,
                afiliatedPrice,
                fiscalAddress
            });
            res.send(billing);
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }
    }
    
    async update (req, res){
        try {
            const { id } = req.params;
            const {
                clientName, 
                clientIdentityCard,
                clientAge,
                clientCellNumber,
                serviceName,
                servicePrice,
                locationProduct,
                afiliatedPrice,
                fiscalAddress
            } = req.body;
            
            const billing =  await Billing.findByPk(id);
            billing.clientName = clientName;
            billing.clientIdentityCard = clientIdentityCard;
            billing.clientAge = clientAge;
            billing.clientCellNumber = clientCellNumber;
            billing.serviceName = serviceName; 
            billing.servicePrice = servicePrice;
            billing.locationProduct = locationProduct;
            billing.afiliatedPrice = afiliatedPrice;
            billing.fiscalAddress = fiscalAddress; 


            await billing.save();
            res.send(billing)
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }

    }

    async delete (req, res){
        try {
            const { id } = req.params;
            await Billing.destroy({
                where: {id,}
            });
            res.json('billing was deleted')
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }
    }

    async getOneById(req, res){
        try {
            const { id } = req.params
            const billing = await Billing.findByPk(id);
            res.send(billing);
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }
    }

    //relationship 
 
    async addProduct(req, res){
        try{
            const { id, idC, idP} = req.params;
            // const { ProductId, ClientId } = req.body;

            const billing = await Billing.findByPk(id);
            billing.ProductId = idP;
            billing.ClientId = idC;

            await billing.save();
            res.json(billing);
            
            //one by one relation test
            /*
            const product = await Product.findByPk(ProductId);
            product.BillingId = id;
            await product.save();
            res.json({billing,product});
            */
        } catch (error) {
            return res.status(500).json({Error:error.message})
        }  
    }

    async getBillingfromProduct(req, res){
        const { id } = req.params;
            const billing = await Billing.findAll({where:{ProductId:id}});
            res.send(billing)
    }

    async getBillingfromClient(req, res){
        const { id } = req.params;
            const billing = await Billing.findAll({where:{ClientId:id}});
            res.send(billing)
    }


}

const billingController = new BillingController();
export default billingController;    