/* eslint-disable quote-props */
import { createElement } from '../helpers/helper'

function createTableRow(user, columns) {
  const tableItem = document.createElement('tr')
  columns.forEach((column) => {
    const tableRowItem = createElement('td', {
      textContent: user[column.name],
    })
    tableItem.appendChild(tableRowItem)
  })

  return tableItem
}

export default function createStatisticsTable({ users, columns, handlingFunc, handlingFuncOptions = [] }) {
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
    overwriteSortedUsers(target)
  })
  const tableHeadRow = document.createElement('tr')

  table.appendChild(tableHead)
  table.appendChild(tableBody)
  tableHead.appendChild(tableHeadRow)

  columns.forEach((column) => {
    const tableHeadCell = createElement('td', {
      textContent: column.title,
      'data-name': column.name,
    })
    const directionImg = createElement('img', {
      srcset: column.directionImgPath,
    })
    tableHeadCell.appendChild(directionImg)
    tableHeadRow.appendChild(tableHeadCell)
  })
  users.forEach(user => tableBody.appendChild(createTableRow(user, columns)))

  function overwriteSortedUsers(currentColumn) {
    const usersToSort = users.slice() // to prevent mutating the original array
    tableBody.innerHTML = ''
    handlingFunc(usersToSort, currentColumn, ...handlingFuncOptions)
    usersToSort.forEach(user => tableBody.appendChild(createTableRow(user, columns)))
  }

  return table
}
