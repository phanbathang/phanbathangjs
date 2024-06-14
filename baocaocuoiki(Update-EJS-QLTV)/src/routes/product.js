import express from 'express';
import { addBook, create, editBook, getAll, remove, update} from '../controllers/product.js';
const router = express.Router()


// // router.get('/index', index);

// // router.get('/books', books);

// // router.get('/news', news);

// // router.get('/support', support);

// // router.get('/login', login);

// // router.get('/register', register);

// // router.get('/admin', admin);

// // router.get('/admin-users', adminusers);

// // router.get('/admin-borrows', adminborrows);

router.get('/', getAll);

router.get('/addBook', addBook); 
  
router.post('/', create); 

router.get('/:id/edit', editBook); 

router.put('/:id', update);

router.delete('/:id', remove);

export default router;