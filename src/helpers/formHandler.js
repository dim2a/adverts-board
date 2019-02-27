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

  export function validate(value, validation = null) {
    if (!validation) {
        return true
    }

    let isValid = true

    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }

    return isValid
}

export function validateForm(formControls) {
  let isFormValid = true

  for (let control in formControls) {
      if (formControls.hasOwnProperty(control)) {
          isFormValid = formControls[control].valid && isFormValid
      }
  }

  return isFormValid
}