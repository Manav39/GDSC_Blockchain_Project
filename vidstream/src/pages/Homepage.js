import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import {Tilt} from '@jdion/tilt-react'
import { useToast } from "@chakra-ui/react";

import { ChatIcon } from "@chakra-ui/icons";

const HomePage = () => {
  const navigate = useNavigate();

  // const toast = useToast();

  const [input, setInput] = useState("");
  // const [output, setOutput] = useState("");


    function requestMetaMaskAccess(){}
 

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // const onExercisesClick = useCallback(() => {
  //   const anchor = document.querySelector(
  //     "[data-scroll-to='popularExercisesSection']"
  //   );
  //   if (anchor) {
  //     anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  //   }
  // }, []);

  // const onTrainers1Click = useCallback(() => {
  //   const anchor = document.querySelector("[data-scroll-to='trainers']");
  //   if (anchor) {
  //     anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  //   }
  // }, []);

  // const onButton1Click = useCallback(() => {
  //   const anchor = document.querySelector(
  //     "[data-scroll-to='popularExercisesSection']"
  //   );
  //   if (anchor) {
  //     anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  //   }
  // }, []);



  const onNewsClick = () => {
    navigate("/news");
  };
  const onAssistantClick = () => {
    navigate("/assistant");
  };

  return (
    <div className={styles.fitnesslandingpage}>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          
          <Tilt className={styles.logo} onClick={onLogoClick}>
            <img
              style={{ height: "6rem", clipPath: "circle(40%)"}}
              alt=""
              src="/Designer.png"
            />
          </Tilt>
          <div className={styles.menuright}>
            <div className={styles.menulinks}>
              <button
                className={styles.exercises}
                style={{ fontSize: "180%" }}
                onClick={onAssistantClick}
              >
                <ChatIcon /> ASK US
              </button>
              <button
                className={styles.exercises}
                style={{ fontSize: "180%" }}
                onClick={onNewsClick}
              >
                EXPLORE
              </button>
              <button
                className={styles.login}
                style={{ fontSize: "180%" }}
        
              >
                LOGIN
              </button>
            </div>
            <button className={styles.hamburgerIcon}>
              <img className={styles.group2Icon} alt="" src="/group2.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.herosection}>
        <div className={styles.herotext}>
          <div className={styles.herocta}>
            <div className={styles.title}>
              <p className={styles.cardio}>{``}</p>
              <p style={{ fontSize: "8rem" }}>VidStream</p>
            </div>
            <div className={styles.subtitle}>
            Unleash your creativity on a decentralized platform that cherishes privacy, transparency, and community engagement.
            </div>
            <div className={styles.buttonrow}>
              <button className={styles.button} onClick={requestMetaMaskAccess}>
                <div className={styles.getStarted}>Get Started</div>
              </button>
              <button
                className={styles.button1}
                onClick={requestMetaMaskAccess}
              >
                <div className={styles.getStarted}>Preview</div>
              </button>
            </div>
          </div>
        </div>
        {/* <img className={styles.heroimageIcon} alt="" src="/logo.png" />
         */}
         <iframe title="hero" className={styles.heroimageIcon} src="https://giphy.com/embed/TytHun5lKuMdzUYVxl"  allowFullScreen  ></iframe>
         {/* <p><a href="https://giphy.com/gifs/subscribe-alexander-white-alexandwhite-TytHun5lKuMdzUYVxl">via GIPHY</a></p> */}
        {/* <video
          width="640"
          height="360"
          className={styles.heroimageIcon}
          autoPlay
          loop
          muted
        >
          <source src="/doc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* <Tilt style={{height: "300px", aspectRatio: "1/1", border: "2px solid white", margin: "30px", }}><img src="./logo.png" alt="hehe" /></Tilt> */}
      </div>
      <div
        className={styles.popularexercisessection}
        data-scroll-to="popularExercisesSection"
      >
        <div className={styles.popularexercises}>
          <div className={styles.title1}>
            <div className={styles.popularExercises}>Features</div>
          </div>

          <div className={styles.exercisecards}>
            <div className={styles.column1}>
              <div className={styles.exercisecard}>
                <img
                  className={styles.cardimageIcon}
                  alt="ethimage"
                  src="/videonft.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>
                      Video NFT Marketplace
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.exercisecard}>
                <img className={styles.imageIcon} alt="" src="/community.jpeg" />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>
                      Community Collaborations and Growth
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.column1}>
              <div className={styles.exercisecard2}>
                <img className={styles.imageIcon} alt="" src="/antipiracy.jpeg" />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>
                      Anti Piracy Measures
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.exercisecard}>
                <img className={styles.imageIcon} alt="safeguard" src="/award.jpeg" />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>
                      Personal Milestones
                    </div>
                    {/* <div
                      className={styles.subtitles}
                    >{`Feature 5 Description`}</div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.column1}>
              <div className={styles.exercisecard2}>
                <img className={styles.imageIcon} alt="scalable" src="/comment.png" />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>
                      One Comment Policy
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.exercisecard}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/money.jpeg"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>Fair Rewards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trainers1} data-scroll-to="trainers">
        <div className={styles.trainerscta}>
          <div className={styles.ctaframe}>
            <div className={styles.background} />
            <div className={styles.title5}>
              <h2 className={styles.workoutProgramMadeContainer}>
                <p className={styles.cardio}>Unleash</p>
                <p className={styles.cardio}>Your</p>
                {/* <p className={styles.cardio}>with</p> */}
                <p className={styles.cardio}>Creativity</p>
              </h2>
              <img className={styles.splashIcon} alt="" src="./splash.svg" />
            </div>
            <div className={styles.description}>
              <div className={styles.loremIpsumDolor}>
                Decentralized Video Sharing, Streaming and Piracy Detection
              </div>
              <button
                className={styles.button2}
                onClick={requestMetaMaskAccess}
              >
                <div className={styles.getStarted1}>Get Started</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.trainersimages}>
          <div className={styles.desktop}>
            <div className={styles.trainer3}>
              <img className={styles.trainer3Child} alt="" src="/Felix.jpeg" />
              <div className={styles.samanthaWilliam}>PewdiePie</div>
            </div>
            <div className={styles.trainer2}>
              <img
                className={styles.trainer3Child}
                alt=""
                src="/harry.jpeg"
              />
              <div className={styles.samanthaWilliam}>Code With Harry</div>
            </div>
            <div className={styles.trainer11}>
              <img className={styles.trainer1Child} alt="" src="/MR BEAST.jpeg" />
              <div className={styles.jonathanWise}>Mr Beast</div>
            </div>
          </div>
          <div className={styles.tablet}>
            <div className={styles.trainer31}>
              <img className={styles.trainer3Item} alt="" src="/doctors.jpg" />
              <div className={styles.karenSummer1}>Doctors</div>
            </div>
            <div className={styles.trainer21}>
              <img
                className={styles.trainer2Item}
                alt=""
                src="/harry.jpeg"
              />
              <div className={styles.jonathanWise1}>Code With Harry</div>
            </div>
            <div className={styles.trainer12}>
              <img className={styles.trainer1Item} alt="" src="/patient.jpg" />
              <div className={styles.samanthaWilliam1}>Patient</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categoriessection}>
        <div className={styles.popularexercises}>
          <div className={styles.category}>
            <div className={styles.div6}>01</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Login With Metamask to create your channel</div>
              </div>
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>02</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Create and Upload Vidoes</div>
                {/* <div className={styles.courses}>some description</div> */}
              </div>
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>03</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Like, Share and Subscribe popular Content Creators</div>
                {/* <div className={styles.courses}>some description</div> */}
              </div>
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>04</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Report Pirated Videos on a Common Portal</div>
                {/* <div className={styles.courses}>some description</div> */}
              </div>
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>05</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>
                  Collaborate with other content creators
                </div>
                {/* <div className={styles.courses}>some description</div> */}
              </div>
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
        </div>
      </div>
      <div className={styles.subscribe}>
        <div className={styles.subscribeform}>
          <div className={styles.title11}>Connect With Us</div>
          <form className={styles.form} id="formID">
            <input
              className={styles.input}
              placeholder="Email"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className={styles.button3}
              type="submit"
              form="formID"
       
            >
              <div className={styles.getStarted1}>Subscribe</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;