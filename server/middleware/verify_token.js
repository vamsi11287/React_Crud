
const api_token = 'd02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04'

const jwt = require('jsonwebtoken')

function verifyToken(req,res,next) {
    const bearerHeader = req.headers['authorization']
    if(bearerHeader.split(' ')[1]==api_token){
    try{
        const payload = jwt.verify(api_token)
        req.user = payload
        console.log(req.user)
        next()
    }
    catch(err){
        // throw Error('unauthorized user :-',err)
        res.status(401).json(err)
        // console.log(err)
    }
}
}
module.exports = verifyToken

