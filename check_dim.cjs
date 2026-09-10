const fs = require('fs');

['braces.jpg', 'zicronia.jpg', 'dental-filling.jpg', 'dental2.jpg', 'instrument.jpg'].forEach(f => {
  const p = 'public/images/' + f;
  const buf = fs.readFileSync(p);
  let i = 0;
  while (i < buf.length) {
    if (buf[i] === 0xFF && (buf[i+1] >= 0xC0 && buf[i+1] <= 0xC3)) {
      const h = buf.readUInt16BE(i + 5);
      const w = buf.readUInt16BE(i + 7);
      console.log(f, `${w}x${h}`, 'aspect:', (w/h).toFixed(2));
      break;
    }
    i++;
  }
});
