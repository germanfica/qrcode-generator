import { QR_CODE_CONFIG, QR_CODE_OUTPUT, QR_CODE_DATA } from './config.js';
import { generateQRCode } from './qrcode-generator.js';

/**
 * Main function to generate the QR Code.
 */
const main = async () => {
  console.log('Generating QR Code...');
  await generateQRCode(QR_CODE_DATA, QR_CODE_CONFIG, QR_CODE_OUTPUT);
  console.log('QR Code generation complete.');
};

// Execute the main function
main();
