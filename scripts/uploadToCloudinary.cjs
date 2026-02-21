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

// Explicit mapping for specific folders
const categoryMapping = {
    'hero': ['hero1', 'combo', 'slice', 'herodishes', 'herodrinks', 'herofriends', 'hero.brand.poster'],
    'promo': ['allyoucaneat', 'thunderwings', 'pizzabites', 'minibites'],
    'restaurant': ['outside_x', 'inside_x'],
    'categories': ['pizzaveg1', 'pizzanon2', 'friedc', 'tw', 'minibitesv', 'minibitesnv', 'extra', 'd1']
};

async function syncToCloudinary() {
    console.log('🚀 Starting Comprehensive Cloudinary Sync...\n');

    if (!fs.existsSync(IMAGES_DIR)) {
        console.error(`❌ Error: Images directory not found at ${IMAGES_DIR}`);
        return;
    }

    const files = fs.readdirSync(IMAGES_DIR).filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    console.log(`Found ${files.length} local images. checking sync status...\n`);

    for (const file of files) {
        const filePath = path.join(IMAGES_DIR, file);
        const fileNameWithoutExt = path.parse(file).name;

        // Determine Cloudinary folder
        let folder = 'new-bites/menu'; // Default to menu
        for (const [catName, fileList] of Object.entries(categoryMapping)) {
            if (fileList.includes(fileNameWithoutExt)) {
                folder = `new-bites/${catName}`;
                break;
            }
        }

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                folder: folder,
                public_id: fileNameWithoutExt,
                use_filename: true,
                unique_filename: false,
                overwrite: true
            });
            console.log(`✅ ${file} -> ${folder}/${fileNameWithoutExt}`);
        } catch (error) {
            console.error(`❌ Error uploading ${file}:`, error.message);
        }
    }

    console.log('\n✨ Cloudinary sync completed successfully!');
}

syncToCloudinary();
