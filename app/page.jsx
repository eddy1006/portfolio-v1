"use client";
import Image from "next/image";
import Link from "next/link";
import useDownloader from "react-use-downloader";
import SkillSection from "./components/SkillSection";
import { useState } from "react";

export default function Home() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/ResumeWorded.pdf";
  const filename = "AdityaGuptaResume.pdf";
  const languages = [
    "Java",
    "C/C++",
    "Javascript",
    "Python",
    "Dart",
    "Kotlin",
    "PHP",
    "Solidity",
  ];
  const frameworks = [
    "Flutter",
    "React Native",
    "NextJs",
    "Express",
    "Hardhat",
  ];
  const dbAndOthers = ["MongoDb", "MySQL", "Firebase", "NodeJs", "Git"];

  const [index, setIndex] = useState(0);
  const projects = [
    "/** Noogle, is a VS Code extension which helps fellow developers to quickly access suggestion to the problems encountered. This extension provides with instant and appropriate hints to debug the errors and bugs encountered without switching to the browser. Moreover the extension automates and links to the documentation of the framework or library we are working with by detecting our imports on VS Code itself for easy access. With all these rich features and user friendly design, developers will find it more convenient to look up for a fix and everything will be encapsulated in your favourite IDE YOUR VS CODE! Whenver you have an error in your code just use alt + n. **/",
    "/** XSS vulnerability extension is a chrome extension build to verify whether a website is safe from cross site scripting attacks or not. The following extension was made under the project component for the course CSE4003 Cyber Security. Working is simple you just need to open the extension on any website that you need to check and the extension will display the result either the website is safe or not. Internally what happens is that our extension takes the url of current tab and send it to the backend which spawns a child process which is a python scanner file which uses this url and scraps it's html structure to find input text fields in any form present on the website. Then the scanner file attempts to submit the form with a script inside the text field and checks if that script appears in url on submitting then it means that the website is vulnarable or else not and sends the same back to frontend. **/",
    "/** With the increase in number of IoT devices present in a household it also presents a new threat to the security of the users and a new way for hackers to get into your system. For this study my team took the help of a kaggle dataset which had the most relevant features relating to an IoT device network traffic and we used this datasest to train our ANN model to predict whether a series of packets are a sign of some attack and if attack then which kind of attack or not. For the purpose of simulation we set up a virtual device with the help of VirtualBox and installed kali linux on it and then we started pinging our current device. This traffic was collected using wireshark library in python and was fed to our model which gave it's prediction. The model was able to get an accuracy of as high as 98 percent in some cases. **/",
    "/** Seek,Find,Invite,Book,Chat! Sportistan is a sport/activity scheduler which could be accessed with a single touch on your smartphone. With this application one can find new people and sport events that are happening in your area,your school,colleges or even any society. What's cooler? You can also host an event. Through this app our clients can find the events happening in that area. Our clients can filter options to match their expectations. Great thing about our application is the fact that they can host their events and they can also set their arena parameters.Even we have a global chat arena, where our athletes can find new mates to play with, they can invite them and expand their team to play with.Our sport enthusiasts and gamers can set their preferences like number of players and other parameters for the events they want to host. This application was a group project and also a submission in a few hackathons and I contributed in the application development. **/",
    "/** Smart Contract based peer to peer carpooling focuses on facilitating the transactions between a driver and passenger in a carpooling environment through the use of Cryptocurrency like ETH and levaraging the automation of smart contracts. The decentralized nature of blockchains makes carpooling more reliable as it abolishes the involvement of a thrid party to manage funds between driver and passenger. On this carpooling platform any user can connect with their account with the use of a wallet and then register as either a passenger or a driver. Registering as driver will give them chance to create their ride along with necessary details and it will be shown to all the users registerd as passengers who can then book any ride which they like. The fare calculation is done automatically based on the mileage of vehicle, gas price and distance to be travelled. Other features like ride cancellation are also present. **/",
  ];
  const technologies = [
    [
      "Javascript",
      "NodeJs",
      "Web Scrapping",
      "axios",
      "cheerio",
      "VS code extension API",
    ],
    [
      "Javascript",
      "NodeJs",
      "Express",
      "Python",
      "Pandas",
      "Numpy",
      "BeautifulSoup",
      "html",
    ],
    [
      "ANN",
      "Tensorflow",
      "keras",
      "pandas",
      "numpy",
      "sickit learn",
      "Python",
      "smtp",
      "Sinch SMS API",
      "Jupyter Notebook",
      "Kali Linux",
      "Wireshark",
      "Cisco packet tracer",
    ],
    [
      "Flutter",
      "Dart",
      "NodeJs",
      "Express",
      "websockets",
      "Mongodb",
      "Firebase",
      "Auth0",
      "figma",
      "GoDaddy.com",
    ],
    [
      "Solidity",
      "Hardhat",
      "NextJs",
      "React",
      "Ethers js",
      "Etherscan",
      "Metamask",
      "Google maps API",
      "Price Converter API",
      "Sepolia",
    ],
  ];
  const links = [
    "https://github.com/eddy1006/Noogle",
    "https://github.com/eddy1006/XSS_Vulnerability_Extension",
    "https://github.com/eddy1006/Real-time-network-attack-detector-IoT-",
    "https://github.com/eddy1006/Sportistaan-devspace2022",
    "https://github.com/eddy1006/carpooling-backend-solidity",
  ];
  return (
    <div>
      <div className="section-one">
        <Image
          src="/images/aditya.png"
          width={200}
          height={200}
          alt="my-image"
        />
        <div style={{ marginTop: "30px" }}>
          <span className="name"> &lt; Hello! This is </span>
          <span className="name" style={{ color: "#95FB79" }}>
            Aditya Gupta
          </span>
          <span className="name"> /&gt;</span>
        </div>
        <div className="wrapper">
          <div className="static-txt">I'm a</div>
          <ul className="dynamic-txts">
            <li>
              <span>Cross-Platform Dev</span>
            </li>
            <li>
              <span>Backend Developer</span>
            </li>
            <li>
              <span>Problem Solver</span>
            </li>
            <li>
              <span>AI/ML enthusiast</span>
            </li>
          </ul>
        </div>
        <div className="summary">
          <div className="summary-content">
            <Link href="#about-me">About Me &#128221;</Link>
          </div>
          <div className="summary-content">
            <Link href="#projects">Projects &#128187;&#128296;</Link>
          </div>
          <div className="summary-content">
            <Link href="#socials">Socials &#35;</Link>
          </div>
        </div>
      </div>
      <div style={{ display: "inline-flex" }}>
        <div className="about-me" id="about-me">
          <span className="section-heading">&lt; </span>
          <span className="section-heading" style={{ color: "skyblue" }}>
            ABOUT ME
          </span>
          <span className="section-heading"> /&gt;</span>
          <p>
            /** Hi, I am Aditya Gupta a Software Engineer. I will graduate from
            Vellore Institute of Technology Vellore, this year with a bachelors
            degree in Computer Science and Engineering and I am an upcoming
            Application Development Enginner at Accenture. I am originally from
            Jhansi UP . I am passionate about coding and learning new skills.
            Beside mentioned are my primary tech skills. Along with my technical
            abilities I am also a team man and have experince with leading a
            team as well on few occasions. I am a strategist and I breakdown my
            tasks into smaller task before starting it. I am also a firm
            believer of commitment and I always like to deliver on my promises.
            I keep myself updated on the latest developments happening in my
            field and show particular intreset in topics that have the potential
            for the creation of a great business idea. To get in touch with me
            you can use any of the socials mentioned below or email me at
            adigupta239@gmail.com. **/
          </p>
          <button onClick={() => download(fileUrl, filename)}>
            Download Resume
          </button>
        </div>
        <div className="skills">
          <span className="section-heading" style={{ color: "#ee68af" }}>
            SKILLS
          </span>
          <br />
          <span style={{ color: "#ee68af", marginTop: "15px" }}>
            Programming Languages
          </span>
          <SkillSection text={languages} />
          <span style={{ color: "#ee68af", marginTop: "15px" }}>
            Frameworks
          </span>
          <SkillSection text={frameworks} />
          <span style={{ color: "#ee68af", marginTop: "15px" }}>
            Database and other tools
          </span>
          <SkillSection text={dbAndOthers} />
        </div>
      </div>
      <div
        style={{ display: "inline-flex", flexFlow: "row", marginLeft: "100px" }}
      >
        <div
          className="skills"
          style={{
            display: "flex",
            direction: "rtl",
            flexDirection: "column",
            width: "320px",
            marginTop: "40px",
          }}
        >
          <span className="section-heading" style={{ color: "#ee68af" }}>
            Technologies Used
          </span>
          <br />
          <SkillSection text={technologies[index]} />
        </div>
        <div className="projects" id="projects">
          <div
            style={{ position: "absolute", right: "0", marginRight: "30px" }}
          >
            <span className="section-heading">&lt; </span>
            <span className="section-heading" style={{ color: "skyblue" }}>
              PROJECTS
            </span>
            <span className="section-heading"> /&gt;</span>
          </div>
          <p>{projects[index]}</p>
          <div
            style={{
              width: "fit-content",
              position: "absolute",
              bottom: "0",
              marginBottom: "10px",
            }}
          >
            <button onClick={() => setIndex((index + 1) % 5)}>Next</button>
            <button
              onClick={() => {
                if (index == 0) setIndex(4);
                else setIndex(index - 1);
              }}
            >
              Previous
            </button>
          </div>
          <a href={links[index]} target="_blank">
            <div className="repo-link">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/github.png"
                height={35}
              />
              <span style={{ paddingLeft: "5px" }}>GitHub Repository</span>
            </div>
          </a>
        </div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        id="socials"
      >
        <div className="line fade-right"></div>
        <span
          className="section-heading"
          style={{ padding: "10px", color: "skyblue" }}
        >
          SOCIALS
        </span>
        <div className="line fade-left"></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <span className="section-heading">&lt; </span>
        <a
          href="https://www.linkedin.com/in/aditya-gupta-0985b621a/"
          target="_blank"
        >
          <div className="linkedin"></div>
        </a>
        <a href="https://twitter.com/eddityyaa" target="_blank">
          <div className="x"></div>
        </a>
        <a href="https://leetcode.com/adigupta239/" target="_blank">
          <div className="leetcode"></div>
        </a>
        <a href="https://github.com/eddy1006" target="_blank">
          <div className="github"></div>
        </a>
        <span className="section-heading"> /&gt;</span>
      </div>
    </div>
  );
}
