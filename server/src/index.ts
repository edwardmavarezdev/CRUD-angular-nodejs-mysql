import express  from 'express';
import morgan from 'morgan'; 
import cors from 'cors';

import { sequelize } from './database/database.js';

import productRoutes from './routes/productRoutes.js';
import billingRoutes from './routes/billingRoutes.js'; 
import clientRoutes from './routes/clientRoutes.js';

class Server {

    app = express();

    constructor(){
        this.config();
        this.routes();
         this.dbSequelize();
    }

     async dbSequelize(){
        try {
            await sequelize.sync();

          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    } 

    config(){
        this.app.set('port',process.env.PORT || 3000)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        
    }

    routes(){
         this.app.use('/products',productRoutes);
        this.app.use('/billing',billingRoutes); 
        this.app.use('/clients',clientRoutes);


    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port',this.app.get('port'))
        })
    }
}

const server = new Server();
server.start();
//2:23