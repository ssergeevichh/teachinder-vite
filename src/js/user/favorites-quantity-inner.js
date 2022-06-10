import EventBus from 'js-event-bus'
import { formattedUsers } from '../data/users-data'
export const eventBus = new EventBus()

export function initQuantityOfFavorites() {
  const innerElement = document.querySelector('.favorite-quantity__title')
  const quntityOfFavorites = formattedUsers.filter(user => user.favorite).length
  innerElement.textContent = `quantity of favorite teachers: ${quntityOfFavorites}`
}

const clearBtn = document.querySelector('.favorite-quantity__btn')
clearBtn.addEventListener('click', () => {
  formattedUsers.filter(user => user.favorite).forEach((user) => {
    user.favorite = false
    eventBus.emit('set-user-favorite', null, user)
  })
})

eventBus.on('set-user-favorite', initQuantityOfFavorites)
