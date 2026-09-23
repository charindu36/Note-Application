export function getAllNotes(req,res){
    res.status(200).send("you just fetched the notes");
}

export function createNotes(req,res){
    res.status(201).json({message:"note created successfully"});
}

export function updateNotes(req,res){
    res.status(200).json({message:"note updated successfully"});
}

export function deleteNotes(req,res){
    res.status(200).json({message:"note deleted successfully"});
}