import Score from "./Score"

const Student = (props) => {
  return (
    <>
      <h2>Name: {props.student.name}</h2>
      <p>Bio: {props.student.bio}</p>
      {props.student.scores.map(score => <Score key={score.score} score={score} />
      )}
    </>
  )
}

export default Student