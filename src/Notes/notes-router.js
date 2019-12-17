const path = require('path');
const express = require('express');
const xss = require('xss');
const NotesService = require('./notes-service');

const notesRouter = express.Router();
const jsonParser = express.json();

const serializeNote = note => ({
  id: note.id,
  style: note.style,
  title: xss(note.title),
  content: xss(note.content),
  date_published: note.date_published,
  author: note.author,
});








module.exports = notesRouter;