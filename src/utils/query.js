function Query(href = '') {
  let name
  let value
  let i
  let num = href.indexOf('?')
  const str = href.substr(num + 1)
  const arrtmp = str.split('&')
  for (i = 0; i < arrtmp.length; i++) {
    num = arrtmp[i].indexOf('=')
    if (num > 0) {
      name = arrtmp[i].substring(0, num)
      value = arrtmp[i].substr(num + 1)
      this[name] = value.replace('#', '')
    }
  }
}

export default Query
