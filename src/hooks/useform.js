import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        toast.success('Registration Successfull !');
        console.log('Form data:', values);
        setValues('');
        setIsSubmitting(false);
        resetForm();
      } else {
        toast.error('There is something wrong with the form');
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  console.log('values:', values);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };


  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
