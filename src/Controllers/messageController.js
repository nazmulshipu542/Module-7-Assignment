exports.create = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is message-create section"})
}

exports.read = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is message-read section"})
}

exports.delete = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is message-delete section"})
}

exports.update = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is message-update section"})
}