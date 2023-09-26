import React from "react";
import { Inbox, MessageSquare, Star, X } from "react-feather";

function CardActions() {
  return (
    <div className="bg-ja-dark-blue flex flex-row justify-between border-t border-ja-white py-3 px-3 rounded-b">
      <div className="text-ja-white text-xl flex flex-col  ">
        <span className="ml-10">
          <Inbox />
        </span>
        <span className="pt-2">Send Interest</span>
      </div>
      <div className="text-ja-white text-xl flex flex-col ">
        <span className="ml-5">
          <Star />
        </span>
        <span className="pt-2">Shortlist</span>
      </div>
      <div className="text-ja-white text-xl flex flex-col  ">
        <MessageSquare />

        <span className="pt-2">Chat</span>
      </div>
      <div className="text-ja-white text-xl flex flex-col ">
        <span className="ml-3">
          <X />
        </span>
        <span className="pt-2">Ignore</span>
      </div>
    </div>
  );
}

export default CardActions;
