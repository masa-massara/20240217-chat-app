import React, { SetStateAction, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

interface User {
  photoURL: string;
  displayName: string;
}

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [err, setErr] = useState(false);
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data() as SetStateAction<User | null>);
      });
    } catch (err) {
      setErr(true);
    }

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="ユーザーを検索"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      {err && <span>ユーザーが見つかりませんでした</span>}
      {user && (
        <div className="userChat">
          <img src={user?.photoURL || "デフォルトの画像URL"} alt="" />
          <div className="userChatInfo">{user?.displayName || "名無し"}</div>
        </div>
      )}
    </div>
  );
};

export default Search;
