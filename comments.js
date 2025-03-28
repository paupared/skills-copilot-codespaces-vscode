// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var port = 3000;
var cors = require('cors');
var { v4: uuidv4 } = require('uuid');
var commentsFilePath = path.join(__dirname, 'comments.json');

