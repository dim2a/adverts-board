import is from 'is_js'

export const validateControl = (value, validation) => {
    if(!validation) {
      return true
    }

    let isValid = true    
    
    if (validation.required) {
      isValid = value.trim() !=='' && isValid          
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.phone) {
      const isPhone = /^\+375 29 2[0-9]{2} [0-9]{2} [0-9]{2}$/.test(value)
      isValid = isPhone && isValid
    }

    if (validation.minLength || validation.maxLength) {
      isValid = value.length >= validation.minLength && value.length <= validation.maxLength && isValid          
    }
    return isValid
  }

//   export const onChangeHandler = (event, controlName) => {
        
//     const formControls = {...this.state.formControls}
//     const control = {...formControls[controlName]}

//     control.value = event.target.value
//     control.touched = true
//     control.valid = validateControl(control.value, control.validation)

//     formControls[controlName] = control

//     let isFormValid = true
    
//     Object.keys(formControls).forEach(name => {
//       isFormValid = formControls[name].valid && isFormValid
//     })
//     this.setState({
//       formControls, isFormValid
//     })
//   }