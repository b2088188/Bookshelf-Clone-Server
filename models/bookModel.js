import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'A book must have a title']
	},
	author: {
		type: String,
		required: [true, 'A book must have a author']
	},
	coverImageUrl: {
		type: String,
		required: [true, 'A book must have a coverImageUrl']
	},
	publisher: {
		type: String,
		required: [true, 'A book must have a publisher']
	},
	synopsis: {
		type: String,
		required: [true, 'A book must have a synopsis']
	}
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
