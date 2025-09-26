import robotIcon from '../assets/robot.png'
import userIcon from '../assets/user.png'
import loadingSpinner from '../assets/loading-spinner.gif'

const ChatMessage = (props) => {

  const {message, sender, isLoading} = props  // destructuring
  return (
  <div className={
    sender === 'user'
      ? 'chat-message-user'
      : 'chat-message-robot'
  }>
    {sender === 'robot' && 
      <img className="chat-message-profile" src={robotIcon} alt='robot' />}
    <div className="chat-message-text">
      {isLoading && sender === 'robot' ? (
        <img className="chat-message-loading" src={loadingSpinner} alt='loading' />
      ) : (
        message
      )}
    </div>
    {sender === 'user' && 
      <img className="chat-message-profile" src={userIcon} alt='user' />}
  </div>
  )

}

export default ChatMessage
