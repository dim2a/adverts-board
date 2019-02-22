import React, { Component } from 'react'
import classes from './Registration.css'
import Input from '../../components/UI/Input/Input'
import is from 'is_js'
import { connect } from 'react-redux'

export class Registration extends Component {
  
    state = {
        isFormValid: false,
        id: '',
        formControls: {
            userName: {
                value: '',
                type: 'text',
                label: 'Введите имя, для пользования на сайте',
                valid: false,
                touched: false,
                errorMessage: 'Недопустимое имя, 4-20 символов',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 20
                  }
            },
            firstName: {
                value: '',
                type: 'text',
                label: 'Введите свое имя',
                valid: false,
                touched: false,
                errorMessage: 'Недопустимое имя, 2-20 символов',
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 20
                  }
            },
            lastName: {
                value: '',
                type: 'text',
                label: 'Введите фамилию',
                valid: false,
                touched: false,
                errorMessage: 'Недопустимое значение, 2-20 символов',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 20
                  }
            },
            phone: {
                value: '',
                type: 'tel',
                label: 'Введите номер телефона в формате +375 29 2xx xx xx',
                errorMessage: 'Введите корректный номер',
                valid: false,
                touched: false,
                validation: {
                  required: true,
                  phone: true
                }
            },
            email: {
                value: '',
                type: 'email',
                label: 'Введите Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                  required: true,
                  email: true
                }
            },            
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                  required: true,
                  minLength: 6,
                  maxLength: 100
                }
            }
        }
    }

    formHandler = event => {
      event.PreventDefault()
    }

    validateControl(value, validation){
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

    onChangeHandler = (event, controlName) => {
        
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
    
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
    
        formControls[controlName] = control
    
        let isFormValid = true
        
        Object.keys(formControls).forEach(name => {
          isFormValid = formControls[name].valid && isFormValid
        })
        
        this.setState({
          formControls, isFormValid
        })
      }

    formRender() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
              <Input 
                key={controlName + index}
                type={control.type}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                label={control.label}
                shouldValidate={!!control.validation}
                errorMessage={control.errorMessage}
                onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
    return (
      <div className={classes.Registration}>
        <h1>Регистрация нового пользователя</h1>
        <form onSubmit={this.formHandler}>
            {this.formRender()}
            <button>Регистрация</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
