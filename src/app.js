import express from 'express'
import bodyParser from 'body-parser'
import {
  addItemLifo,
  getItemLifo,
  setItemKeyValue,
  getItemKeyValue
} from './controllers'
import makeCallback from './express-callback'

let app = express()
app.use(bodyParser.json())

app.post(`/api/lifo/add`, makeCallback(addItemLifo))
app.get(`/api/lifo`, makeCallback(getItemLifo))
app.post(`/api/map/set`, makeCallback(setItemKeyValue))
app.get(`/api/map`, makeCallback(getItemKeyValue))

module.exports = app
