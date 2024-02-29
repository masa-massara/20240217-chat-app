import React, { useState } from "react";
import { collection, query, where } from "firebase/firestore";
import {db} from "../firebase"

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const handleSearch = () => {};

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="友達を検索"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      <div className="userChat">
        <img
          src="https://ih1.redbubble.net/image.1259577480.8618/st,small,507x507-pad,600x600,f8f8f8.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>ジュン</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
