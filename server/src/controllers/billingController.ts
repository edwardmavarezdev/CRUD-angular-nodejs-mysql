 import { Billing } from "../models/billings.js";

class BillingController {

    async list(req: any, res: any){
        try {

            const billings = await Billing.findAll();
            res.send(billings);
        } catch (error) {
            return res.status(500).json({error})
        }
    }

    async create (req: any, res: any){
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
            return res.status(500).json({error})
        }
    }
    
    async update (req: any, res: any){
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
            if(billing!=null){
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
            }

            res.send(billing)
        } catch (error) {
            return res.status(500).json({error})
        }

    }

    async delete (req: any, res: any){
        try {
            const { id } = req.params;
            await Billing.destroy({
                where: {id,}
            });
            res.json('billing was deleted')
        } catch (error) {
            return res.status(500).json({error})
        }
    }

    async getOneById(req: any, res: any){
        try {
            const { id } = req.params
            const billing = await Billing.findByPk(id);
            res.send(billing);
        } catch (error) {
            return res.status(500).json({error})
        }
    }

    //relationship 
 
     async addProduct(req: any, res: any){
        try{
            const { id, idC, idP} = req.params;
            // const { ProductId, ClientId } = req.body;

            const billing = await Billing.findByPk(id);
            if(billing!=null){
            billing.ProductId = idP;
            billing.ClientId = idC;
            await billing.save();
            }
            res.json(billing);

        } catch (error) {
            return res.status(500).json({error})
        }  
    }

    async getBillingfromProduct(req: any, res: any){
        const { id } = req.params;
            const billing = await Billing.findAll({where:{ProductId:id}});
            res.send(billing)
    }

    async getBillingfromClient(req: any, res: any){
        const { id } = req.params;
            const billing = await Billing.findAll({where:{ClientId:id}});
            res.send(billing)
    }


}

const billingController = new BillingController();
export default billingController;     