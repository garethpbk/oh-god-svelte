import * as fs from 'fs';

export function get(req, res, next) {
  const files = fs.readdirSync('src/routes/', (_, files) => files);
  const slides = files
    .filter(file => typeof parseInt(file[0]) === 'number' && !isNaN(parseInt(file[0])))
    .map(slide => slide.substr(0, 2));

  res.end(JSON.stringify(slides));
}
