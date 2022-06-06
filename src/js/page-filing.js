import { formattedUsers } from './data/users-data'
import { pupilsColumns, teacherColumns } from './data/user-statistics-table-data'
import createFilteringForm from './forms/filter-form'
import filterParams from './data/filters'
import generateUserCard from './user/generate-user-card'
import createStatisticsTable from './user/statistics-table'
import { filterUsersByFieldValue, filterUsersByParams, sortUsersByField } from './user/filtering-sorting'
import { addParamsForFiltering } from './forms/forms-handling'
import overwriteUsersList from './user/data-overwriting'

// fill top users list
export function fillTopUsersList() {
  const topUsersList = document.querySelector('#top-teachers-list')
  formattedUsers.forEach(user => topUsersList.appendChild(generateUserCard({
    user,
  })))
}

// add filtering form
export function addFilterForm() {
  const topUsersList = document.querySelector('#top-teachers-list')
  const filteringForm = createFilteringForm(filterParams)
  topUsersList.before(filteringForm)

  function addFilteringFormListeners() {
    const searchedParams = []

    filteringForm.addEventListener('change', ({ target }) => {
      if (target.dataset.id === 'filtering') {
        addParamsForFiltering({ params: searchedParams, currentElement: target })
        const filteredUsers = filterUsersByParams(formattedUsers, searchedParams)
        overwriteUsersList(filteredUsers, topUsersList)
      }
    })
  }

  addFilteringFormListeners()
}

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

// fill tables
export function fillTeacherStatisticsTable() {
  const table = createStatisticsTable({
    users: formattedUsers,
    columns: teacherColumns,
    handlingFunc: sortUsersByField,
  })
  document.querySelector('#table-teachers-wrapper').appendChild(table)
}

export function fillPupilsStatisticsTable() {
  const table = createStatisticsTable({
    users: formattedUsers,
    columns: pupilsColumns,
    handlingFunc: sortUsersByField,
  })
  document.querySelector('#table-pupils-wrapper').appendChild(table)
}
