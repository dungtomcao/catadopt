import mongoose from 'mongoose';
const { Schema } = mongoose;
import { connectionString } from '../credentials.js';

mongoose.connect(connectionString, {
    dbName: 'sccprojects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
});

const kittySchema = new Schema({
  name: String,
  age: String,
  breed: String,
  vaccination: String,
  location: String
});

export const Kitties = mongoose.model('Kitties', kittySchema, 'catadopt');