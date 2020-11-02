import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import "./SidebarChat.css";
import formatDate from "../time";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    roomName &&
      db.collection("rooms").add({
        name: roomName,
      });
  };
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
  useEffect(() => {
    setSeed((Math.random() * 5000) | 0);
  }, []);

  const slotInDate = new Date(
    messages[messages.length - 1]?.timestamp?.toDate()
  );

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <div className="sidebarChat__avatar">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="sidebarChat__info">
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
          </div>
        </div>
        <span className="sidebarChat__timestamp">
          {messages[0]?.message
            ? formatDate(slotInDate, "just time")
            : "Offline"}
        </span>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
