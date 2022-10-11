import { Router} from 'express'
import   productController  from '../controllers/productController.js'

class IndexRoutes {

    router = Router();

    constructor() {
        this.config();
    }

    config(){
        //CRUD
        this.router.get('/', productController.list);
        this.router.post('/add', productController.create);
        this.router.put('/:id', productController.update);
        this.router.delete('/:id', productController.delete);
        //individual read
        this.router.get('/:id', productController.getOneById);

        //relations
        this.router.get('/:id/clients', productController.getClients);
        
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;