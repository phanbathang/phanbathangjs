import cloudinary from "../configs/cloudinaryConfig.js";

export const uploadImages = async(req, res) => {
   try {
    const images = req.files.map(file => file.path)

    const uploadImages = []

    for(let image of images) {
        const results = await cloudinary.uploader.upload(images);
        uploadImages.push({
            url: results.secure_url,
            publicId: results.public_id,
        });
    }
    return res.status(200).json({
        message: "Upload images success",
        datas: uploadImages,
    })
   } catch (error) {
    return res.status(400).json({
        name: error.name,
        message: error.message,
    });
   }
};