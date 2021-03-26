import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from '../models/bookModel.js';

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose
	.connect(DB, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then((con) => console.log(con.connections));

const port = process.env.PORT || 8000;

const books = JSON.parse(fs.readFileSync('./data/books-data.json', 'utf-8'));

async function importData() {
	Book.create(books)
		.then(() => {
			console.log('Date successfully loaded!');
		})
		.catch((err) => {
			console.log(err);
		});
}

async function deleteData() {
	Book.deleteMany()
		.then(() => {
			console.log('Date successfully deleted!');
		})
		.catch((err) => {});
	process.exit();
}

if (process.argv[2] === '--import') importData();
