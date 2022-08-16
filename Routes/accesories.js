const express = require ('express')
const dataRoute = require('../Components/accesories');

const detailRouter = express.Router()
detailRouter.route("/accesories")
.get(dataRoute.apiController)
module.exports =detailRouter