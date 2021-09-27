const dataUnique = async (id, data) => {
 try {
  if (id) {
   return await data.filter(element => parseInt(id) === element.id);
  }
 } catch (error) {
  return error;
 };
};

module.exports = dataUnique;