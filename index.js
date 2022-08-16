const express = require('express');
const froute = require('./Routes/fpro');
const macroute = require('./Routes/mac');
const ipadroute = require('./Routes/ipad');
const iphoneroute = require('./Routes/iphone');
const aroute = require('./Routes/accesories');
const audroute = require('./Routes/audio');
const bagroute = require('./Routes/bag');
const caroute = require('./Routes/camera');
const chroute = require('./Routes/charger');
const keyroute = require('./Routes/keyboard');

const cors = require("cors");
const app = express();

app.use(cors())
app.use('/api',audroute) 
app.use('/api',chroute) 
app.use('/api',keyroute) 
app.use("/api" ,ipadroute )
app.use('/api',macroute) 
app.use("/api" ,iphoneroute )
app.use('/api',bagroute) 
app.use("/api" ,aroute )
app.use("/api" ,caroute )
app.use("/api" ,froute )

app.listen(process.env.PORT||40025,()=>{console.log("Application in progress..")})