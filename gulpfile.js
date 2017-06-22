 // Include Core & Plugins
var gulp       = require('gulp'),
    config     = require('./config.json'),
    requireDir = require('require-dir');

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./tasks', { recurse: true });

// Default Task
gulp.task('default', config.gulp.defaultTasks);