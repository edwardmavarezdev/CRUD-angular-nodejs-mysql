import { Router} from 'express'
import   productController  from '../controllers/productController.js'

class IndexRoutes {

    router = Router();

    constructor() {
        this.config();
    }

    config(){
        this.router.get('/', productController.list);
        this.router.post('/add', productController.create);
        this.router.get('/:id', productController.getOneById);
        this.router.put('/:id', productController.update);
        this.router.delete('/:id', productController.delete);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;