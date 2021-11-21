import { useEffect, useRef, useState, useContext } from "react"
import Messages from "../../../Contexts/Messages";
import User1 from '../../../Images/User1.jpeg';

export default function SendMessageForm() {
    // const [sendingMsg, setSendingMsg] = useState(message);
    const sendMsg = useRef(null);
    // console.log(sendingMsg);

    useEffect(()=> {
        sendMsg.current.focus();
    },[]);

    const {messages, setMessages} = useContext(Messages);
    const [value, setValue] = useState();
    
    var msg = [...messages];
    
    function handleSending(e) {
        e.preventDefault();
        
        if(sendMsg.current) {
        
        msg.push({'senderID': 'Me', 'text': value, 'src': User1});
        console.log(msg);
        setMessages(msg);
        };
        setValue('');
    };

    return (
        <form onSubmit={handleSending} className='SendMessageForm'>
            <input 
                className='MessageInput'
                ref={sendMsg} 
                type='text' 
                value={value} 
                placeholder='Type a Message' 
                id='sendMessage' 
                onChange={(e)=>{
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}