import Score from "./Score"

function Student(props) {
  const scoreList = props.student.scores.map(score => {
    return <Score score={score}/>
  })

  return (
    <>
      <h3>{props.student.name}</h3>
      <h3>{props.student.bio}</h3>
      <h4>{scoreList}</h4>
    </>
  )
}

export default Student