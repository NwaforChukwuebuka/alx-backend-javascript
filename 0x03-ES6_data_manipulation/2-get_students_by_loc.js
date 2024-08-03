const getStudentsByLocation = (studentArr, city) => studentArr.filter((student) => student.location === city);

export default getStudentsByLocation;
