import React from 'react';
import { ProgressComponent } from '../../common/components/progress';
import { TileComponent } from '../../common/components/tile';

import HTMLIcon from './resources/html5.png';
import CSSIcon from './resources/css3.png';
import ReactIcon from './resources/react.png';
import JSIcon from './resources/js.png';
import DockerIcon from './resources/docker.png';
import NodeJSIcon from './resources/nodejs.png';
import FirebaseIcon from './resources/firebase.png';
import SeleniumIcon from './resources/selenium.png';
import JavaIcon from './resources/java.png';
import GithubIcon from './resources/github.png';

import StockIcon from './resources/stock.png';
import FootballIcon from './resources/football.png';
import VideoIcon from './resources/video.png';
import CookingIcon from './resources/cooking.png';
import CurlIcon from './resources/curl.png';

import styles from './profile.css';

export default function ProfileComponent() {
  return (
    <div className={`${styles.profileContainer} nav-profile`} id="Profile">
      <div className={styles.skillsContainer}>
        <div className={styles.skills}>
          <span className={styles.line} />
          <span className={styles.textSkills}>SKILLS</span>
          <span className={styles.line} />
        </div>
        <div className={styles.skillsProgressContainer}>
          <ProgressComponent
            progress="75"
            title="WEB DEVELOPMENT"
            content="Handson experience in product design, front-end, back-end, PWA development and deployment (CICD)"
          />
          <ProgressComponent
            progress="50"
            title="IT TECHNOLOGIES"
            content="Updating myself with latest technologies regularly. Currently working on content delivery network (CDN) and Docker"
          />
          <ProgressComponent
            progress="60"
            title="MANAGEMENT"
            content="Carried out few projects with a small team of 2,3 members. And I was the College Secretary in final year of MIT-2016"
          />
          <ProgressComponent
            progress="65"
            title="ECONOMICS"
            content="Active Stock Market analyst with trading & investment experience of 5 years. Block chain & finance are my all time favourites"
          />
        </div>
      </div>
      <div className={styles.otherSkills}>
        <div className={styles.technicalSkills}>
          <div className={styles.techSkillsHeading}>
            <div className={styles.techSkillsHeadingText}>WHAT I DO ?</div>
          </div>
          <div className={styles.tile}>
            <TileComponent imageSource={HTMLIcon} title="HTML" />
            <TileComponent imageSource={CSSIcon} title="CSS" />
            <TileComponent imageSource={ReactIcon} title="React" />
            <TileComponent imageSource={JSIcon} title="JS" />
            <TileComponent imageSource={DockerIcon} title="Docker" />
            <TileComponent imageSource={NodeJSIcon} title="NodeJs" />
            <TileComponent imageSource={FirebaseIcon} title="Firebase" />
            <TileComponent imageSource={SeleniumIcon} title="Selenium" />
            <TileComponent imageSource={JavaIcon} title="Java" />
            <TileComponent imageSource={GithubIcon} title="Github" />
          </div>
        </div>
        <div className={styles.technicalSkills}>
          <div className={styles.techSkillsHeading}>
            <div className={styles.techSkillsHeadingText}>HOBBIES</div>
          </div>
          <div className={styles.hobbies}>
            <TileComponent imageSource={StockIcon} title="Share Market" />
            <TileComponent imageSource={FootballIcon} title="Football" />
            <TileComponent imageSource={VideoIcon} title="Photography" />
            <TileComponent imageSource={CookingIcon} title="Cooking" />
            <TileComponent imageSource={CurlIcon} title="Workout" />
          </div>
        </div>
      </div>
    </div>
  );
}
