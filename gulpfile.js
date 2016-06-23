var gulp = require('gulp'),
    del = require('del'),
    ts = require('gulp-typescript'),
    merge = require('merge2'),

    info = {
        ts: {
            server: {
                files: 'server/**/**.ts',
                config: 'server/tsconfig.json'
            },
            client: {
                files: 'client/app/**/**.ts',
                tsConfig: 'client/tsconfig.json'
            }
        }
    };

// Server Tasks
gulp.task('server-tsc', () => {

    var project = ts.createProject(info.ts.server.config),
        res = project.src().pipe(ts(project));

    return merge([
        res.dts.pipe(gulp.dest('server')),
        res.js.pipe(gulp.dest('server'))
    ]);
        
});

gulp.task('watch', () => {
    var server = gulp.watch(info.ts.server.config, ['server-tsc']),
        onChanged = (event) => console.log('File ' + event.path + ' was ' + event.type + '. Running tasks...');

    server.on('change', onChanged);
});