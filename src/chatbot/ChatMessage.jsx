const ChatMessage = (props) => {

  const { message, sender, isLoading } = props; // destructuring

  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'robot' &&
        <img className="chat-message-profile" src="/robot.png" alt="robot" />}

      <div className="chat-message-text">
        {isLoading && sender === 'robot' ? (
          <img className="chat-message-loading" src="/loading-spinner.gif" alt="loading" />
        ) : (
          message
        )}
      </div>

      {sender === 'user' &&
        <img className="chat-message-profile" src="/user.png" alt="user" />}
    </div>
  );
}

export default ChatMessage;
