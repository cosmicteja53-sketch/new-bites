import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data.ts');
const dataContent = fs.readFileSync(dataFile, 'utf8');

// Use regex to extract only the menuCategories array
const menuCategoriesStr = dataContent.split('export const menuCategories: MenuCategory[] = [')[1].split('export const exploreCategories')[0];

const categoryBlocks = menuCategoriesStr.split(/id:\s*['"`]/).slice(1);

let report = "Items per category:\n";
categoryBlocks.forEach(block => {
    const label = block.match(/label:\s*['"`](.*?)['"`]/)[1];
    const itemsCount = (block.match(/name:\s*['"`]/g) || []).length;
    report += `- ${label}: ${itemsCount}\n`;
});

console.log(report);
