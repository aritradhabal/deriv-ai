import Image from "next/image";
import { ChatBox } from "./ChatBox";

const message1 =
  "I'm betting on a breakout in NVDA, seeing a strong setup as it holds support and leading the market, with a target of 189.2 and a stop just below 180. I'm also holding my existing NDX and MSFT positions, though I'm uneasy about MSFT's zero stop loss.";

const message2 =
  "My analysis indicates continued strength in AI names like NVDA and MSFT, so I'm holding our existing long positions despite lower weekend liquidity and potential macro event risk, choosing not to add new trades or hedges for now. I'm closely monitoring NVDA's support and MSFT's uptrend, ready to adjust if the thesis breaks.";

const MAX_MESSAGES = 5;
export const Chats = () => {
  return (
    <div>
      <div className="bg-black border w-full p-3 rounded-md">
        <p>Model Chat</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 py-3 overflow-y-auto">
        <ChatBox message={message1} model="gemini" />
        <ChatBox message={message1} model="openai" />
        <ChatBox message={message1} model="gemini" />
        <ChatBox message={message1} model="openai" />
        <ChatBox message={message1} model="gemini" />
      </div>
    </div>
  );
};
