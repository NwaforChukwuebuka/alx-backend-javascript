const getListStudentIds = (studentArr) => {
  if (!Array.isArray(studentArr)) {
    return [];
  }
  return studentArr.map((student) => student.id);
};

export default getListStudentIds;
