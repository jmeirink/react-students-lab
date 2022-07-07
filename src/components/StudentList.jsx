import Student from "./Student"

function StudentList({students}) {
  return ( 
    <>
      {students.map(student =>
        <Student student={student}/>
      )}
    </>
  )
}

export default StudentList