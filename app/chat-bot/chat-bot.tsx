import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { toast } from 'sonner-native';
import color from '@/constants/color';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function MedicalChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your medical information assistant. I can help you with first aid information and general medical queries. Please note that I\'m not a replacement for professional medical care. In case of emergency, call your local emergency services immediately.',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = async () => {
    if (!inputText.trim()) return;
    
    const userMessage = inputText.trim();
    setInputText('');
    
    // Add user message
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);

    setIsLoading(true);

    try {
      const systemPrompt = "You are a helpful medical information assistant. Provide accurate, general medical information and first aid guidance. Always include a disclaimer when appropriate. Keep responses clear and concise. For emergencies, always advise seeking immediate professional medical care.";
      
      const response = await fetch('https://api.a0.dev/ai/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...newMessages,
          ],
        }),
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.completion 
      }]);
    } catch (error) {
      toast.error('Failed to get response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="medical" size={24} color={color.seaweed20LTint} />
        <Text style={styles.headerTitle}>EmergiMed Assistant</Text>
      </View>
      
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.role === 'user' ? styles.userMessage : styles.assistantMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.content}</Text>
          </View>
        ))}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="#E53935" />
          </View>
        )}
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type your medical question..."
            multiline
            maxLength={500}
            onSubmitEditing={handleSend}
          />
          <TouchableOpacity
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!inputText.trim() || isLoading}
          >
            <Ionicons
              name="send"
              size={24}
              color={inputText.trim() ? '#E53935' : '#999'}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.baseWhite10Tint,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: color.baseWhite,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  userMessage: {
    backgroundColor: '#E53935',
    alignSelf: 'flex-end',
  },
  assistantMessage: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 12,
    padding: 8,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  loadingContainer: {
    padding: 16,
    alignItems: 'center',
  },
});