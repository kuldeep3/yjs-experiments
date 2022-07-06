import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const createNewRoom = (evt) => {
    evt.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Room created successfully");
  };
  const joinRoom = (evt) => {
    if (roomId.length === 0) {
      toast.error("Please enter room id");
      return;
    } else if (userName.length === 0) {
      toast.error("Please enter user name");
      return;
    }
    navigate(`/editor/${roomId}`, { state: { userName } });
    toast.success("Room joined successfully");
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/sample-logo.png" alt="logo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(evt) => setRoomId(evt.target.value)}
            value={roomId}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(evt) => setUserName(evt.target.value)}
            value={userName}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💛 by <a href="https://github.com/kuldeep3">Kuldeep</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
