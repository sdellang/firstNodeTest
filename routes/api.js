/**
 * Created with IntelliJ IDEA.
 * User: sam
 * Date: 01/03/14
 * Time: 00:08
 * apis
 */
var persistence = require('./persistence.js')
var data = {
    "posts": [
        {
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "title": "Sed egestas",
            "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
        }
    ]
};

exports.readData = function(req, res) {
    id = req.params.id;
    post;
    if(id>=0 && id < data.posts.length) {
        res.json({
            data: data.posts[id]
        });
    }
}

exports.addPost = function(req, res) {

    var title = req.body.title;
    var post = {
        "title": req.body.title,
        "story": req.body.story

    };
    var result = persistence.addNewPost(post);
    res.json({
        message: result
    });
}