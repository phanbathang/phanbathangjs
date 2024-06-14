import express from 'express';
import Product from '../models/product.js';
import { productValid } from '../validation/product.js';

// Show tất cả các sản phẩm
export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('admin/book', { books: products });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add sản phẩm mới
export const addBook = (req, res) => {
    res.render('admin/addBook');
};

export const create = async (req, res) => {
    try {
        const { error } = productValid.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { title, img, author, publisher, publicationYear, genre } = req.body;
        const product = await Product.create({
            title,
            img,
            author,
            publisher,
            publicationYear,
            genre
        });

        if (!product) {
            return res.status(404).json({ message: "Tạo sản phẩm không thành công" });
        }

        res.redirect('/api/product');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update sản phẩm
export const editBook = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        }
        res.render('admin/editBook', { product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { error } = productValid.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Cập nhật sản phẩm không thành công" });
        }
        res.redirect('/api/product');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete sản phẩm
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(400).json({ message: "Xóa sản phẩm không thành công" });
        }
        res.redirect('/api/product');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

