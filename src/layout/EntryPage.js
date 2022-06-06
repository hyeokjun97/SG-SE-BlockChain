//진입점, 루트 접속시 이 페이지로 오게 됨. 로그인 안되어 있으면 로그인으로 이동, 아니면 메인 페이지로 이동
import React from "react";
import { useNavigate } from "react-router-dom";
import * as userData from "../dao/data/user";

export default function EntryPage() {
  const navigate = useNavigate();
  const checkUserLogin = () => {
    const user = userData.getCurrentUser();
    if (user.status) {
      navigate("/main");
    } else {
      navigate("/login");
    }
  };

  React.useEffect(() => {
    checkUserLogin();
  }, []);
  return (
    <>
      <text>로그인 여부 검사...</text>
    </>
  );
}
