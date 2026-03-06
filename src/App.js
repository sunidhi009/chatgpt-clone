import "./App.css";
import { useState } from "react";
import axios from "axios";

import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {

const [messages, setMessages] = useState([]);
const [input, setInput] = useState("");

const sendMessage = async () => {

if(!input) return;

const userMessage = { role:"user", content:input };

const updatedMessages = [...messages, userMessage];

setMessages(updatedMessages);
setInput("");

try{

const response = await axios.post(
"http://localhost:5000/chat",
{
messages: updatedMessages
}
);

const botReply = response.data.choices[0].message;

setMessages([...updatedMessages, botReply]);

}catch(error){
console.log(error);
}

};

return (
<div className="App">

<div className="sidebar">

<div className="upperSide">

<div className="upperSideTop">
<img src={gptLogo} alt="logo" className="logo"/>
<span className="brand">ChatGPT Clone</span>
</div>

<button className="btn midBT">
<img src={addBtn} alt="" className="addBtn"/>
New Chat
</button>

<div className="upperSideBottom">

<button className="query">
<img src={msgIcon} alt=""/>
What is programming ?
</button>

<button className="query">
<img src={msgIcon} alt=""/>
How to learn coding ?
</button>

</div>

</div>

</div>

<div className="main">

<div className="chats">

{messages.map((msg,index)=>(
<div key={index} className="chat">
<img
className="chatImg"
src={msg.role==="user"?userIcon:gptImgLogo}
alt=""
/>
<p className="txt">{msg.content?.toString()}</p>
</div>
))}

</div>

<div className="chatFooter">

<div className="inp">
<input
type="text"
placeholder="Send a message..."
value={input}
onChange={(e)=>setInput(e.target.value)}
/>

<button className="send" onClick={sendMessage}>
<img src={sendBtn} alt="send"/>
</button>

</div>

</div>

</div>

</div>
);
}

export default App;