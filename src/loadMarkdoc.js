const path = require('path');

import { promises as fs } from 'fs';
const yaml = require('js-yaml');

const Markdoc = require('@markdoc/markdoc');

const fence = require('../markdoc/nodes/fence.markdoc');
const heading = require('../markdoc/nodes/heading.markdoc');
const callout = require('../markdoc/tags/callout.markdoc');

export default async function loadMarkdoc(fileName) {
  const jsonDirectory = path.join(process.cwd(), 'content');
  const fileContents = await fs.readFile(jsonDirectory + '/books.md', 'utf8');
  const document = createContentManifest(fileContents);
  const variables = {
    flags: {
      show_secret_feature: false,
    },
  };
  if (!document) {
    return res.sendStatus(404);
  }
  const { ast } = document;
  const config = {
    tags: {
      callout,
    },
    nodes: {
      fence,
      heading,
    },
    variables: variables,
  };
  const content = Markdoc.transform(ast, config);
  return content;
}

const parseMarkdocFrontmatter = (ast) => {
  return ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter)
    : {};
};

// This creates a mapping between route and parsed Markdoc content.
const createContentManifest = (rawText) => {
  const ast = Markdoc.parse(rawText);
  const frontmatter = parseMarkdocFrontmatter(ast);
  const contentManifest = {
    ast,
    frontmatter,
  };

  return contentManifest;
};
