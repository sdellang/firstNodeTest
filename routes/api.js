/**
 * Created with IntelliJ IDEA.
 * User: sam
 * Date: 01/03/14
 * Time: 00:08
 * apis
 */
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
    var id = req.params.id;
    var post;
    if(id>=0 && id < data.post.lenght) {
        res.json({
            data: data.posts[id]
        });
    }
}