import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import React from 'react';

interface Values {
    firstName: string;
    lastName?: string;
    email?: string;
}

const AddProduct: React.FC<{}> = () => {
    const initialValues: Values = { firstName: '' };
    return (
        <div className="container">
            <h1>Formik x TypeScript</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    actions.setSubmitting(false);
                }}
                render={() => (
                    <div className='flex mx-auto'>
                        <Form className='flex flex-col'>
                            <label htmlFor="firstName">First Name</label>
                            <Field id="firstName" name="firstName" placeholder="John" type="text" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field id="lastName" name="lastName" placeholder="Doe" type="text" />

                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="john@acme.com" type="email" />

                            <button type="submit" style={{ display: 'block' }}>
                                Submit
                            </button>
                        </Form>
                    </div>
                )}
            />
        </div>
    )
}

export default AddProduct