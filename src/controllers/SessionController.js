const User = require('../models/User')

class SessionContoller{
	async store(req,res){
		const {email} = req.body
		try{
			let user = await User.findOne({email})
			if(!user){
				user = await User.create({email})
			}
			return res.status(200).json({user})
		}
		catch(err){
			console.log(err);
			return res.status(500).json(err)
		}
	}
}
module.exports = new SessionContoller()