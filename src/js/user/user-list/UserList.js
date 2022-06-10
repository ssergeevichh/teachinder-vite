import EventBus from 'js-event-bus'

import generateUserCard from '@/js/user/user-handling/generate-user-card'
import { createElement } from '@/js/helpers/helper'

export class UserList {
  constructor(users, container) {
    this.users = users
    this.container = container
    this.hooks = new EventBus()

    this.init()
  }

  init() {
    this.setUserList(this.users)
    this.container.addEventListener('click', ({ target }) => {
      if (target.closest('.teacher-item')) {
        const id = target.closest('.teacher-item').dataset.id

        if (id) {
          const user = this.users.find((user) => {
            return user.id === id
          })
          this.hooks.emit('user-card-clicked', null, user)
        }
      }
    })
  }

  
  setFavorite(user) {
    const favoriteUsersUl = document.querySelector('.favorite-teachers-list')
    const favoriteUsers = document.querySelectorAll('.favorite-teachers-list > .teacher-item')
    const userElem = document.querySelector(`[data-id="${user.id}"]`)

    if (user.favorite) {
      const favoriteMark = createElement('div', {
        className: 'teacher-item__favorite',
      })
      userElem.prepend(favoriteMark)
      favoriteUsersUl.appendChild(generateUserCard({
        user: user,
        job: false,
      }))
    }
    else if (!user.favorite) {
      userElem.firstElementChild.remove()
      Array.from(favoriteUsers).find(userElem => userElem.dataset.id === user.id).remove()
    }
  }

  setUserList(users) {
    this.container.innerHTML = ''
    if (users.length) {
      users.forEach((user) => {
        const card = generateUserCard({
          user,
        })
        this.container.appendChild(card)
      })
    }
    else {
      this.container.appendChild(createElement('div', {
        className: 'empty-list',
        textContent: 'No results...',
      }))
    }
  }
}
