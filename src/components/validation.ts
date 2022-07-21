import { object, string, number, date, InferType } from 'yup';

let formSchema = object({
    developerEmail: string().email().required(),
    name: string().required(),
    description: string().required(),
    avatar: string().url().required(),
    category: string().required(),
    price: number().required(),
});


export default formSchema;