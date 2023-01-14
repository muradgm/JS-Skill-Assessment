import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Container, Section, Header, Button } from "./index.js";
import { MdClose } from "react-icons/md";
import Modal from "./Modal";
import ReportQuestion from "./ReportQuestion";

const ReportQuestions = ({ setShowReport, showReport }) => {
  const { user, userAssessmentReport } = useContext(DataContext);

  userAssessmentReport.map((question) =>
    console.log("question", question.selected_answer)
  );

  return (
    <>
      {showReport ? (
        <Modal>
          <Container classes="my-10 overflow-y-scroll">
            <button
              className="fixed top-0 right-0 p-6"
              onClick={() => {
                setShowReport(false);
              }}
            >
              <MdClose className="text-3xl" />
            </button>
            <Section classes="space-x-0">
              <Header name={user.name} />
              <h1 className="mt-4 text-2xl font-bold text-center">
                Hello {user.name}, here is your report.
              </h1>
            </Section>
            <Section classes="space-y-0">
              {userAssessmentReport.map(
                ({ question, correct_answer, user_answer, resources }, idx) => (
                  <ReportQuestion
                    idx={idx}
                    correct_answer={correct_answer}
                    resources={resources}
                    user_answer={user_answer}
                    question={question}
                  />
                )
              )}
            </Section>
          </Container>
        </Modal>
      ) : null}
    </>
  );
};

export default ReportQuestions;
