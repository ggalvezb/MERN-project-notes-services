const userCtrl={};

userCtrl.getUsers=(req,res)=>res.json({message:'Usuario info'})
userCtrl.createUser=(req,res)=>res.json({message:'Usuario creado'})
userCtrl.deleteUser=(req,res)=>res.json({message:'Usuario eliminado'})

module.exports=userCtrl;
