import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      //JSON 데이터를 보내는 것을 명확하게 하기 위해 headers 추가
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    //제출 후 페이지이동
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="create your new amazing meetup!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}
export default NewMeetupPage;
