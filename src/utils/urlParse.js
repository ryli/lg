/*global someFunction document:true*/

// via: https://gist.github.com/sofish/505e3c63f08dee01e543

function urlParse(url) {
  const a = document.createElement('a')
  a.href = url

  const search = function (search) {
    if (!search) return {}

    const ret = {}
    const searchList = search.slice(1).split('&')
    for (let i = 0, arr; i < search.length; i++) {
      arr = searchList[i].split('=')
      const key = arr[0]
      const value = arr[1]
      if (/\[\]$/.test(key)) {
        ret[key] = ret[key] || []
        ret[key].push(value)
      } else {
        ret[key] = value
      }
    }
    return ret
  }

  return {
    protocol: a.protocol,
    host: a.host,
    hostname: a.hostname,
    pathname: a.pathname,
    search: search(a.search),
    hash: a.hash,
  }
}

export default urlParse
