import fs from 'fs';
import path from 'path';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const dataFile = path.join(process.cwd(), 'data.ts');

const dataContent = fs.readFileSync(dataFile, 'utf8');

// Use regex to extract only the menuCategories array
const menuCategoriesStr = dataContent.split('export const menuCategories: MenuCategory[] = [')[1].split('export const exploreCategories')[0];

const imageMatches = menuCategoriesStr.match(/image:\s*['"`](\/images\/[^'"`]+)['"`]/g);
const usedImages = imageMatches ? imageMatches.map(m => m.split(/['"`]/)[1].replace('/images/', '')) : [];

const uniqueUsedImages = [...new Set(usedImages)];

const allPublicImages = fs.readdirSync(publicImagesDir).filter(f => f !== 'menu' && f !== '.DS_Store');

const unusedImages = allPublicImages.filter(img => !uniqueUsedImages.includes(img));
const missingImages = uniqueUsedImages.filter(img => !allPublicImages.includes(img));

console.log(`✔ Total items referenced in menu categories: ${usedImages.length}`);
console.log(`✔ Total unique images used in menu categories: ${uniqueUsedImages.length}`);
console.log(`✔ Missing images: ${missingImages.length} ->`, missingImages);
console.log(`✔ Unused images: ${unusedImages.length}`);
