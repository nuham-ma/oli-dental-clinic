const fs = require('fs');

const files = ['braces.jpg', 'zicronia.jpg', 'dental-filling.jpg', 'teethcleaning.jpg', 'dental2.jpg', 'instrument.jpg'];
files.forEach(f => {
  if (fs.existsSync('public/images/' + f)) {
    const buf = fs.readFileSync('public/images/' + f);
    let i = 0;
    while (i < buf.length) {
      if (buf[i] === 0xFF && (buf[i+1] >= 0xC0 && buf[i+1] <= 0xC3)) {
        const h = buf.readUInt16BE(i + 5);
        const w = buf.readUInt16BE(i + 7);
        console.log(f, `${w}x${h}`, 'aspect:', (w/h).toFixed(2), 'bytes:', buf.length);
        break;
      }
      i++;
    }
  } else {
    console.log(f, 'NOT FOUND');
  }
});
