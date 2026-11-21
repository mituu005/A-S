const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const items = fs.readdirSync(__dirname);
for (const item of items) {
  if (item === 'node_modules' || item === '.git' || item === 'public' || item === '.github') continue;
  const src = path.join(__dirname, item);
  const dest = path.join(publicDir, item);
  try {
    const stat = fs.statSync(src);
    if (stat.isFile()) {
      fs.copyFileSync(src, dest);
    }
  } catch (err) {
    console.error('Error copying', item, err);
  }
}

console.log('Build succeeded: Static assets prepared in public/');
