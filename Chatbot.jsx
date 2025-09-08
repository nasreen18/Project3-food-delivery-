
import { useState, useEffect } from "react";

const responses = {
  "what is homey bot": "Homey Bot is your personal assistant for all things Homey Plates.",
  "how to use homey bot": "You can ask Homey Bot questions about Homey Plates, order food, or get help with your account.",
  "how to order food": "To order food, simply browse the menu, select your items, and proceed to checkout.",
  "how to contact support": "You can contact support by visiting the 'Help' section in the app or website.",
  "report supplier": "To report a supplier, go to their profile and click the 'Report' button.",
  "how to become a seller": "To become a seller, register on our platform and complete your profile with the necessary details.",
  "what is homey plates": "Homey Plates is a platform that connects home chefs, sellers, and buyers for homemade food.",
  "how to track my order": "You can track your order in real-time from the 'My Orders' section.",
  "how to cancel my order": "To cancel your order, go to 'My Orders', select the order, and click 'Cancel'.",
  "how to give feedback": "After delivery, you'll be prompted to rate your experience and leave feedback.",
  "how to register as a supplier": "To register as a supplier, visit the 'Become a Supplier' page and follow the steps.",
  "how to make payment": "You can pay using credit/debit cards, UPI, or wallet options during checkout.",
  "is homey plates available in my city": "We are expanding! Please enter your location to check availability.",
  "do you have vegetarian options": "Yes, we offer a wide range of vegetarian and vegan dishes.",
  "how to change my address": "You can update your delivery address in the 'Profile' > 'Address Settings' section.",
  "how to delete my account": "To delete your account, please contact support from the 'Help' section.",
  "do you offer discounts": "Yes! Check out our 'Offers' section for ongoing deals and coupon codes.",
  "how to rate a supplier": "Go to your past order and click 'Rate Supplier' to leave a rating and review.",
  "can i schedule an order": "Yes, you can choose a delivery date/time during checkout.",
  "how to switch roles": "Visit your account settings to switch between buyer, seller, or supplier roles.",
  "how to report a bug": "You can report bugs via the 'Help' > 'Report an Issue' section.",
  "how to view earnings": "Suppliers and sellers can view earnings in the 'Dashboard' under 'Earnings'.",
  "how to upload menu": "If you're a supplier, go to your profile and click 'Upload Menu'.",
  "how long does delivery take": "Delivery typically takes 30-60 minutes, depending on location and order volume.",
  "can i reorder a past meal": "Yes! Go to 'Order History' and click 'Reorder'.",
  
  "how to logout": "Click your profile picture and select 'Logout' from the dropdown menu.",

  "can i refer a friend": "Yes, invite your friends and earn rewards! Go to 'Refer & Earn' in your profile.",
  
  "how to order": "To order food, select a dish, add it to your cart, and proceed to checkout.",
  "how to contact support": "You can contact support by going to the 'Help' section in the menu.",
  "report supplier": "To report a supplier, visit their profile and click the 'Report' button.",
  "how to become a seller": "Register as a seller from the signup page and complete your profile.",
  "what is homey plates": "Homey Plates connects home chefs, sellers, and buyers for homemade food.",
  hi: "Hello! How can I help you today?",
  hello: "Hi there! Need any assistance?",
  bye: "Goodbye! Have a great day!",

  // New responses
  "how to track my order": "You can track your order in real-time from the 'My Orders' section.",
  "how to cancel my order": "To cancel your order, go to 'My Orders', select the order, and click 'Cancel'.",
  "how to give feedback": "After delivery, you'll be prompted to rate your experience and leave feedback.",
  "how to register as a supplier": "To register as a supplier, visit the 'Become a Supplier' page and follow the steps.",
  "how to make payment": "You can pay using credit/debit cards, UPI, or wallet options during checkout.",
  "is homey plates available in my city": "We are expanding! Please enter your location to check availability.",
  "do you have vegetarian options": "Yes, we offer a wide range of vegetarian and vegan dishes.",
  "how to change my address": "You can update your delivery address in the 'Profile' > 'Address Settings' section.",
  "how to delete my account": "To delete your account, please contact support from the 'Help' section.",
  "do you offer discounts": "Yes! Check out our 'Offers' section for ongoing deals and coupon codes.",

  // More helpful responses
  "how to rate a supplier": "Go to your past order and click 'Rate Supplier' to leave a rating and review.",
  "can i schedule an order": "Yes, you can choose a delivery date/time during checkout.",
  "how to switch roles": "Visit your account settings to switch between buyer, seller, or supplier roles.",
  "how to report a bug": "You can report bugs via the 'Help' > 'Report an Issue' section.",
  "how to view earnings": "Suppliers and sellers can view earnings in the 'Dashboard' under 'Earnings'.",
  "how to upload menu": "If you're a supplier, go to your profile and click 'Upload Menu'.",
  "how long does delivery take": "Delivery typically takes 30-60 minutes, depending on location and order volume.",
  "can i reorder a past meal": "Yes! Go to 'Order History' and click 'Reorder'.",
  "how to logout": "Click your profile picture and select 'Logout' from the dropdown menu.",
  "can i refer a friend": "Yes, invite your friends and earn rewards! Go to 'Refer & Earn' in your profile."
};


export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    const userMessage = input.trim().toLowerCase();
    if (!userMessage) return;

    const matchedKey = Object.keys(responses).find((key) =>
      userMessage.includes(key)
    );

    const botResponse =
      responses[matchedKey] ||
      "Sorry, I didn't understand that. Try asking something else.";

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: botResponse },
    ]);
    setInput("");
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } flex flex-col items-center justify-between`}
    >
      {/* Header */}
      <div className="w-full text-center border-b p-4">
        <h2 className="text-lg font-semibold">🤖 Homey Bot</h2>
      </div>

      {/* Messages */}
      <div className="h-[70vh] w-full overflow-y-auto px-4 py-2 space-y-3 flex flex-col items-center">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`w-full flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl max-w-[70%] text-sm shadow ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="w-full border-t p-4 flex items-center justify-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask something..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
}
