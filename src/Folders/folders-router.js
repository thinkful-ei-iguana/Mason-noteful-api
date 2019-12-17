const path = require('path');
const express = require('express');
const xss = require('xss');
const FolderService = require('./folders-service');

const foldersRouter = express.Router();
const jsonParser = express.json();

const serializeFolder = folder => ({
  id: folder.id,
  style: folder.style,
  title: xss(folder.title),
  content: xss(folder.content),
  date_published: folder.date_published,
  author: folder.author,
});











module.exports = foldersRouter;