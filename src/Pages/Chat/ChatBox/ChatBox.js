import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";
import './ChatBox.css';
import User1 from '../../../Images/User1.jpeg';
import User2 from '../../../Images/User2.png';
import Messages from "../../../Contexts/Messages";
import { useEffect, useContext } from "react";

export default function ChatBox() {

    const DUMMY_DATA = [
        {
            senderID: 'User 1',
            text: 'Hello World 1',
            src: User1
        },
        {
            senderID: 'User 2',
            text: 'Hello World 2',
            src: User2
        },
        {
            senderID: 'User 3',
            text: 'Hello World 3',
            src: User2
        }
    ];
    const {messages, setMessages} = useContext(Messages);
    useEffect(() => {
        setMessages(DUMMY_DATA);
    },[]);

    return (
        <section className='ChatBox'>
            <MessageList messages={DUMMY_DATA}/>
            <SendMessageForm message={DUMMY_DATA}/>
        </section>
    )
}