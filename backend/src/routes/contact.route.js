import express from 'express';
import { createContact, getAllContacts } from '../controllers/contact.controller.js';

const router = express.Router();

// POST /api/contact - Create new contact form submission
router.post('/', createContact);

// GET /api/contact - Get all contact submissions (for admin use)
router.get('/', getAllContacts);

export default router;
