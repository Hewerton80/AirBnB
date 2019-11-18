const routes = require('express').Router()
const multer = require('multer')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashBoardController = require('./controllers/DashBoardController')
const BookingController = require('./controllers/BookingController')

const uploadConfig = require('./config/upload')
const upload = multer(uploadConfig)

routes.post('/sessions/store',SessionController.store)
routes.get('/spots/index',SpotController.index)
routes.post('/spots/store',upload.single('thumbnail'),SpotController.store)
routes.post('/spots/:spot_id/booking/store',BookingController.store)

routes.get('/dashboard/show',DashBoardController.show)
module.exports = routes