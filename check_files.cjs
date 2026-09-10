const fs = require('fs');

const files = ['braces.jpg', 'zicronia.jpg', 'dental-filling.jpg', 'dental2.jpg', 'instrument.jpg'];
files.forEach(f => {
  const p = 'public/images/' + f;
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(f, 'size:', stat.size);
  } else {
    console.log(f, 'NOT FOUND');
  }
});
