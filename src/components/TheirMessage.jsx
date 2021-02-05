const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser =
        !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className='message-row'>
            {isFirstMessageByUser && (
                <div>
                    <div
                        className='message-avatar'
                        style={{
                            backgroundImage: message.sender.avatar
                                ? message.sender &&
                                  `url(${message.sender.avatar})`
                                : `url(https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg)`,
                        }}
                    />
                    <span>{message.sender.username}</span>
                </div>
            )}
            {message.attachments && message.attachments.length > 0 ? (
                <img
                    src={message.attachments[0].file}
                    alt='message-attachment'
                    className='message-image'
                    style={{
                        marginLeft: isFirstMessageByUser ? '4px' : '48px',
                    }}
                />
            ) : (
                <div
                    className='message'
                    style={{
                        float: 'left',
                        backgroundColor: '#CABCDC',
                        marginLeft: isFirstMessageByUser ? '4px' : '48px',
                    }}
                >
                    {message.text}
                </div>
            )}
        </div>
    );
};

export default TheirMessage;
