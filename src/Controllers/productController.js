exports.create = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is product-create section"})
}

exports.read = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is product-read section"})
}

exports.delete = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is product-delete section"})
}

exports.update = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is product-update section"})
}