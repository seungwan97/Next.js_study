//최상위 컴포넌트
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
// Component : 렌더링 될때 실제 페이지 콘텐츠를 저장하고 있는 프로퍼티
// pageProps : 페이지가 받는 특수 프로퍼티
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
