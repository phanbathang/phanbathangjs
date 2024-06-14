import mongoose from 'mongoose';

const productShema = new mongoose.Schema(
    { 
        title: {
            type: String,
            require: true,
            minLength: 3,
        }, 
        img: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true,
            minLength: 3,
        }, 
        publisher: {
            type: String,
            require: true,
            minLength: 3,
        }, 
        publicationYear: {
            type: Number,
            require: true,
        }, 
        genre: {
            type: String,
            require: true,
            minLength: 3,

        },
    }, 
    {
        timestamps: true, 
        versionKey: false,
    }
);

//tạo ra 1 model tên là product
export default mongoose.model('Product', productShema);
