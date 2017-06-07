export default (definition) =>
  (key, setting = (localStorage.getItem('locale') || 'en')) =>
    definition[setting][key];
