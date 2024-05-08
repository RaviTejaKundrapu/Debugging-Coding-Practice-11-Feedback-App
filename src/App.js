import {Component} from 'react'
import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class FeedbackPage extends Component {
  state = {feedbackStatus: 'pending'}

  responseToFeedback = id => {
    this.setState({feedbackStatus: 'Submitted'})
  }

  render() {
    const {emojis, loveEmojiUrl} = resources
    const {feedbackStatus} = this.state
    return (
      <div className="app-container">
        {feedbackStatus === 'Submitted' ? (
          <div className="thankYouContainer">
            <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
            <h1 className="wish">Thank You!</h1>
            <p className="message">
              We will use your feebback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="descriptionAndEmojisContainer">
            <h1 className="description">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="listContainer">
              {emojis.map(eachEmoji => (
                <Feedback
                  key={eachEmoji.id}
                  emojiList={eachEmoji}
                  responseToFeedback={this.responseToFeedback}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

const App = () => <FeedbackPage />

export default App
