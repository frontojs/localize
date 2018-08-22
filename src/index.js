export default (definition) => {
  if (typeof localStorage === 'undefined') return false
  return ((key, setting = (localStorage.getItem('locale') || 'en')) =>
    definition[setting][key]
  )
}
