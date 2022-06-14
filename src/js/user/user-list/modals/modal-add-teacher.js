import openModal from '@/js/modal/pop-up'
import { Validator } from '@/js/validation/form/validator'
import generateUserCard from '@/js/user/user-data-handling/generate-user-card'
import { addFormError } from '@/js/validation/form'
import { formatNewUserData } from '@/js/user/user-data-handling/format-user-data'
import { favoritesBus } from '@/js/user/favorites-quantity-inner'

const initAddTeacherModal = (successCallback) => {
  const openModalButtons = document.querySelectorAll('.btns-wrapper__btn')
  const modalElement = document.querySelector('.modal-add-teacher')

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      openModal(modalElement)
    })
  })
  
  const addTeacherValidation = new Validator('.add-teacher', {
    rules: [
      {
        name: 'full_name',
        rules: [
          {
            ruleName: 'required',
            message: 'Field is required'
          },
          {
            ruleName: 'minLength',
            value: 2,
            message: 'Field must be at least 2 characters long'
          },
          {
            ruleName: 'capitalized',
            message: 'Field must be capitalized',
          }
        ]
      },
      {
        name: 'course',
        rules: [
          {
            ruleName: 'required',
            message: 'Field is required'
          },
        ]
      },
      {
        name: 'country',
        rules: [
          {
            ruleName: 'required',
            message: 'Field is required'
          },
        ]
      },
      {
        name: 'city',
        rules: [
          {
            ruleName: 'required',
            message: 'Field is required'
          },
          {
            ruleName: 'capitalized',
            message: 'Field must be capitalized',
          },
          {
            ruleName: 'minLength',
            value: 2,
            message: 'Field must be at least 2 characters long'
          },
        ]
      },
      {
        name: 'email',
        rules: [
          {
            ruleName: 'required',
            message: 'Field is required'
          },
          {
            ruleName: 'correctEmail',
            message: 'Email is not correct',
          },
        ]
      },
      {
        name: 'phone',
        rules: [
          {
            ruleName: 'required',
            message: 'Field is required',
          },
          {
            ruleName: 'minLength',
            value: 12,
            message: 'Phone number must not be less than 12 characters',
          },
          {
            ruleName: 'onlyNumbers',
            message: 'Phone number must contain only numbers',
          },
        ],
      },
      {
        name: 'b_date',
        rules: [
          {
            ruleName: 'required',
            message: 'Field is required',
          },
          {
            ruleName: 'correctDate',
            message: 'Date is not correct',
          },
        ],
      },
      {
        name: 'gender',
        rules: [
          {
            ruleName: 'required',
            message: 'Field is required'
          }
        ]
      },
    ],
    onSuccsessCallback: (formData, form) => {
      const formattedUserData = formatNewUserData(formData)
      successCallback(formattedUserData)
    },
    onErrorCallback: (errors, form) => {
      errors.forEach(error => addFormError(form, error))
    }
  })

}



export default initAddTeacherModal