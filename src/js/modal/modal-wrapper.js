import { createElement } from '@/js/helpers/helper'

export function createModalWrapper({ headerTitleText, modalClassName }) {
  const modal = createElement('div', {
    className: modalClassName,
  })
  const modalHeader = createElement('div', {
    className: 'modal-header',
  })

  const modalHeaderTitle = createElement('div', {
    className: 'modal-header__title',
    textContent: headerTitleText,
  })

  modal.appendChild(modalHeader)
  modalHeader.appendChild(modalHeaderTitle)

  return modal
}
