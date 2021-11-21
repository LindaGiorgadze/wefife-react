import { useContext, useEffect, useRef, useState } from 'react';
import Messages from '../../../Contexts/Messages';
import './ChatBox.css';

export default function MessageList() {

    const {messages, setMessages} = useContext(Messages);
    const [msgArray, setMsgArray] = useState(messages);


    const ChatScroll = useRef(null);

    useEffect(() => {
        if (ChatScroll.current) {
          ChatScroll.current.scrollIntoView(
            {
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest'
            })
        }
      });
    
    useEffect(()=> {
        setMsgArray(messages);
    }, [messages]);

    return (
        <section className='MessageList'>
            <ul className='MessageUl' ref={ChatScroll}>
            {
                msgArray.map((message, index) => {
                    return (
                        <li key={index} className={message.senderID === 'Me' ? 'MessageLine MyMessage' : 'MessageLine'}>
                            <div className='MessageText'>
                                <h4  className='Sender'>{message.senderID}</h4>
                                <p className='Message'>{message.text}</p>
                            </div>
                            <img className='SenderImg' src={message.src} alt='UserImage' />
                        </li>
                    )
                })
            }
            </ul>
        </section>
    )
}