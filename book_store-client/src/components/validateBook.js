const validateBook = values => {
  const errors = {};
  
  if (!values.title) {
    errors.title = ' is Required';
  } else if (values.title.length < 2) {
    errors.title = ' is too short (minimum is 2 characters)'
  }


	if (!values.description) {
		errors.description = ' is Required';
	} else if (values.description.length < 5) {
		errors.description = ' is too short (minimum is 5 characters)';
	}
  return errors;
}

export default validateBook;