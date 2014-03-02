/**
 * Created with IntelliJ IDEA.
 * User: sam
 * Date: 01/03/14
 * Time: 00:09
 * Common routes
 */

exports.index = function(req, res){
    res.render('index.jade', {
        locals : {
            title : 'Your Page Title'
            ,description: 'Your Page Description'
            ,author: 'Your Name'
            ,analyticssiteid: 'XXXXXXX'
        }
    });
};

exports.partials = function(req, res) {
    var name = req.params.name;
    res.render('partials/' + name + '.jade');
};

exports.errors = function(err, req, res, next){
    if (err instanceof exports.notFound) {
        res.render('404.jade', { locals: {
            title : '404 - Not Found'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        },status: 404 });
    } else {
        res.render('500.jade', { locals: {
            title : 'The Server Encountered an Error'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,error: err
        },status: 500 });
    }
};

exports.notFound = function (msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}