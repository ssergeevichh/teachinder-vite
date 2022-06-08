import { filterUsersByFieldValue } from '@/js/user/filtering-sorting'

function formatValue(value) {
  const separatedValue = value.split(',').map(word => word.trim())
  return separatedValue.map(value => (Number(value) ? +value : value))
}

export const addSearchFormListeners = (list) => {
  const searchForm = document.querySelector('.search-block')

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchInputValue = document.querySelector('.search-block__input').value
    const formattedValue = formatValue(searchInputValue)
    const filteredUsers = filterUsersByFieldValue(list.users, ...formattedValue)
    list.setUserList(filteredUsers)
  })
}
