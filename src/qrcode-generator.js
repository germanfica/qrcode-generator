import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';

/**
 * Ensures that the output directory exists. Creates it if it doesn't.
 * @param {string} dirPath - The directory path to check or create.
 */
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Directory created: ${dirPath}`);
  }
};

/**
 * Generates a QR Code with the given configuration and saves it to a file.
 * @param {string} data - The data to encode in the QR Code.
 * @param {object} options - Configuration options for the QR Code generation.
 * @param {string} outputPath - The file path where the QR Code will be saved.
 */
export const generateQRCode = async (data, options, outputPath) => {
  try {
    const outputDir = path.dirname(outputPath);
    ensureDirectoryExists(outputDir);

    await QRCode.toFile(outputPath, data, options);
    console.log(`QR Code generated and saved to ${outputPath}`);
  } catch (error) {
    console.error('Error generating QR Code:', error);
  }
};
