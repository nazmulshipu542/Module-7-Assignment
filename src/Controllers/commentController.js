exports.create = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is comment-create section"})
}

exports.read = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is comment-read section"})
}

exports.delete = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is comment-delete section"})
}

exports.update = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is comment-update section"})
}