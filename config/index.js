import { Store } from 'confidence'
import db from './db'
import setting from './setting'

const criteria = {
  mode: process.env.NODE_ENV
}

const config = {
  ...setting,
  db
}

const store = new Store(config)

export default store.get('/', criteria)