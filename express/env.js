import {z} from 'zod';
const ageSchema = z.number().min(18).max(100).int();