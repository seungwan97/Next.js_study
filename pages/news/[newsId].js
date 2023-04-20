// '/news/대괄호안에 들어가는 식별자 아무거나'
// 파일명에 [] 대괄호를 쓰면 동적으로 페이지를 만들수 있다.
// 이때 괄호안에 들어갈 식별자의 이름은 무엇이든 상관없다.

import { useRouter } from "next/router";

import React from "react";

function DetailPage() {
  //동적 라우트 매개변수값 추출하기
  const router = useRouter();
  const newsId = router.query.newsId;

  //백엔드에 요청해서 newsId를 가져올 수 있다.

  return <h1>The Detail Page</h1>;
}
export default DetailPage;
