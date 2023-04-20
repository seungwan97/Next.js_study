//이 특수한 index.js 파일은 news라는 폴더 안에 있으므로
//'/'가 아닌 '/news'로 접근이 가능함 (이게 default)
//즉 세그먼트(/news와 같은것)을 하나 이상 만드려면( ex. /news/detail-news와 같은 형태) 하위 폴더를 하나 만들어서 그 안에 파일을 만들어야함.

//페이지 이동할때는 Link를 import하자 (이때 to가 아닌 href를 쓴다 nexjs에서는)
import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
