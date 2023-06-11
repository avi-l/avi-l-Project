import { readdirSync, readFileSync, writeFileSync } from 'fs';

const distFolder = './dist';
const assetsFolder = `${distFolder}/assets`;

const cssFiles = readdirSync(assetsFolder).filter((filename) => filename.endsWith('.css'));
const jsFiles = readdirSync(assetsFolder).filter((filename) => filename.endsWith('.js'));

const cssFileName = cssFiles[0];
const jsFileName = jsFiles[0];

const htmlFilePath = `${distFolder}/index.html`;
const html = readFileSync(htmlFilePath, 'utf-8');

const updatedHtml = html
    .replace(/<link\s+rel="stylesheet"\s+href=".+\.css"\s*\/?>/i, `<link rel="stylesheet" href="assets/${cssFileName}" />`)
    .replace(/<script\s+type="module"\s+src=".+\.js"\s*><\/script>/i, `<script type="module" src="assets/${jsFileName}"></script>`);

writeFileSync(htmlFilePath, updatedHtml, 'utf-8');

console.log('Updated asset references in index.html');
