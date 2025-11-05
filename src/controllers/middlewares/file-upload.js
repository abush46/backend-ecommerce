import multer, { diskStorage } from 'multer'

export async function uploadFile(req, res, next) {
    try {
        console.log("DSf")
        const storage = diskStorage({
            destination: function (req, file, cb) {
              cb(null, 'public/storage/')
            },
            filename: function (req, file, cb) {
              let uploadFile = file.originalname.split('.')
              let name = `${uploadFile[0]}-${Date.now()}.${uploadFile[uploadFile.length-1]}`
              // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
              cb(null, name)
            }
          })
          
        const upload = multer({ storage: storage }) 

        upload.array('photos', 12)
        return next()
        
    } catch (error) {
        return res.status(500).json({ err:"something went wrong", msg:error.message })    
    }
}