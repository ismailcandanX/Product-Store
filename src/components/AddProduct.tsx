import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../redux/hooks';
import { addProductAsync } from '../redux/product/productsSlice';
import formSchema from './validation';

interface Values {
    developerEmail: string;
    name: string;
    description: string;
    avatar: string;
    category: string;
    price: number;
}

const AddProduct: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    let navigate = useNavigate();

    return (
        <div className="container mx-auto max-w-lg gap-x-2">
            <h2 className="mx-6 text-2xl font-extrabold tracking-tight text-gray-900 text-center">Add Product</h2>
            <Formik
                initialValues={{
                    developerEmail: '',
                    name: '',
                    description: '',
                    avatar: '',
                    category: "all",
                    price: 0,
                }}
                validationSchema={formSchema}
                onSubmit={(values, actions) => {
                    dispatch(addProductAsync(values))
                    navigate('/')
                }}

            >
                {({ errors }) => (
                    <div className='flex'>
                        <Form className='flex flex-col mx-auto w-96'>
                            <label htmlFor="name" className='text-gray-900 text-xl leading-tight font-medium mb-2'>Product Name</label>
                            <Field id="name" name="name" placeholder="Product Name" type="text" className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></Field>

                            <label htmlFor="developerEmail" className='text-gray-900 text-xl leading-tight font-medium mb-2'>developerEmail</label>
                            <Field id="developerEmail" name="developerEmail" placeholder="developerEmail" type="email" className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></Field>

                            <label htmlFor="description" className='text-gray-900 text-xl leading-tight font-medium mb-2'>Description</label>
                            <Field id="description" name="description" placeholder="Description" type="text" className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></Field>

                            <label htmlFor="avatar" className='text-gray-900 text-xl leading-tight font-medium mb-2'>Product Image</label>
                            <Field id="avatar" name="avatar" placeholder="Image Url" type="url" className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></Field>

                            <label htmlFor="category" className='text-gray-900 text-xl leading-tight font-medium mb-2'>Category</label>
                            <Field as="select" name="category" className="form-select appearance-none block w-full px-3 py-2 text-base font-normal  text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                <option value="all">Select Category</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Electronic">Electronic</option>
                                <option value="Furnitures">Furnitures</option>
                            </Field>
                            <label htmlFor="price" className='text-gray-900 text-xl leading-tight font-medium mb-2'>Price</label>
                            <Field id="price" name="price" placeholder="Product Price" type="string" className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></Field>
                            <button type="submit" className=" mt-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Submit
                            </button>
                        </Form>
                    </div>
                )}
            </Formik >
        </div >
    )
}

export default AddProduct