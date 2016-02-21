require('babel-polyfill');

module.exports = function(config) {
  config.set({

    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-webpack',
      'karma-coverage',
      'karma-mocha',
      'karma-chai'
    ],

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'spec/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/**/*Spec.js': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'], // , 'coverage'


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'], // 'Chrome',


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
      "browser": { "fs": false },
      module: {
        loaders: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          }
        ],
        // postLoaders: [
        //   {
        //     test: /\.(js|jsx)$/,
        //     exclude: /(node_modules|tests)/,
        //     loader: 'istanbul-instrumenter'
        //   }
        // ]
      },
      resolve: {
        modulesDirectories: [
          'src',
          'node_modules'
        ]
      },
      devtool: 'inline-source-map'
    },
    coverageReporter: {
      reporters: [{type: 'text'}, {
        type: 'html',
        dir: 'coverage',
        subdir: 'html'
      }, {
        type: 'lcovonly',
        dir: 'coverage',
        subdir: 'lcov'
      }]
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  })
}
