import QRCode from 'qrcode';

/**
 * Generates a QR Code with the given configuration and saves it to a file.
 * @param {string} data - The data to encode in the QR Code.
 * @param {object} options - Configuration options for the QR Code generation.
 * @param {string} outputPath - The file path where the QR Code will be saved.
 */
export const generateQRCode = async (data, options, outputPath) => {
  try {
    await QRCode.toFile(outputPath, data, options);
    console.log(`QR Code generated and saved to ${outputPath}`);
  } catch (error) {
    console.error('Error generating QR Code:', error);
  }
};
