export function createElement(tag, props) {
  const element = document.createElement(tag)
  Object.keys(props).forEach((key) => {
    if (key.startsWith('data-')) {
      element.setAttribute(key, props[key])
    }
    else {
      element[key] = props[key]
    }
  })
  return element
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getAge(date) {
  const today = new Date()
  const birthDate = new Date(date)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}