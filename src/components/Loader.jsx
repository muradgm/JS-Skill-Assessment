import { useEffect, useContext, useRef } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { Container, Section, Header } from "../components/index.js";
import gsap from "gsap";
import Modal from "./Modal";

const Loader = ({ reRunTest, setReRunTest }) => {
  const { setTimerState, setDuration } = useContext(DataContext);

  const navigate = useNavigate();

  const parentRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(parentRef.current.children, {
      autoAlpha: 0,
      y: 100,
      duration: 1,
      stagger: 2,
      ease: "power4.out",
    }).to(
      parentRef.current.children,
      {
        autoAlpha: 0,
        y: -100,
        duration: 1,
        stagger: 2,
        ease: "power4.out",
        onComplete: () => {
          setTimerState(true);
          setDuration(90);
          navigate("/quiz");
          setReRunTest(false);
        },
      },
      1.5
    );
  }, [setReRunTest, setTimerState, setDuration, navigate]);

  return (
    <>
      {reRunTest ? (
        <Modal>
          <Container classes="relative w-8/12 flex flex-col m-auto h-2/4 items-center justify-between">
            <button onClick={() => setReRunTest(false)}>close</button>
            <Section classes="pt-4 w-full">
              <Header />
            </Section>
            {/*body*/}
            <Section classes="relative flex justify-center w-full h-full">
              <div
                ref={parentRef}
                className="absolute w-full flex justify-center"
              >
                {[
                  "Preparing new set of questions",
                  "Read the questions carefully",
                  "Choose the most appropriate answer",
                  "and Remember, you have 1.5 minutes per question",
                ].map((text, idx) => (
                  <p
                    key={idx}
                    className="absolute invisible my-4 text-slate-500 text-2xl leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </Section>
          </Container>
        </Modal>
      ) : null}
    </>
  );
};

export default Loader;
