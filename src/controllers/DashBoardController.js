const Spot = require('../models/Spot')

class DashBoardController{
	async show(req,res){
		const {user_id} = req.headers
		console.log(user_id);
		try{
			const spots = await Spot.find({user:user_id})
			return res.status(200).json(spots)
		}
		catch(err){
			console.log(err);
			return res.status(500).json({err:'err'})
		}
	}
}

module.exports = new DashBoardController() 