import Image from "next/image";
import type { model } from "@/types";

export const ChatBox = ({
  message,
  model,
}: {
  message: string;
  model: model;
}) => {
  return (
    <div className="bg-black border w-full p-3 rounded-md flex items-start gap-x-2">
      <Image
        src={
          model === "gemini"
            ? "/ai-icons/gemini-color.webp"
            : "/ai-icons/openai.webp"
        }
        width={32}
        height={32}
        alt={model === "gemini" ? "gemini-icon" : "openai-icon"}
        className="object-contain py-1"
      />
      <p className="grow text-sm">{message}</p>
    </div>
  );
};
