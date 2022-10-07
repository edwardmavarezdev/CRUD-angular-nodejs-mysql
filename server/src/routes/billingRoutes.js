import { Router} from 'express'
import billingController from '../controllers/billingController.js';

class BillingRoutes {

    router = Router();

    constructor() {
        this.config();  
    }

    config(){
        //CRUD
        this.router.get('/', billingController.list);
        this.router.post('/add', billingController.create);
        this.router.put('/:id', billingController.update);
        this.router.delete('/:id', billingController.delete);
        //individual read
        this.router.get('/:id', billingController.getOneById);

        //relationship  test methods
        this.router.put('/:id/addClient/:idC/addProduct/:idP', billingController.addProduct);
        this.router.get('/:id/searchBillingsProduct', billingController.getBillingfromProduct);
        this.router.get('/:id/searchBillingsClient', billingController.getBillingfromClient);




    }
}

const billingRoutes = new BillingRoutes();
export default billingRoutes.router;