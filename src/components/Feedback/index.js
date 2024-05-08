import './index.css'

const Feedback = props => {
  const {emojiList, responseToFeedback} = props
  const {name, imageUrl, id} = emojiList
  const passResponse = () => {
    responseToFeedback(id)
  }
  return (
    <li className="emojisListContainer">
      <button type="button" className="button" onClick={passResponse}>
        <img src={imageUrl} alt={name} className="emoji" />
      </button>
      <p className="reactionName">{name}</p>
    </li>
  )
}

export default Feedback
