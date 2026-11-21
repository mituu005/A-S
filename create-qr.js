const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const targetUrl = 'https://www.google.com/maps/search/?api=1&query=Joranda+Kalyana+Mandap%2C+Joranda%2C+Karikol%2C+Athgarh%2C+Kataka';

async function generate() {
  const options = {
    errorCorrectionLevel: 'H',
    type: 'svg',
    margin: 2,
    color: {
      dark: '#3d2410',
      light: '#fffaf0'
    }
  };

  const svgString = await QRCode.toString(targetUrl, options);
  fs.writeFileSync(path.join(__dirname, 'venue-qr-joranda.svg'), svgString);
  console.log('Generated venue-qr-joranda.svg successfully!');

  // Also generate PNG
  await QRCode.toFile(path.join(__dirname, 'venue-qr-joranda.png'), targetUrl, {
    errorCorrectionLevel: 'H',
    margin: 2,
    width: 600,
    color: {
      dark: '#3d2410',
      light: '#fffaf0'
    }
  });
  console.log('Generated venue-qr-joranda.png successfully!');
}

generate().catch(console.error);
