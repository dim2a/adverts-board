import React, { Component } from 'react'
import classes from './Registration.css'
import Input from '../../components/UI/Input/Input'
import { connect } from 'react-redux'
import {registration,
  getUsers
} from '../../redux/actions/adverts'

import {validateControl} from '../../helpers/formHandler'

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
                    minLength: 2,
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
                errorMessage: 'Минимум 6 символов',
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

    onChangeHandler = (event, controlName) => {
        
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
    
        control.value = event.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)
    
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
    
     btnHandler = (event) => {
      event.preventDefault()
      const {userName, firstName, lastName, phone, email, password} = this.state.formControls
      const userData = {
        userName: userName.value,
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value,
        password: password.value
      }
      this.props.registration(userData)
    }

    componentDidMount() {
      this.props.getUsers()
    }

    render() {
    return (   
      (this.props.regStatus === 200)   
        ?<div>
          <h1>Регистрация успешно завершена</h1>
          <h4 className={classes.instruction}>Для продолжения работы войдите в систему</h4>
        </div>         
        : <div className={classes.Registration}>
          <h1>Регистрация нового пользователя</h1>
          <form onSubmit={this.formHandler}>
              {this.formRender()}
              <button onClick={this.btnHandler} disabled={!this.state.isFormValid}>Регистрация</button>
          </form>          
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  regStatus: state.auth.regStatus
})

const mapDispatchToProps = {
  registration,
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
