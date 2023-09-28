import React from "react";
import { Inbox, MessageSquare, Star, X } from "react-feather";

function CardActions() {
  return (
    <div className="bg-ja-dark-blue flex flex-row justify-between border-t border-ja-white py-3 px-3 rounded-b">
      <div className="text-ja-white text-xl flex flex-col items-center ">
        <span>
          <Inbox />
        </span>
        <span className="pt-2 whitespace-nowrap">Send Interest</span>
      </div>
      <div className="text-ja-white text-xl flex flex-col items-center">
        <span>
          <Star />
        </span>
        <span className="pt-2 whitespace-nowrap">Shortlist</span>
      </div>
      <div className="text-ja-white text-xl flex flex-col items-center  ">
        <MessageSquare />

        <span className="pt-2">Chat</span>
      </div>
      <div className="text-ja-white text-xl flex flex-col items-center ">
        <span>
          <X />
        </span>
        <span className="pt-2">Ignore</span>
      </div>
    </div>
  );
}

export default CardActions;
