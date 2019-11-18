const Spot = require('../models/Spot')

class SpotContoller{
	async index(req,res){
		const {techs} = req.query 
		try{
			const spots = await Spot.find({techs:techs})
			return res.status(200).json(spots)
		}
		catch(err){
			console.log(err);
			return res.status(500).json({err:'err'})
		}
	}
	async store(req,res){
		const {filename} = req.file
		const {company,price,techs} = req.body
		
		const {user_id} = req.headers
		
		try{
			const spot = await Spot.create({
				user:user_id,
				thumbnail:filename,
				company,
				price,
				techs:techs.split(',').map(tech=>tech.trim())
			})
			return res.status(200).json(spot)
		}
		catch(err){
			console.log(err);
			return res.status(500).json(err)
		}
	}
}
module.exports = new SpotContoller()