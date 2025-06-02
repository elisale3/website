const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const convertToWebP = async (inputPath, outputPath) => {
  try {
    // Check if WebP version already exists and is newer
    if (fs.existsSync(outputPath)) {
      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);
      if (outputStats.mtime > inputStats.mtime) {
        console.log(`Skipping ${inputPath} - WebP version is up to date`);
        return;
      }
    }

    // Ensure the output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    await sharp(inputPath)
      .webp({ 
        quality: 80,
        effort: 6 // Higher effort for better compression
      })
      .toFile(outputPath);
    console.log(`Converted ${inputPath} to WebP`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
  }
};

const processDirectory = async (directory) => {
  try {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
        const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        await convertToWebP(filePath, webpPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error.message);
  }
};

// Process all image directories
const imageDirectories = [
  path.join(__dirname, '../src/static/team'),
  path.join(__dirname, '../src/static/issues'),
  path.join(__dirname, '../src/static/film-strip'),
  path.join(__dirname, '../src/static/featured-issue'),
  path.join(__dirname, '../src/static/events'),
  path.join(__dirname, '../src/static/blogs'),
  path.join(__dirname, '../src/static/who-are-we-imgs'),
  path.join(__dirname, '../src/static/youTrend-imgs')
];

// Process each directory
Promise.all(imageDirectories.map(dir => processDirectory(dir)))
  .then(() => console.log('WebP conversion complete'))
  .catch(error => {
    console.error('Error during conversion:', error);
    process.exit(1);
  }); 