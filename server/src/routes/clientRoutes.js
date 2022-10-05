import { Router} from 'express'
import clientController from '../controllers/clientController.js';

class ClientsRoutes {

    router = Router();

    constructor() {
        this.config();
    }

    config(){
        this.router.get('/', clientController.list);
        this.router.post('/add', clientController.create);
        this.router.put('/:id', clientController.update);
        this.router.delete('/:id', clientController.delete);
        this.router.get('/:id', clientController.getOneById);
     //   this.router.get('/:id/products', clientController.getProducts);
    }
}

const clientRoutes = new ClientsRoutes();
export default clientRoutes.router;