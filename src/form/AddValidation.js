let counter = 0

function validate(values) {
    let errors = {};
    if (!values.text && counter === 0) {
      errors.text = 'Please enter in an Asin' 
      counter += 1
    }
    else if (!values.text && counter === 1){
        errors.text = 'Your mother was a hamster!' 
        counter += 1
    }
    else if (!values.text && counter === 2){
        errors.text = 'Your father smelt of elderberries!' 
        counter += 1
    }
    else if (!values.text && counter === 3){
      errors.text = 'If you could do your job... that would be great.' 
      counter += 1
    }
    else if (!values.text && counter === 4){
      errors.text = 'How much does Amazon pay you?' 
      counter += 1
    }
    else if (!values.text && counter === 5){
      errors.text = 'Get back to work!' 
      counter = 0
    }
    else if (values.text.length < 10) {
      errors.text = 'That is NOT an Asin!!!';
    }
    return errors;
};

export default validate
/* 
For more info on what this is - https://upmostly.com/tutorials/form-validation-using-custom-react-hooks
*/