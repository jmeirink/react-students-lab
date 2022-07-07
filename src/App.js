import './App.css'
import { useState } from 'react'
import { studentList } from './data'
import StudentList from './components/StudentList'

function App() {
  const [students, setStudents] = useState(studentList)
  return (
    <>
      <StudentList students={students}/>
    </>
  )
}

export default App
