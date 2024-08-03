const getStudentIdsSum = (studentArr) => studentArr.reduce((acc, student) => acc + student.id, 0);

export default getStudentIdsSum;
