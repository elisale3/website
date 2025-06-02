const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImage = async (inputPath) => {
  try {
    // Create output path in the build/static/media directory
    const fileName = path.basename(inputPath).replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(__dirname, '../build/static/media', fileName);
    
    // Ensure the output directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    
    // Skip if WebP version already exists and is newer
    if (fs.existsSync(outputPath)) {
      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);
      if (outputStats.mtime > inputStats.mtime) {
        console.log(`Skipping ${inputPath} - WebP version is up to date`);
        return;
      }
    }

    // Read the image
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Force portrait orientation for team photos
    if (inputPath.includes('/team/')) {
      // If image is wider than tall, rotate it 90 degrees
      if (metadata.width > metadata.height) {
        image.rotate(90);
      }
    } else {
      // For other images, use EXIF orientation
      if (metadata.orientation) {
        image.rotate();
      }
    }

    await image
      .webp({ 
        quality: 80,
        effort: 6
      })
      .toFile(outputPath);
    console.log(`Converted ${inputPath} to WebP at ${outputPath}`);
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
        await optimizeImage(filePath);
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
  .then(() => console.log('Image optimization complete'))
  .catch(error => {
    console.error('Error during optimization:', error);
    process.exit(1);
  }); 