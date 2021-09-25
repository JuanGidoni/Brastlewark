const dataSearch = async (state, data, value) => {
 try {
  if (state === 'name') {
   return await data.filter(data => data.name.includes(value) || data.name === value);
  }
  if (state === 'hairColor') {
   return await data.filter(data => data.hair_color.includes(value) || data.hair_color === value);
  }
 } catch (error) {
  return error;
 }
}

module.exports = dataSearch;