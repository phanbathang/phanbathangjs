import { addUserValidator, signInValidator, signUpValidator } from "../validation/user.js"
import User from "../models/user.js"
// import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const { SECRET_CODE } = process.env
export const signUp = async (req, res) => {
    try {
        // B1 : Validate dl người dùng
        const { error } = signUpValidator.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map(err => err.message);
            return res.status(400).json({
                message: errors
            });
        }
        // B2 : Xem email đã tồn tại hay chưa
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(400).json({
                message: "Email này đã được đăng ký, bạn có muốn đăng nhập không"
            });
        }
        // B3 : Tạo user trong db với password plaintext
        const user = await User.create({
            ...req.body,
            password: req.body.password // Lưu mật khẩu dưới dạng văn bản thuần
        });

        // B4 : Tạo JWT
        const accessToken = jwt.sign({ _id: user._id }, SECRET_CODE, { expiresIn: "1d" });

        // B5 : Thông báo cho người dùng
        user.password = undefined;
        return res.status(200).json({
            message: "Đăng kí tài khoản thành công",
            user,
            accessToken
        });
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}

export const signIn = async (req, res) => {
    try {
        // B1 : validate data từ phía client
        const { error } = signInValidator.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map(err => err.message);
            return res.status(400).json({
                message: errors
            });
        }
        // B2 : Kiểm tra email đã tồn tại hay chưa
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({
                message: "Email này chưa được đăng ký, bạn có muốn đăng ký không"
            });
        }
        // B3 : Kiểm tra password (plaintext comparison)
        if (req.body.password !== user.password) {
            return res.status(400).json({
                message: "Mật khẩu không đúng"
            });
        }
        // B4 : Tạo JWT
        const accessToken = jwt.sign({ _id: user._id }, SECRET_CODE, { expiresIn: "1d" });
        // B5 : Trả ra thông báo cho người dùng
        user.password = undefined;
        return res.status(200).json({
            message: "Đăng nhập thành công",
            user,
            accessToken,
            role: user.role
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}


export const getAllUsers =  async (req, res) => {
    try {
    const users = await User.find(); 
    if(users.length === 0) {
        return res.status(404).json({
            message: "Khong tim nguoi dung",
        });
    }
    return res.status(200).json({
        message: "Lay danh sach nguoi dung thanh cong",
        datas: users,
    });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
    
};

export const getDetailUsers =  async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({
                message: "Khong tim thay nguoi dung",
            });
        }
        return res.status(200).json({
            message: "Lay nguoi dung thanh cong",
            datas: user,
        });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
};

export const removeUsers = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        if(!data) {
            return res.status(400).json({
                message: "Xoa nguoi dung khong thanh cong",
            });
        }
        return res.status(200).json({
            message: "Xoa nguoi dung thanh cong", 
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}


export const addUser = async (req, res) => {
    try {
        // B1 : Validate dl người dùng
        const { error } = addUserValidator.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map(err => err.message);
            return res.status(400).json({
                message: errors
            });
        }
        // B2 : Xem email đã tồn tại hay chưa
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(400).json({
                message: "Email này đã được đăng nhập, bạn có muốn thay đổi không"
            });
        }
        // B3 : Tạo user trong db với password plaintext
        const user = await User.create({
            ...req.body,
            password: req.body.password // Lưu mật khẩu dưới dạng văn bản thuần
        });
        // B4 : Thông báo cho người dùng
        user.password = undefined;
        return res.status(200).json({
            message: "Thêm người dùng thành công",
            user
        });
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}

////// Đăng nhập cần giải mã
// export const singIn = async(req, res) => {
//     try {
//         //B1 : validate data tu phia client
//         const { error } = signInValidator.validate(req.body, { abortEarly: false})
//         if(error) {
//             const errors = error.details.map(err => err.message)
//             return res.status(400).json({
//                 message: errors
//             })
//         }
//         //B2 : Kiem tra email da ton tai hay chua
//         const user = await User.findOne({ email: req.body.email })
//         if(!user) {
//             return res.status(404).json({
//                 message: "email này chưa được đăng kí, bạn có muốn đăng kí không"
//             })
//         }
//         //B3 : Kiem tra password
//         const isMatch = await bcryptjs.compare(req.body.password, user.password)
//         if(!isMatch) {
//             return res.status(400).json({
//                 message: "Mat khau khong dung"
//             })
//         }
//         //B4 : Tao JWT
//         const accessToken = jwt.sign({ _id: user._id }, SECRET_CODE, { expiresIn: "1d"})
//         //B5 : Tra ra thong bao cho nguoi dung 
//         user.password = undefined
//         return res.status(200).json({
//             message: "Dang nhap thanh cong",
//             user,
//             accessToken
//         })
//     } catch (error) {
//         return res.status(500).json({
//             message: error.message
//         })
//     }
// }

/////// Pass mã hóa
// export const addUser = async (req, res) => {
//     try {
//         //B1 : Validate dl người dùng
//         const { error } = addUserValidator.validate(req.body, { abortEarly: false})
//         if(error) {
//             const errors = error.details.map(err => err.message)
//             return res.status(400).json({
//                 message: errors
//             })
//         }
//         //B2 : Xem email đã tồn tại hay chưa
//         const userExists = await User.findOne({ email: req.body.email})
//         if(userExists) {
//             return res.status(400).json({
//                 message: "Email này đã được đăng nhập, bạn có muốn thay đổi không"
//             })
//         }
//         //B3 : Mã hóa password 
//         const hashedPassword = await bcryptjs.hash(req.body.password, 10)
//         //B4 : Tạo user trong db
//         const user = await User.create({
//             ...req.body,
//             password: hashedPassword
//         })
//         //B5 : Thông báo cho người dùng
//         user.password = undefined
//         return res.status(200).json({
//             message: "Thêm người dùng thành công",
//             user
//         })
//     } catch (error) {
//         return res.status(500).json({
//             name: error.name,
//             message: error.message
//         })
//     }
// }

