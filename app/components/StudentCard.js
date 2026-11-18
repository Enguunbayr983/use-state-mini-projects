export const StudentCard = ({ student }) => {
  console.log(student);
  return (
    <div className="bg-blue-400 flex justify-center items-center flex-col">
      <h1>{student.firstName}</h1>
      <p>Gender: {student.gender}</p>
      <p>age: {student.age}</p>
      <div>
        <h1>hobbies</h1>
      </div>
    </div>
  );
};
