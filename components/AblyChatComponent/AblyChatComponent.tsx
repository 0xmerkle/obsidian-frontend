import React, { useEffect, useState } from 'react';
import { useChannel } from '../../hooks/AblyReactEffect';
import styles from './AblyChatComponent.module.css';

const AblyChatComponent = () => {
    let inputBox: any = null;
    let messageEnd: any = null;

    const [messageText, setMessageText] = useState('');
    const [receivedMessages, setMessages] = useState<any[]>([]);
    const messageTextIsEmpty = messageText.trim().length === 0;

    const [channel, ably] = useChannel('chat-demo', (message) => {
        // Here we're computing the state that'll be drawn into the message history
        // We do that by slicing the last 199 messages from the receivedMessages buffer

        const history = receivedMessages.slice(-199);
        setMessages([...history, message]);

        // Then finally, we take the message history, and combine it with the new message
        // This means we'll always have up to 199 message + 1 new message, stored using the
        // setMessages react useState hook
    });

    const sendChatMessage = (messageText: string) => {
        //@ts-ignore
        console.log(process.env.NEXT_APP_ABLY_API_KEY);
        channel.publish({ name: 'chat-message', data: messageText });
        setMessageText('');
        inputBox.focus();
    };

    const handleFormSubmission = (event: any) => {
        event.preventDefault();
        sendChatMessage(messageText);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.charCode !== 13 || messageTextIsEmpty) {
            return;
        }
        sendChatMessage(messageText);
        event.preventDefault();
    };

    const messages = receivedMessages.map((message, index) => {
        //@ts-ignore
        const author = message.connectionId === ably.connection.id ? 'me' : 'other';
        return (
            <span key={index} className={styles.message} data-author={author}>
                {message.data}
            </span>
        );
    });

    useEffect(() => {
        messageEnd.scrollIntoView({ behaviour: 'smooth' });
    });

    return (
        <div className="flex h-full w-full flex-col">
            <div className="mb-4 h-96 w-full rounded-md bg-stone-500">
                <div className="flex h-full flex-col items-start">
                    {messages}
                    <div
                        ref={(element) => {
                            messageEnd = element;
                        }}
                    ></div>
                </div>
            </div>
            <form onSubmit={handleFormSubmission} className="flex w-full flex-row space-x-4">
                <input
                    ref={(element) => {
                        inputBox = element;
                    }}
                    value={messageText}
                    placeholder="Type a message..."
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e)}
                    className="w-full rounded-md bg-stone-500 px-2 py-1"
                ></input>
                <button
                    type="submit"
                    className="rounded-md bg-stone-500 px-2 py-1 text-white"
                    disabled={messageTextIsEmpty}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default AblyChatComponent;
