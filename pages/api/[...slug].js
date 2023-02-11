import path from 'path';
import { promises as fs } from 'fs';

import loadMarkdoc from '../../src/loadMarkdoc';

export default async function handler(req, res) {
  //console.log(req.query);
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'content');
  //Read the json data file data.json
  //const fileContents = await fs.readFile(jsonDirectory + '/books.json', 'utf8');
  //Return the content of the data file in json format
  const route = req.query;
  let fileContents = {};
  if (route.slug[0] === "blog") {
    fileContents = await loadMarkdoc(req.query);
    return res.status(200).json(JSON.stringify(fileContents));
  } else {
    fileContents = await fs.readFile(jsonDirectory + '/' + route.slug[route.slug.length - 1] + '.json', 'utf8');
    return res.status(200).json(fileContents);
  }
  //return res.status(200).json(JSON.stringify(fileContents));
}
