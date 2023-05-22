//페이지의 head section에 head element를 추가하는 구성 요소
// import Head from "next/head";
import SVGComponent from "../components/test/test";
import Cobby from "../components/test/Cobby";
//몽고db 클라이언트 소환
import { MongoClient } from "mongodb";

// import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;{/* <SVGComponent /> */}
      <Cobby />
    </Fragment>
  );
}

//기본적으로 next.js는 정적페이지를 생성하기 때문에 프로세스 빌드(npm build) 때 컴포넌트가 렌더링됨
//그러나 컴포넌트에서 데이터를 기다려야 한다면 특수함수를 export로 내보내어 가져올 수 있음
//이 기능은 pages안에 있는 컴포넌트들만 가능

//next.js는 이 promise가 해결될 때까지 기다린다.
//즉 데이터를 읽어들일때까지 기다리는 것이다.
//그 다음에 이 컴포넌트 함수에서 사용할 props를 반환한다.
//이렇게 하면 이 컴포넌트가 실행되기 전에 데이터를 읽을 수 있어서 이 컴포넌트를 데이터와 함께 렌더링 할 수 있음

export async function getStaticProps() {
  //fetch data
  //MongoDB 클라이언트 연결
  const client = await MongoClient.connect(
    "mongodb+srv://swyh0625:IDsdKqNsO1Q9LNOb@cluster0.aqwxxyf.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  //client 객체에서 모든 db 메서드를 통해 위의 코드중 meetups에 연결 중인 데이터베이스를 확보할 수 있음.
  //만약 아직 데이터베이스가 생성되지 않았다면 즉시 생성될 것임.
  const db = client.db();

  //이제 mongoDB는 document들로 가득 찬 컬렉션을 작동시키는 NoSQL 데이터베이스가 되는 것임.
  //컬렉션은 SQL 데이터베이스에 있는 table이라고 생각하면 되고 document는 해당 테이블의 항목일 것임.
  //즉 여러 document를 가지고 있는 컬렉션을 가지게 되는 것임.
  //단일 meetup은 하나의 document가 되고 전체 컬렉션은 여러 meetup document들을 보관하는 것이라고 보면 됨.
  //이를 위해 데이터베이스와 컬렉션 메서드를 사용하여 컬렉션을 보관

  //컬렉션의 이름을 meetups로 설정 (데이터베이스이름과 다르게 설정해도 됨)
  const meetupsCollection = db.collection("meetups");

  //meetups라는 DB에서 컬렉션을 찾아 배열형태로 반환
  const meetups = await meetupsCollection.find().toArray();

  //fetching 한 후 연결차단
  client.close();

  //이 안에서는 일반적으로 서버에서 돌아가는 어떤 코드든 전부 실행 가능
  //파일시스템, DB연결 전부 가능
  //여기부분은 절대 클라이언트 측에서 실행되지 않음
  //따라서 여기 코드는 방문자 컴퓨터에서 실행될 수가 없다.
  //항상 객체를 반환함
  return {
    //컴포넌트 함수를 위해 props객체의 meetups라는 이름으로 DUMMY_MEETUPS를 준비
    //컴포넌트가 렌더링될때 props기능을 통해 해당 데이터를 렌더링
    //이렇게하면 useState와 useEffect모두 사용할 필요가 없어진다.
    //이렇게하면 서버사이드, 정확하는 서버의 프로세스 과정쪽으로 데이터를 가져올 수가 있다.
    //서버사이드 렌더링과는 약간 다른 개념이고 해당 방법이 더욱 보편적인 렌더링이다.
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    //이 방식으로는 최신화되는 정보를 가져올수가 없으므로 revalidate를 써서 최신화되는 정보를 가져옴
    //revalidate의 값 : 최신화된 정보가 들어올 때 이 페이지를 다시 생성할 때까지 next.js가 기다리는 시간(초 단위)
    //revalidate: 3600은 1시간마다 서버에서 페이지를 다시 생성한다는 뜻
    revalidate: 3600,
  };
}

//getStaticProps()의 대안
//요청이 있을때만 실행 (빌드 프로세스때 아님)
//빌드 프로세스 이후 서버에서 실행 (사용자에게는 보이지 않음)
//매개변수로 context 사용
//context 변수에서 요청 객체에 접속할 수 있음
//그리고 응답 객체가 돌아옴
//단 페이지가 요청이 들어올때마다 프리 제너레이트됨
//이게 단점이 될수도 있다
//항상 바뀌는 데이터가 없다면, 요청객체에 접속할 필요가 없다면? => getStaticProps가 좀 더 나을수도..
//getStaticProps는 HTML파일을 프리 제너레이트하기 때문 => 그 파일은 CDN에 저장되고 serve됨. 그리고 요청이 들어올때마다 데이터를 다시 만들고 fetch하는 것보다 빠름
//getStaticProps는 캐시하고 다시 사용하므로 getStaticProps가 getServerSideProps보다 더 빠를 것임 (항상 다시 만드는 대신)

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

//즉 주기적으로 업데이트되거나 데이터의 최신화가 많을 경우에는 getServerSideProps, 아니라면 getStaticProps를 사용하는 것이 좋다.

export default HomePage;
