import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    first_name: yup.string().required('*Please fill in your first name'),
    last_name: yup.string().required('*Please fill iin your last name'),
    email: yup.string().email().required('*Please enter a valid email'),
    message: yup.string().required('*Kindly pass your message here'),
    //acceptCondition: yup.boolean().oneOf([true], '*Please agree to the above terms')
})