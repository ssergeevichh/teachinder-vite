const defaultProps = {
  clickOutside: true,
  fullScreen: false,
}

export default function openModal(element, options = defaultProps) {
  const modalLayer = document.createElement('div')
  modalLayer.className = 'modal-overlay'
  setTimeout(() => {
    modalLayer.style.visibility = 'visible'
    modalLayer.style.opacity = 1
  }, 100)

  function createCloseEl() {
    const closeBtn = document.createElement('div')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')

    closeBtn.className = 'close-btn'

    span1.classList.add('close__line')
    span2.classList.add('close__line')

    closeBtn.append(span1)
    closeBtn.append(span2)

    return closeBtn
  }
  const headerBlock = element.querySelector('.modal-header')
  const closeBtn = createCloseEl()

  document.body.prepend(modalLayer)
  modalLayer.append(element)

  element.classList.add('modal-block')
  headerBlock.append(closeBtn)

  if (options.fullScreen) {
    element.classList.add('full-screen')
  }

  function closeModal() {
    setTimeout(() => {
      modalLayer.remove()
      closeBtn.remove()
    }, 800)

    modalLayer.style.visibility = 'hidden'
    modalLayer.style.opacity = 0
  }

  document.addEventListener('click', ({ target }) => {
    if ((!options.clickOutside && target) === closeBtn || target.className === 'close__line') {
      closeModal()
    }
    else if ((options.clickOutside && target.classList.contains('modal-overlay')) || target === closeBtn || target === closeBtn.firstChild) {
      closeModal()
    }
  })
}
