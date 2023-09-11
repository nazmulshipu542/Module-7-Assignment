exports.create = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is blog-create section"})
}

exports.read = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is blog-read section"})
}

exports.delete = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is blog-delete section"})
}

exports.update = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is blog-update section"})
}