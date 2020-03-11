import {config} from './modules/config'
import AppService from './modules/app.service'
import './modules/header.component'
import './modules/header.pug'

console.log('Config key:', config.key);

const service = new AppService('Hello World!')
service.log();