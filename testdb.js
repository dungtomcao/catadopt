import { Kitties } from './models/cats.js';

Kitties.find({}, (err, result) => {
    // output error if one occurred
    if (err) {
        console.log(err);
    } else {
        // otherwise output the array of documents
        console.log(result);
    }
    return
});