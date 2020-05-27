import React  from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';
import Message from './Message/Message';

const Messages = ({messages, name}) => {
    return(
        <ScrollToBottom className="messages">
                {
                    messages.map((element, index)=> (
                        <div key={index}>
                            <Message message={element} name={name}></Message>
                        </div>
                    ))
                }
        </ScrollToBottom>
    )

}

export default Messages;
