import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import path from "path"
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dmap6p5wl', 
  api_key: '668117851649871', 
  api_secret: 'hD5IdvCAgAjlGbBDSKhpoGh3N7M' 
});

export async function POST(request) {
    const data = await request.formData()
    const image = data.get('file')

    if(!image) {
        return NextResponse.json("No se ha subido ninguna imagen", {status: 400})
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Guardar en un archivo
    //const filePath = path.join(process.cwd(), 'public', image.name)
    //await writeFile(filePath, buffer)

    const response = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (err, result) => {
            if(err) {
                reject(err)
            }
            resolve(result)
        })
        .end(buffer)
    })

    return NextResponse.json({
        message: 'Ok',
        url: response.secure_url
    })
}