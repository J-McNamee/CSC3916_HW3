//connecting mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}
mongoose.set('useCreateIndex', true);
//get the schemas
var MovieSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    actorsName: [
        {actorName : {type: String, required: true}, characterName: {type :String, required: true}},
        {actorName : {type: String, required: true}, characterName: {type :String, required: true}},
        {actorName : {type: String, required: true}, characterName: {type :String, required: true}}
    ]
});
//exporting the files
module.exports = mongoose.model('Movie', MovieSchema);