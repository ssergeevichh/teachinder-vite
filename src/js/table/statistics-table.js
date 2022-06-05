import { createElement } from '../helpers/helper'
import { sortUsersByField } from '../helpers/filtering-sorting'
import columns from '../data/statistics-table-data'

function createTableRow(user) {
  const tableItem = document.createElement('tr')
  columns.forEach((column) => {
    const tableRowItem = createElement('td', {
      textContent: user[column.name],
    })
    tableItem.appendChild(tableRowItem)
  })

  return tableItem
}

function createStatisticsTable(users) {
  function sortUsersByHeadName(fieldName, usersList) {
    const usersToSort = users.slice()
    usersList.innerHTML = ''
    sortUsersByField(usersToSort, fieldName.getAttribute('data-name'))
    usersToSort.forEach(user => usersList.appendChild(createTableRow(user)))
  }

  const table = createElement('table', {
    className: 'statistics-table',
  })

  const tableBody = createElement('tbody', {
    className: 'statistics-table__body',
  })

  const tableHead = createElement('thead', {
    className: 'statistics-table__head',
  })
  tableHead.addEventListener('click', ({ target }) => {
    sortUsersByHeadName(target, tableBody)
  })
  const tableHeadRow = document.createElement('tr')

  table.appendChild(tableHead)
  table.appendChild(tableBody)
  tableHead.appendChild(tableHeadRow)

  columns.forEach((column) => {
    const tableHeadCell = createElement('td', {
      textContent: column.title,
    })
    const directionImg = createElement('img', {
      srcset: column.directionImgPath,
    })
    tableHeadCell.setAttribute('data-name', column.name)
    tableHeadCell.appendChild(directionImg)
    tableHeadRow.appendChild(tableHeadCell)
  })
  users.forEach(user => tableBody.appendChild(createTableRow(user)))

  return table
}

export default function fillStatisticsTable(users) {
  const table = createStatisticsTable(users)
  document.querySelector('.table-wrapper').appendChild(table)
}
