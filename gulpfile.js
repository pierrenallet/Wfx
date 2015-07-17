var gulp = require('gulp');
var ts = require('gulp-typescript');

var taskNames = ["1.1-helloworld", 
  "1.2-helloworld-text-attribute",
  "1.3-helloworld-simple-data",
  "1.4-helloworld-function",
  "1.5-helloworld-two-way-data-binding",
  //"1.6-helloworld-multiple-apps",
  "2.1-calculator",
  "2.2-calculator-style-properties",
  "2.3-calculator-events",
  "4.1-collections",
  "4.1-collections-modification",
  "todo-list",
  ];
taskNames.forEach(function (taskName) {
  var folderName = "./samples/" + taskName;
  //var tsProject = ts.createProject('./samples/' + folderName + '/src/tsconfig.json');
  gulp.task(taskName, function () {
    console.log("looking at folder " + folderName)
    gulp.src(folderName + "/src/*.ts")
    .pipe(ts({
      out : 'app.js'
    }))
    .pipe(gulp.dest(folderName));
   /* var tsResult = tsProject.src()
      .pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest("./samples/" + folderName));
    */
  });
});




gulp.task("watch", taskNames, function () {
  gulp.watch('./**/*.ts', taskNames);
});


