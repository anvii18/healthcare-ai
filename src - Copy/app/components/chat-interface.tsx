import { useState, useRef, useEffect } from "react";
import { Send, Mic, AlertCircle, Calendar, MapPin, Hospital } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

interface ChatInterfaceProps {
  onNavigate: (screen: string) => void;
}

export function ChatInterface({ onNavigate }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Sehat Bandhu, your AI health companion. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    { text: "Symptoms", icon: AlertCircle, action: () => onNavigate("symptoms") },
    { text: "Vaccination Info", icon: Calendar, action: () => onNavigate("vaccination") },
    { text: "Nearby Health Centers", icon: MapPin, action: () => onNavigate("facilities") },
    { text: "Outbreak Alerts", icon: Hospital, action: () => onNavigate("alerts") },
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("fever") || input.includes("temperature")) {
      return "I understand you're experiencing fever. Common causes include viral infections, flu, or bacterial infections. Please monitor your temperature and consider visiting a healthcare center if it persists for more than 2 days or exceeds 102°F. Would you like to find nearby healthcare facilities?";
    } else if (input.includes("cough") || input.includes("cold")) {
      return "For cough and cold symptoms, stay hydrated, get plenty of rest, and consider steam inhalation. If symptoms persist for more than a week or worsen, please consult a doctor. Would you like information about nearby healthcare centers?";
    } else if (input.includes("vaccine") || input.includes("vaccination")) {
      return "I can help you with vaccination information! Would you like to see the vaccination schedule or set up reminders?";
    } else if (input.includes("hospital") || input.includes("doctor") || input.includes("clinic")) {
      return "I can help you find nearby healthcare facilities. Would you like to see the list of hospitals and PHCs in your area?";
    } else {
      return "I'm here to help with health information, symptom guidance, vaccination schedules, and finding healthcare facilities. How can I assist you today?";
    }
  };

  const handleQuickReply = (action: () => void, text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    
    setTimeout(() => {
      action();
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-cyan-50 to-white pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-4 shadow-md">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Hospital className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg">Sehat Bandhu</h2>
              <p className="text-sm text-cyan-100">AI Health Assistant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-2xl mx-auto w-full">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-primary text-white rounded-br-sm"
                    : "bg-white border border-gray-200 text-gray-900 rounded-bl-sm shadow-sm"
                }`}
              >
                <p className="leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-cyan-100" : "text-gray-400"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Replies */}
      <div className="px-4 py-3 bg-white border-t border-gray-200 max-w-2xl mx-auto w-full">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickReplies.map((reply, index) => {
            const Icon = reply.icon;
            return (
              <button
                key={index}
                onClick={() => handleQuickReply(reply.action, reply.text)}
                className="flex items-center gap-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full whitespace-nowrap border border-cyan-200 transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{reply.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 flex items-center gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="text-primary hover:text-cyan-700 disabled:text-gray-400 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <button className="w-12 h-12 bg-secondary hover:bg-emerald-700 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all">
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
