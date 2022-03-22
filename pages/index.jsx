import React from "react";
import FullPage from "../components/FullPage";
import Fade from "react-reveal";

const MyWeb = () => {
  return (
    <>
      <Fade bottom>
        <FullPage title="PROFILE">
          <h2>This Full Page Is PROFILE</h2>
          <div>
            Will be write deverloper's name, from school, location ETC...
          </div>
        </FullPage>
      </Fade>

      <Fade bottom>
        <FullPage title="SKILL">
          <h2>This Full Page Is SKILLS</h2>
          <div>
            Will be write deverloper's Skills which coding langauge, Databse
            Level, Certificate ETC...
          </div>
        </FullPage>
      </Fade>

      <Fade bottom>
        <FullPage title="WORKS">
          <h2>This Full Page Is WORKS</h2>
          <div>Will be View Link In Image deverloper's PROTFOLIOS...</div>
        </FullPage>
      </Fade>

      <Fade bottom>
        <FullPage title="CONTEACT">
          <h2>This Full Page Is CONTEACT</h2>
          <div>
            Will be write deverloper's Mobile, Tel, Email, Github ETC...
          </div>
        </FullPage>
      </Fade>
    </>
  );
};

export default MyWeb;
