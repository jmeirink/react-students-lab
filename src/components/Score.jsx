function Score(props) {

  return (
    <div>
      <h3>Score: {props.score.score}</h3>
      <h3>Date: {props.score.date}</h3>
    </div>
  )
}

export default Score