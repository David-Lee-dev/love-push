import ChatProfileEmoji from '../Atoms/ChatProfileEmoji';
import styled from 'styled-components';
import {
  LeftMessageCount,
  RecentMessage,
  RandomNickname,
  Timeline,
} from '../Atoms/Text';
import { useNavigate } from 'react-router-dom';
import { getChatLog } from '../../api/chatAPI';
import { useEffect, useState } from 'react';
import { readEmojiUserAPI } from '../../api/emojiAPI';

type message = {
  type: string;
  roomId: number;
  sender: number;
  message: string;
  sendTime: string;
};

type ChatBoxProps = {
  chatroomSeq: number;
  partner: number;
  activate: boolean;
  clickEvent: (seq: number, emoji?: string) => void;
  lastChat: message | undefined;
  messageCount: number;
};

const ChatBox: React.FC<ChatBoxProps> = ({
  chatroomSeq,
  partner,
  activate,
  clickEvent,
  lastChat,
  messageCount,
}) => {
  const [emoji, setEmoji] = useState<string>()
  useEffect(() => {
    readEmojiUserAPI({ userId: partner })
      .then((res) => {
        setEmoji(res)
      })
  }, [])
  return (
    <div>
      <ChatContainer onClick={() => clickEvent(chatroomSeq, emoji)}>
        <ChatProfileEmojiBox><img src={emoji} alt="" /></ChatProfileEmojiBox>
        <ChatNameMessageBox>
          <RandomNickname>익명의 시라소니</RandomNickname>
          <RecentMessage>
            {lastChat ? lastChat.message : '채팅방이 생성됐어요!'}
          </RecentMessage>
        </ChatNameMessageBox>
        <ChatInfoBox>
          <Timeline>
            {lastChat
              ? lastChat.sendTime.split(' ').slice(1, 3).join(' ')
              : '채팅을 보내보세요!'}
          </Timeline>
          {messageCount > 0 && (
            <LeftMessageCount>{messageCount}</LeftMessageCount>
          )}
        </ChatInfoBox>
      </ChatContainer>
    </div>
  );
};

const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #eef8ff;
  justify-content: space-around;
`;

const ChatProfileEmojiBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ChatNameMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ChatInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ChatBox;
