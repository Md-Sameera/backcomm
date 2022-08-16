const express = require ('express')
const dataRoute = require('../Components/audio');

const detailRouter = express.Router()
detailRouter.route("/audio")
.get(dataRoute.apiController)
module.exports =detailRouter