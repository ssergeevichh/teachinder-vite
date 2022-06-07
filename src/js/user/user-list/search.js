import { formattedUsers } from './data/users-data'
import { pupilsColumns, teacherColumns } from './data/user-statistics-table-data'
import createFilteringForm from './forms/filter-form'
import filterParams from './data/filters'
import generateUserCard from './user/generate-user-card'
import createStatisticsTable from './user/statistics-table'
import { filterUsersByFieldValue, filterUsersByParams, sortUsersByField } from './user/filtering-sorting'
import { addParamsForFiltering } from './forms/forms-handling'
import overwriteUsersList from './user/data-overwriting'
import { createModalWrapper } from './modal/modal-wrapper'
import { createUserInfo } from './user/user-info'
import { openModal } from './modal/pop-up'

// add event listener to form for searching by value
export function addSearchFormListeners() {
  const searchForm = document.querySelector('.search-block')
  const topUsersList = document.querySelector('#top-teachers-list')

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchInputValue = document.querySelector('.search-block__input').value
    const separatedValue = searchInputValue.split(',').map(word => word.trim())
    const formattedValues = separatedValue.map(value => (Number(value) ? +value : value))
    const filteredUsers = filterUsersByFieldValue(formattedUsers, ...formattedValues)
    overwriteUsersList(filteredUsers, topUsersList)
  })
}
