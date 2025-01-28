import {Streams} from '@interfaces/GlobalInterfaces';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

enum EnumRolesMessages {
  MOD = 'MOD',
  USER = 'USER',
  STREAMER = 'STREAMER',
  VIP = 'VIP',
}

export type TypeMessages = {
  id: number;
  message: string;
  time: string;
  user: {
    name: string;
    avatar: string;
    role: EnumRolesMessages;
  };
};

const MOCK_MESSAGES: TypeMessages[] = [
  {
    id: 1,
    message: '¡Hola a todos!',
    time: '12:00',
    user: {
      name: 'Alice',
      avatar: 'https://example.com/avatar1.jpg',
      role: EnumRolesMessages.STREAMER,
    },
  },
  {
    id: 2,
    message: '¿Cómo están?',
    time: '12:05',
    user: {
      name: 'Bob',
      avatar: 'https://example.com/avatar2.jpg',
      role: EnumRolesMessages.MOD,
    },
  },
  {
    id: 3,
    message: '¡Bienvenidos al stream!',
    time: '12:10',
    user: {
      name: 'Charlie',
      avatar: 'https://example.com/avatar3.jpg',
      role: EnumRolesMessages.USER,
    },
  },
  {
    id: 4,
    message: '¡Gracias por el stream!',
    time: '12:15',
    user: {
      name: 'Diana',
      avatar: 'https://example.com/avatar4.jpg',
      role: EnumRolesMessages.VIP,
    },
  },
];

type StreamScreenParamsList = {
  stream: {
    stream: Streams;
  };
};

type StreamScreenRouteProp = RouteProp<StreamScreenParamsList, 'stream'>;

const useStream = () => {
  const refList = useRef<FlatList<TypeMessages>>(null);
  const {params} = useRoute<StreamScreenRouteProp>();
  const [stream, setStream] = useState<Streams | null>();
  const [messages, setMessages] = useState<TypeMessages[]>(MOCK_MESSAGES);
  const [message, setMessage] = useState<string | undefined>(undefined);
  useEffect(() => {
    setStream(params.stream);
  }, [params.stream]);

  useEffect(() => {
    refList.current?.scrollToEnd();
  }, [messages]);

  const addMessage = (msg?: string) => {
    const copyMessages = [...messages];
    const messageToAdd: TypeMessages = {
      id: messages.length + 1,
      message: msg!,
      time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      user: {
        name: 'Mark',
        avatar: 'https://example.com/avatar1.jpg',
        role: EnumRolesMessages.USER,
      },
    };

    copyMessages.push(messageToAdd);
    setMessages(copyMessages);
  };

  return {
    stream,
    messages,
    addMessage,
    message,
    refList,
    setMessage,
  };
};

export default useStream;
