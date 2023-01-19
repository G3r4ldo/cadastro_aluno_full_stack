import express from 'express'
import 'dotenv/config';
import '../services/TranslationsYup'

import {router} from '../routes'

var cors = require ('cors')

const app = express()
app.use(cors({origin: ['http://localhost:3000']}));
const corsOptions = {
    exposedHeaders: 'x-total-count',
  };
app.use(cors(corsOptions));
app.use(express.json())
app.use(router)


export {app};