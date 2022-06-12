import { createMessage } from '@/js/validation/helpers/helper';

export function addFormError(form, error) {
  const invalidField = form.elements[error.fieldName]
  invalidField.classList.add('invalid-field')
  invalidField.after(createMessage('invalid-field-message', error.message))
}

export function removeFormErrors(form) {
  const errorMessages = form.querySelectorAll('.invalid-field-message')
  const invalidFields = form.querySelectorAll('.invalid-field')
  invalidFields.forEach(invalidField => invalidField.classList.remove('invalid-field'))
  errorMessages.forEach(message => message.remove())
}
