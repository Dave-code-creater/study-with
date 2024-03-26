import { ChatItem } from 'react-chat-elements'

function Chats() {
    return (
        <ChatItem
            avatar={'https://facebook.github.io/react/img/logo.svg'}
            alt={'Reactjs'}
            title={'Facebook'}
            subtitle={'What are you doing?'}
            date={new Date()}
            unread={0}
        />
    );
}

export default Chats;