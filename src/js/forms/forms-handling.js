export default function getFullDataFromForm(form) {
  const formData = new FormData(form)
  const obj = {}
  formData.forEach((value, key) => {
    obj[key] = value
  })
  return obj
}
