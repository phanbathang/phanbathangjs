import fs from 'fs';

export const index = async (req, res) => {
    fs.readFile('src/views/css/index.css', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.header('Content-Type', 'text/css');
        res.send(data);
    });
};

export const books = async (req, res) => {
    fs.readFile('src/views/css/books.css', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.header('Content-Type', 'text/css');
        res.send(data);
    });
};

export const news = async (req, res) => {
    fs.readFile('src/views/css/news.css', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.header('Content-Type', 'text/css');
        res.send(data);
    });
};

export const support = async (req, res) => {
    fs.readFile('src/views/css/support.css', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.header('Content-Type', 'text/css');
        res.send(data);
    });
};

export const login = async (req, res) => {
    fs.readFile('src/views/css/login.css', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.header('Content-Type', 'text/css');
        res.send(data);
    });
};

export const register = async (req, res) => {
    fs.readFile('src/views/css/register.css', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.header('Content-Type', 'text/css');
        res.send(data);
    });
};

export const adminusers = async (req, res) => {
    fs.readFile('src/views/css/admin-users.css', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.header('Content-Type', 'text/css');
        res.send(data);
    });
};

export const admin = async (req, res) => {
    fs.readFile('src/views/css/admin.css', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.header('Content-Type', 'text/css');
        res.send(data);
    });
};

export const adminborrows = async (req, res) => {
    fs.readFile('src/views/css/admin-borrows.css', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.header('Content-Type', 'text/css');
        res.send(data);
    });
};

