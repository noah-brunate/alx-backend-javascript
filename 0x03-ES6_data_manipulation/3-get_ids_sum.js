export default function getStudentIdsSum(item) {
  return item.reduce(((obj1, obj2) => obj1 + obj2), 0);
}
