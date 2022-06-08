import EventBus from 'js-event-bus'
export const eventBus = new EventBus()

export const favorites = []
function addToFavorites(userData) {
  if (userData.favorite) {
    favorites.push(userData.id)
  }
  else {
    favorites.splice(favorites.indexOf(userData.id), 1)
  }
  console.log(favorites)
}

eventBus.on('favorite-change', addToFavorites)