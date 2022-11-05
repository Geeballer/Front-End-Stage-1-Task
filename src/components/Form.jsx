import React from 'react'
import {useFormik} from 'formik'
import { basicSchema } from '../schemas'

const Form = () => {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
  }

  const {values, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
      //acceptCondition: false
    },
    validationSchema: basicSchema,
    onSubmit
  })

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="form__col--two">
        <div className="form__field">
          <label htmlFor="first_name">First name</label>
          <input type="text" value={values.first_name} onChange={handleChange} onBlur={handleBlur} id='first_name' placeholder='Enter your first name' className={errors.first_name ? 'input__error' : 'input__valid'}/>
          {errors.first_name && <span className='error__text'>{errors.first_name}</span>}  
        </div>
        <div className="form__field">
          <label htmlFor="last_name">Last name</label>  
          <input type="text" value={values.last_name} onChange={handleChange} onBlur={handleBlur} id='last_name' placeholder='Enter your last name' className={errors.last_name ? 'input__error' : 'input__valid'}/>
          {errors.last_name && <span className='error__text'>{errors.last_name}</span>}
        </div>  
      </div>
      <div className="form__field">
        <label htmlFor="email">Email</label>
        <input type="text" value={values.email} onChange={handleChange} onBlur={handleBlur} id='email' placeholder='yourname@email.com' className={errors.email ? 'input__error' : 'input__valid'}/>
        {errors.email && <span className='error__text'>{errors.email}</span>}
      </div>
      <div className="form__field">
        <label htmlFor="message">Message</label>
        <textarea id="message" value={values.message} onChange={handleChange} onBlur={handleBlur} placeholder="Send me a message and i'll reply you as soon as possible..." className={errors.message ? 'input__error' : 'input__valid'}></textarea>
        {errors.message && <span className='error__text'>{errors.message}</span>}
      </div>  
      <div className="form__check">
        <div className="form__check--item">
          <input type="checkbox" name="acceptCondition" id="checkbox" className={errors.acceptCondition ? 'input__error' : ''}/>
          <label htmlFor="checkbox"> You agree to providing your data to jayBee who may contact you. </label>
        </div>
      </div>
      <button id="btn__submit" disabled={isSubmitting}> Send message </button>
    </form>
  )
}

export default Form