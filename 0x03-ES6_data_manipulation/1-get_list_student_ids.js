export default getListStudentIds(item) {
  if (!Array.isArray(item)) {
    return [];
  }
  return item.map((obj) => obj.id);
}
