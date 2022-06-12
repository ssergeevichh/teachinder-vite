export function createMessage(className, messageText) {
  const message = document.createElement('div')
  message.className = className
  message.textContent = messageText

  return message
}
