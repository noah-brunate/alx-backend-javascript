export default  function getStudentsByLocation(item, city) {
  return item.filter((obj) => obj.location === city);
}
