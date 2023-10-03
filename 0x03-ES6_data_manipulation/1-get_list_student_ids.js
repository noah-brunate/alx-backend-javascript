export default getListStudentIds(item) {
  if (Array.isArray(item)) {
    return item.map((obj) => obj.id);
  }
  return [];
}
