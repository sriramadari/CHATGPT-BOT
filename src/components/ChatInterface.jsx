
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Configuration, OpenAIApi } from "openai";
require('dotenv').config();
// const OPENAI_API_KEY=;
const configuration = new Configuration({
    organization: "org-uGXeezsTf4DQgEOLJuG3oHAc",
    apiKey:process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const ChatInterface = () => {

    const [prompt,setPrompt]=useState("");
    const [messages,setMessages]=useState([]);
    function handleChange(event){
        setPrompt(event.target.value);
    }
    function handleClick(event){
      
        setMessages([...messages,prompt]);
        setPrompt("");
        openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: "Hello world"}],
        }).then((response)=>{
          console.log(response.data);
        }).catch((error)=>{
          console.log("error");
        })
    }


  return (
    <div className="chat-interface">
      <div className="chat-window">
        {/* Display chat messages */}
      </div>
      <div className="input-container">
        <input onChange={handleChange} type="text" placeholder="Type your message..." value={prompt}/>
        <button onClick={handleClick}><SendIcon/></button>
      </div>
    </div>
  );
};

export default ChatInterface;
