import mongoose from 'mongoose';

const borrowSchema = new mongoose.Schema(
    { 
        user_id: {
            type: mongoose.Schema.Types.Mixed, // Sử dụng kiểu dữ liệu Mixed để chứa bất kỳ kiểu dữ liệu nào
            required: true,
            ref: 'User'
        },  
        product_id: {
            type: mongoose.Schema.Types.Mixed, // Sử dụng kiểu dữ liệu Mixed để chứa bất kỳ kiểu dữ liệu nào
            required: true,
            ref: 'Product'
        },  
        title: {
            type: String,
            required: true,
            minLength: 3,
        },
        borrow_date: {
            type: Date,
            required: true,
        },
        return_date: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model('Borrow',borrowSchema);