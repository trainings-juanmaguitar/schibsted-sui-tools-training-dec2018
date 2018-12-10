require('should');
var path = require('path');
var fs = require('fs');
var autoprefixer = require('autoprefixer');
var runLoaders = require('loader-runner').runLoaders;

var root = process.cwd();
var exportRe = /\s*module\.exports\s*=\s*/;
var semiRe = /\;\s*$/;

describe('css-content-loader', function() {
    it('should get original css content if used alone', function(done) {
        runLoaders({
            resource: path.join(root, 'test/res/test.css'),
            loaders: [path.join(root, 'index.js')],
            context: {},
            readResource: fs.readFile.bind(fs)
        }, function(err, data) {
            if (err) done(err);
            else {
                var source = JSON.stringify(fs.readFileSync(path.join(root, 'test/res/test.css'), {
                    encoding: 'utf8'
                }));
                data.result[0].replace(exportRe, '').replace(semiRe, '').should.equal(source);
                done();
            }
        });
    });

    it('should get compiled css content if used with css loader', function(done) {
        var expected = '".cssloader__container___3CQAM{display:flex}"';
        runLoaders({
            resource: path.join(root, 'test/res/cssloader.css'),
            loaders: [path.join(root, 'index.js'), 'css-loader?minimize&modules&localIdentName=[name]__[local]___[hash:base64:5]'],
            context: {
                exec: function(code, filename) {
                    if (typeof __webpack_modules__ === 'undefined') {
                        var Module = require('module');
                        var m = new Module(filename, module);
                        m.filename = filename;
                        m._compile(code, filename);
                        return m.exports;
                    } else {
                        throw new Error('loaderContext.exec is not supported');
                    }
                }
            },
            readResource: fs.readFile.bind(fs)
        }, function(err, data) {
            if (err) done(err);
            else {
                data.result[0].replace(exportRe, '').replace(semiRe, '').should.equal(expected);
                done();
            }
        });
    });

    it('should get compiled css content if used with css loader and more loaders', function(done) {
        var expected = '".postcssAndSass__container___ob00b{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:scale(1);transform:scale(1)}.postcssAndSass__container___ob00b .postcssAndSass__title___T-T-4{color:#333}.postcssAndSass__container___ob00b .postcssAndSass__body___1Lj3W{background-color:#f0f2f4}"';
        runLoaders({
            resource: path.join(root, 'test/res/postcssAndSass.scss'),
            loaders: [
                path.join(root, 'index.js'),
                'css-loader?minimize&modules&localIdentName=[name]__[local]___[hash:base64:5]',
                'postcss-loader',
                'sass-loader?outputStyle=expanded'
            ],
            context: {
                exec: function(code, filename) {
                    if (typeof __webpack_modules__ === 'undefined') {
                        var Module = require('module');
                        var m = new Module(filename, module);
                        m.filename = filename;
                        m._compile(code, filename);
                        return m.exports;
                    } else {
                        throw new Error('loaderContext.exec is not supported');
                    }
                },
                // sass-loader and postcss-loader need this
                options: {
                    postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
                }
            },
            readResource: fs.readFile.bind(fs)
        }, function(err, data) {
            if (err) done(err);
            else {
                data.result[0].replace(exportRe, '').replace(semiRe, '').should.equal(expected);
                done();
            }
        });
    });
});
