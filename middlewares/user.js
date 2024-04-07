const User=require("../models/User.js")
async function getUser(req, res, next) 
    
{
    let user;
    try 
    {
        console.log(req.params.id)
        user = await User.findById(req.params.id);
        console.log(user)
        res.user = user;
        console.log(user)
        if (user == null) {return res.status(404).json({ message: 'User not found' });
    }
} 
catch (err)
 {
    return res.status(500).json({ message: err.message });
}
next();
console.log(user)
}
module.exports=getUser;