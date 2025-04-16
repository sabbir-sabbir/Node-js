import {z, ZodError} from 'zod';

const portSchema = z.coerce.number().min(1).max(3000).default(3000);

export const PORT = portSchema.parse(process.env.PORT);



















// const ageSchema = z.number().min(18).max(100).int();
// const age = 19;

// try {
//     const validAge = ageSchema.parse(age); 
// console.log(validAge); // 18
// } catch (error) {
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message);
        
//     } else {
//         console.log("An unexpected error occurred:", error);
//     }
// }
