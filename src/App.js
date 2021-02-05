import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import MessageForm from './components/MessageForm';
import MyMessage from './components/MyMessage';
import TheirMessage from './components/TheirMessage';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
            height='100vh'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            projectID='fbf9f654-9609-4a71-b92c-08bd9bb20075'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
