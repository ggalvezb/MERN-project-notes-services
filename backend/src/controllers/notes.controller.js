const notesCtrl={};

notesCtrl.getNotes=(req,res)=>res.json({message:[]})

notesCtrl.createNote = (req,res)=>res.json({message:'Nota Guardada'})

notesCtrl.getNote =(req,res)=>res.json({title:'asdsadas'})

notesCtrl.updateNote = (req,res)=>res.json({message:'nota actualizada'})

notesCtrl.deleteNotes = (req,res)=>res.json({message:'nota eliminada'})

module.exports=notesCtrl

