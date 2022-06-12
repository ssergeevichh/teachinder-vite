export function filterUsersByParams(arr, searchParams) {
  return arr.filter(
    user => searchParams.every(
      (param) => {
        if (param.filterType === 'equal') {
          return user[param.name] === param.value
        }
        if (param.filterType === 'range') {
          let ageRange = param.value.split('-')
          ageRange = [Number(ageRange[0]), Number(ageRange[1])]
          return user[param.name] >= ageRange[0] && user[param.name] <= ageRange[1]
        }
        return false
      },
    ),
  )
}

export function sortUsersByField(users, fieldName) {
  users.sort(
    (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1),
  )
}

export function filterUsersByFieldValue(usersArr, ...values) {
  const keys = ['full_name', 'age']
  return usersArr.filter(obj => values.every(value => keys.some(key => obj[key] === value)))
}
