import { eventBus, favorites } from './favorites'

export const initQuantityList = () => {
  const el = document.querySelector('.quantity-list')
  el.innerHTML = favorites.length

  eventBus.on('favorite-change', () => {
    el.innerHTML = favorites.length
  })
}
