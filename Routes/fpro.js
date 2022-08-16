const express = require ('express')
const dataRoute = require('../Components/fpro');

const detailRouter = express.Router()
detailRouter.route("/fpro")
.get(dataRoute.apiController)
module.exports =detailRouter