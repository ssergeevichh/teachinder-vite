
export function createErrorData(message, fieldName) {
  return {
    message,
    fieldName,
  }
}

export function isRequired(fieldValue) {
  return fieldValue.length > 0
}

export function isCapitalized(str) {
  const splitStr = str.split(' ')
  if (str !== '')
    return splitStr.every(word => word[0].toUpperCase() === word[0])
  else
    return true
}

export function isEmail(email) {
  if (email !== '')
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  else
    return true
}

export function isOnlyLetters(str) {
  if (str !== '')
    return /^[a-zA-Z]+$/.test(str)
  else
    return true
}

export function isOnlyNumbers(str) {
  if (str !== '')
    return /^[0-9]+$/.test(str)
  else
    return true
}

export function isCorrectMinLength(str, minLength) {
  if (str !== '')
    return str.length >= minLength
  else
    return true
}

export function isCorrectMaxLength(str, maxLength) {
  if (str !== '')
    return str.length <= maxLength
  else
    return true
}

export function isCorrectDate(date) {
  if (date.length === 10) {
    const [year, month, day] = date.split('-')
    return month >= 1 && month <= 12 && day >= 1 && day <= 31
  }
  return false
}

export const rulesHandling = [
  {
    name: 'required',
    func: isRequired,
  },
  {
    name: 'capitalized',
    func: isCapitalized,
  },
  {
    name: 'minLength',
    func: isCorrectMinLength,
  },
  {
    name: 'maxLength',
    func: isCorrectMaxLength,
  },
  {
    name: 'onlyLetters',
    func: isOnlyLetters,
  },
  {
    name: 'onlyNumbers',
    func: isOnlyNumbers,
  },
  {
    name: 'correctEmail',
    func: isEmail,
  },
  {
    name: 'correctDate',
    func: isCorrectDate,
  },
]
