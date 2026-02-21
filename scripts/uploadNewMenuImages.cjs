const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

// Cloudinary Configuration
cloudinary.config({
    cloud_name: 'dzuua38cd',
    api_key: '547389926285277',
    api_secret: 'S8zrvo_MfcBl5vjx_hQJeXI4AQU'
});

const IMAGES_DIR = path.join(__dirname, '../public/images');

async function uploadNewMenuImages() {
    console.log('🚀 Starting Cloudinary Upload for Master Menu Expansion...\n');

    if (!fs.existsSync(IMAGES_DIR)) {
        console.error(`❌ Error: Images directory not found at ${IMAGES_DIR}`);
        return;
    }

    const files = fs.readdirSync(IMAGES_DIR).filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
    });

    console.log(`Found ${files.length} images to upload.\n`);

    for (const file of files) {
        const filePath = path.join(IMAGES_DIR, file);
        const fileNameWithoutExt = path.parse(file).name;

        try {
            console.log(`Uploading ${file}...`);
            const result = await cloudinary.uploader.upload(filePath, {
                folder: 'new-bites/menu', // Putting all menu item images in the menu folder
                public_id: fileNameWithoutExt,
                use_filename: true,
                unique_filename: false,
                overwrite: true
            });
            console.log(`✅ Success: ${file} -> ${result.secure_url}`);
        } catch (error) {
            console.error(`❌ Error uploading ${file}:`, error.message);
        }
    }

    console.log('\n✨ All Master Menu uploads completed!');
}

uploadNewMenuImages();
