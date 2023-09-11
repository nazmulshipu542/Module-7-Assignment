exports.create = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is portfolio-create section"})
}

exports.read = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is portfolio-read section"})
}

exports.delete = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is portfolio-delete section"})
}

exports.update = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is portfolio-update section"})
}