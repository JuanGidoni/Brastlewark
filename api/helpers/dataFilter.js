const dataFilter = async (filter, data, state) => {
 try {
  if (state === 'a') {
   if (filter === 'age') {
    return await data.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));
   }
   if (filter === 'height') {
    return await data.sort((a, b) => parseFloat(a.height) - parseFloat(b.height));
   }
   if (filter === 'weight') {
    return await data.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
   }
  }
  if (state === 'd') {
   if (filter === 'age') {
    return await data.sort((a, b) => parseFloat(b.age) - parseFloat(a.age));
   }
   if (filter === 'height') {
    return await data.sort((a, b) => parseFloat(b.height) - parseFloat(a.height));
   }
   if (filter === 'weight') {
    return await data.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
   }
  }
 } catch (error) {
  return error;
 }
}

module.exports = dataFilter;