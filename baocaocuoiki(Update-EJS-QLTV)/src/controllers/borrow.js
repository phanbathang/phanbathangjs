import { any } from "webidl-conversions";
import Borrow from "../models/borrow.js";
import { borrowValid } from "../validation/borrow.js";

export const getAll = async (req, res) => {
    try {
        const borrows = await Borrow.find();
        if(borrows.length === 0){
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm", 
            });
        }
        return res.status(200).json({
            message: "Lấy sản phẩm thành công",
            datas: borrows,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const getDetail = async (req, res) => {
    try {
        const borrow = await Borrow.findById(req.params.id);
        if(!borrow){
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.status(200).json({
            message: "Lấy sản phẩm thành công", 
            datas: borrow,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const create = async (req, res) => {
    try {
        // Kiểm tra    tính hợp lệ của dữ liệu đầu vào của Borrow
        const { error: borrowError } = borrowValid.validate(req.body);
        if (borrowError) {
            return res.status(400).json({ error: "bad Request", message: borrowError.details[0].message });
        }

        // Kiểm tra xem dữ liệu của product_id đã được gửi từ client không
        const { user_id, product_id, title, borrow_date, return_date, status } = req.body;
        if (!user_id || !product_id || !title || !borrow_date || !return_date || !status) {
            return res.status(400).json({ error: "Bad Request", message: "Missing required fields" });
        }

        // Tạo một bản ghi mới trong bảng Borrow với product_id đã được chuyển đổi
        const borrow = await Borrow.create({ user_id, product_id, title, borrow_date, return_date, status });

        // Trả về thông báo thành công và thông tin của bản ghi mới tạo
        return res.status(201).json({ message: "Mượn sách thành công", data: borrow });
    } catch (error) {
        // Xử lý ngoại lệ và trả về thông báo lỗi
        console.error("Lỗi khi mượn sách:", error);
        return res.status(500).json({ error: "Internal Server Error", message: "Đã xảy ra lỗi khi tạo mượn sách" });
    }
};


export const update = async (req, res) => {
    try {
        // Kiểm tra    tính hợp lệ của dữ liệu đầu vào của Borrow
        const { error: borrowError } = borrowValid.validate(req.body);
        if (borrowError) {
            return res.status(400).json({ error: "bad Request", message: borrowError.details[0].message });
        }

        // Kiểm tra xem dữ liệu của product_id đã được gửi từ client không
        const { user_id, product_id, title, borrow_date, return_date, status } = req.body;
        if (!user_id || !product_id || !title || !borrow_date || !return_date || !status) {
            return res.status(400).json({ error: "Bad Request", message: "Missing required fields" });
        }

        // Tạo một bản ghi mới trong bảng Borrow với product_id đã được chuyển đổi
        const borrow = await Borrow.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        // Trả về thông báo thành công và thông tin của bản ghi mới tạo
        return res.status(201).json({ message: "Update thành công", data: borrow });
    } catch (error) {
        // Xử lý ngoại lệ và trả về thông báo lỗi
        console.error("Lỗi khi mượn sách:", error);
        return res.status(500).json({ error: "Internal Server Error", message: "Đã xảy ra lỗi khi tạo mượn sách" });
    }
};


export const remove = async (req, res) => {
    try {
        const data = await Borrow.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(404).json({
                message: "Xóa sản phẩm không thành công",
            });
        }
        return res.status(200).json({
            message: "Xóa sản phẩm thành công",
            datas: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
