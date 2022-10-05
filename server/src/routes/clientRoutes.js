import { Router} from 'express'
import clientController from '../controllers/clientController.js';

class ClientsRoutes {

    router = Router();

    constructor() {
        this.config();
    }

    config(){
        //CRUD
        this.router.get('/', clientController.list);
        this.router.post('/add', clientController.create);
        this.router.put('/:id', clientController.update);
        this.router.delete('/:id', clientController.delete);
        //individual read
        this.router.get('/:id', clientController.getOneById);

        //relationship  test methods
        this.router.put('/:id/addProduct', clientController.addProduct);

    }
}

const clientRoutes = new ClientsRoutes();
export default clientRoutes.router;