//El appjs sirve para configurar la aplicación
import express from 'express'
//este módulo me sirve para ver los resultados de las peticiones que se hacen desde el navegador 
import morgan from 'morgan'
import pkg from '../package.json'
//Aqui estoy importando una función 
import {createRoles} from './libs/initialSetup'

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'
const app = express()
createRoles();
//Este método es para colocarle un nombre a una variable  y un valor a la variable 
app.set("pkg", pkg);

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res) => {
    res.json({
        name: pkg.name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
    })
})

app.use('/api/products',productsRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/users', usersRoutes);

export default app;
