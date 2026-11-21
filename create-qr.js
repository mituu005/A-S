const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const pradeepUrl = 'https://www.google.com/maps/search/?api=1&query=Pradeep+Palace%2C+Kulasarichuan%2C+Near+Khalarda%2C+Kataka';
const jorandaUrl = 'https://www.google.com/maps/search/?api=1&query=Joranda+Kalyana+Mandap%2C+Joranda%2C+Karikol%2C+Athgarh%2C+Kataka';

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

  // 1. Pradeep Palace QR
  const pradeepSvg = await QRCode.toString(pradeepUrl, options);
  fs.writeFileSync(path.join(__dirname, 'venue-qr-pradeep.svg'), pradeepSvg);
  await QRCode.toFile(path.join(__dirname, 'venue-qr-pradeep.png'), pradeepUrl, {
    errorCorrectionLevel: 'H',
    margin: 2,
    width: 600,
    color: {
      dark: '#3d2410',
      light: '#fffaf0'
    }
  });
  console.log('Generated Pradeep Palace QR (SVG + PNG)');

  // 2. Joranda Kalyana Mandap QR
  const jorandaSvg = await QRCode.toString(jorandaUrl, options);
  fs.writeFileSync(path.join(__dirname, 'venue-qr-joranda.svg'), jorandaSvg);
  await QRCode.toFile(path.join(__dirname, 'venue-qr-joranda.png'), jorandaUrl, {
    errorCorrectionLevel: 'H',
    margin: 2,
    width: 600,
    color: {
      dark: '#3d2410',
      light: '#fffaf0'
    }
  });
  console.log('Generated Joranda Kalyana Mandap QR (SVG + PNG)');
}

generate().catch(console.error);
