//mongoDB 클라이언트 불러오기
import { MongoClient } from "mongodb";

//이 파일의 url : /api/new-meetup

//여기서 쓰는 정보는 절대 클라이언트 측에서 저장되지 않기 때문에 인증정보 등을 저장하기 안전하다.
async function handler(req, res) {
  //req.method는 어떤 요청인지 알게 함
  //POST요청일 경우에만 코드를 트리거
  if (req.method === "POST") {
    //요청의 body를 포함하고 있음
    const data = req.body;

    // //해당 데이터들을 데이터베이스에 저장
    // const { title, image, address, description } = data;

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

    //컬렉션에 새 document를 삽입하기 위해 구축된 쿼리 명령 중 하나인 insertOne() 메서드 사용
    //mongoDB의 document = 자바스크립트의 객체
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    //이제 연결을 마쳤기 때문에 client.close()를 호출하여 데이터베이스 연결을 차단한 다음
    //응답 객체를 사용하여 응답을 다시 보내야 함.
    client.close();
    //응답이 제대로 들어갔는지 확인해주는 코드이며 message를 설정할 수도 있음
    res.status(201).json({ message: "Meetup Inserted!" });
  }
}

export default handler;
