import EventBus from 'js-event-bus'
import { createElement } from '@/js/helpers/helper'

export class Table {
  constructor(users, columns, container, func) {
    this.users = users
    this.columns = columns
    this.container = container
    this.hooks = new EventBus()
    this.func = func

    this.container.appendChild(this.init())
  }

  init() {
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
      this.hooks.emit('sort-table', null, target)
    })
    const tableHeadRow = document.createElement('tr')

    table.appendChild(tableHead)
    table.appendChild(tableBody)
    tableHead.appendChild(tableHeadRow)

    this.columns.forEach((column) => {
      const tableHeadCell = createElement('td', {
        'textContent': column.title,
        'data-name': column.name,
      })
      const directionImg = createElement('img', {
        srcset: column.directionImgPath,
      })
      tableHeadCell.appendChild(directionImg)
      tableHeadRow.appendChild(tableHeadCell)
    })
    this.users.forEach(user => tableBody.appendChild(this.createTableRow(user, this.columns)))

    return table
  }

  createTableRow(user) {
    const tableItem = document.createElement('tr')
    this.columns.forEach((column) => {
      const tableRowItem = createElement('td', {
        textContent: user[column.name],
      })
      tableItem.appendChild(tableRowItem)
    })

    return tableItem
  }

  sort(currentColumn) {
    const usersToSort = this.users.slice()
    const tableBody = this.container.querySelector('.statistics-table__body')
    tableBody.innerHTML = ''
    this.func(usersToSort, currentColumn)
    usersToSort.forEach(user => tableBody.appendChild(this.createTableRow(user)))
  }
}
