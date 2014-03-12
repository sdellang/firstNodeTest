/**
 * Created with IntelliJ IDEA.
 * User: samuele
 * Date: 3/11/14
 * Time: 11:44 PM
 *
 */

var mongo = require('mongodb')

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('storyDb' , server);


exports.addNewPost = function(data) {
    db.collection('stories', function(err, collection) {
        collection.insert(wine, {safe:true}, function(err, result) {
            if (err) {
                console.log("An Error has occurred");
                return false;
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                return true
                    ;
            }
        });
    });
};
