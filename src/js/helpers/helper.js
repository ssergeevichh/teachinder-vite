export function createElement(tag, props) {
  const element = document.createElement(tag)
  Object.keys(props).forEach((key) => {
    if (key.startsWith('data-')) {
      element.setAttribute(key, props[key])
    }
    else {
      element[key] = props[key]
    }
  })
  return element
}

export function formatUserData(user) {
  function getCourse() {
    const courses = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
      'Law', 'Art', 'Medicine', 'Statistics']

    return courses[getRandomInt(0, courses.length - 1)]
  }
  return {
    id: `${user.id.name}${user.id.value}`,
    favorite: false,
    course: getCourse(),
    bg_color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    gender: user.gender,
    note: '',
    title: user.name.title,
    full_name: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    state: user.location.state,
    country: user.location.country,
    postcode: user.location.postcode,
    coordinates: user.location.coordinates,
    timezone: user.location.timezone,
    email: user.email,
    b_date: user.dob.date,
    age: user.dob.age,
    phone: user.phone,
    picture_large: user.picture.large,
    picture_thumbnail: user.picture.thumbnail,
  }
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
