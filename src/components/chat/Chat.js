import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon, MoreVert } from "@material-ui/icons";
import { AttachFile, SearchOutlined } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/MicNoneOutlined";
import React, { useEffect, useState } from "react";
import "./Chat.css";

const Chat = () => {
  //Seeder
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Tecleas", input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="sidebar_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3> Room Name</h3>
          <p>Ultima conexion</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">Booker</span>
          Hello
          <span className="chat_timestamp">3:35</span>
        </p>
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form>
          <input
            value={input}
            placeholder="Escribe tu mensaje..."
            onChange={(e) => setInput(e.target.value)}
            typee="text"
          />
          <button type="submit" onClick={sendMessage}>
            Enviar
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
