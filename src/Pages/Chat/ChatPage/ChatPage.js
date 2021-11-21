import ChatBox from "../ChatBox/ChatBox";
import CreateGroup from "../CreateGroup/CreateGroup";
import './ChatPage.css';

export default function ChatPage() {
    return (
        <section className='ChatPage'>
            <div className='ChatPageCenter'>
                <ChatBox/>
                <CreateGroup/>
            </div>
        </section>
    )
}