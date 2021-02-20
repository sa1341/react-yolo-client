import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료 돠었습니다.");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });

  const onChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onChangeNickname = (e) => {
    const { value } = e.target;
    setNickname(value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
