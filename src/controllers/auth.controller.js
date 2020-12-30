const user = require('../models/user');

exports.login = (req, res) => {
    const { username , password } = req.body;
    
    if(!(username && password)){
        res.status(400).json({ message : "El usuario y la contraceña son requeridos"});
    }
    try{
        user.findOne({
            where:{
                email : username
            }
        }).then(user => {
            req.status(200).json(user);
        })
        console.log(user)
    }catch(err){
        return res.status(400).json({message: "Usuario no existe"});
    }

    
}