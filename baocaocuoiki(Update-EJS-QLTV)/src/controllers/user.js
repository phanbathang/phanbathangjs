import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

// Trang chủ phía người dùng
export const home = async (req, res) => {
        res.render('user/home');
};

// Show tất cả các sản phẩm phía ngời dùng
export const userBook = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('user/userBook', { books: products });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Tin tức phía ngời dùng
export const news = async (req, res) => {
    res.render('user/news');
};

// Hỗ trợ phía ngời dùng
export const support = async (req, res) => {
    res.render('user/support');
};

export default router;
