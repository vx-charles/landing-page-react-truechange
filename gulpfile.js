const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

const tasksMinifyImg = [
  'minify-images-landing-page'
]

gulp.task('minify-images-landing-page', async function () {
  gulp.src('src/assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/assets/'))
})

gulp.task('default', gulp.series(...tasksMinifyImg))