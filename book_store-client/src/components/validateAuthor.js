const validateAuthor = values => {
  const errors = {};

  if (!values.name) {
    errors.name = ' is Required';
  } else if (values.name.length < 2) {
    errors.name = ' is too short (minimum is 2 characters)'
  } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
		errors.name = ' is Invalid, should be only letters';
  }

  if (!values.username) {
    errors.username = ' is Required';
  } else if (values.username.length < 2) {
    errors.username = ' is too short (minimum is 2 characters)'
  }

	if (!values.description) {
		errors.description = ' is Required';
	} else if (values.description.length < 5) {
		errors.description = ' is too short (minimum is 5 characters)';
	}

  console.log("errors", errors);
  return errors;
}

export default validateAuthor ;