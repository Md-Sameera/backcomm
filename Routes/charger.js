const express = require ('express')
const dataRoute = require('../Components/charger');

const detailRouter = express.Router()
detailRouter.route("/charger")
.get(dataRoute.apiController)
module.exports =detailRouter