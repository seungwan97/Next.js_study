import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

//넥스트js는 지원되는 모든 Id에서 동적페이지의 모든 버전에 대한 프리제너레이트가 필요하다.
//모든 meetupId 밸류에서 프리제너레이트 되어야한다. 그러나 현재는 그럴수가 없으므로
//getStaticProps가 모든 동적페이지에서 프리제너레이트 되기 위해 getStaticPaths()를 사용하는 것이다.
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://swyh0625:IDsdKqNsO1Q9LNOb@cluster0.aqwxxyf.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  //find()는 모든 meetups에 액세스 할 수 있게함
  //모든 문서를 추출하기 위해 첫번째 인자로 빈 객체를 가져옴
  //두번째 인자의 _id:1 이라는 뜻은 여기서는 id값만 가져오고 다른 필드값은 포함하지 않는다는 뜻 (id가 1이라는 뜻이아님)
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    //fallback키는 넥스트js에게 path배열이 모든 지원되는 매개변수를 저장할지 아니면 일부만 저장할지 말해줌
    //false는 path배열에 정의한것 외에 사용하면 안되고, true로 설정하면 넥스트JS가 해당 페이지를 만들것임.
    fallback: false,
    //경로배열을 동적으로 생성
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //id가져오기
  //id객체[meetupId] 프로퍼티meetupId에 접근
  //mongoDB에서의 _id는 String이 아닌 이상한 객체형태임
  //따라서 특정 _id를 정확하게 찾으려면 이것을 문자열에서 객체id로 전환해야 함 => ObjectId import
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://swyh0625:IDsdKqNsO1Q9LNOb@cluster0.aqwxxyf.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  //mongoDB에서의 _id는 String이 아닌 이상한 객체형태임
  //따라서 특정 _id를 정확하게 찾으려면 이것을 문자열에서 객체id로 전환해야 함 => ObjectId import
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
export default MeetupDetails;
