import React from 'react';
import '../styles/hero.css';
import '../styles/icons.css';

function Hero() {

  return (
    <>
    <div className='hero'>
      <div className='hero_titles'>
        <h1><sup><span class="ph--star-four"></span></sup> SYED ABDUL MUQEETH</h1>
        <h2>Mechatronics Enginner</h2>
        <h3>Full Stack Developer | Machine Learning Engineer | Data Scientist | Cybersecurity Specialist | DevOps Engineer | UI/UX Designer | Project Manager | IT Support Specialist | Digital Marketing Expert |</h3>
      </div>
      <div className='hero_accordion_section'>
        <div className='hero_accordion_section_1'>
          <h4>Education<sup><span class="mdi--education-outline"></span></sup></h4>
          <br></br>
          <ul>
            <li><p>B.Tech Mechatronics - 2023 <br />Reva University <br /> Bengaluru, India</p></li>
            <br></br>
            <li><p>M.Tech AI & ML - 2026 <br />Dublin University<br />Dublin, Ireland</p></li>
          </ul>
          <br></br>
          <h4>Patents<sup><span class="mdi--lightbulb-outline"></span></sup> </h4>
          <br></br>
          <ul>
            <li><p>Advanced Lidar-Equipped Bionic Arm for Search & Rescue</p></li>
            <br></br>
            <li><p>Autonomous Mission Planning for Drones Using PIXHAWK</p></li>
            <br></br>
            <li><p>3D Printing Crack Detection with Ultrasonic Technology</p></li>
          </ul>

        </div>
        <div className='hero_accordion_section_2'>
          <h4>Professional<sup><span class="mdi--office-building"></span></sup></h4>
          <br></br>
          <ul>
            <li><p>Full Stack Web Developer | Digital Marketing | SEO | Data Analytics  <br></br> Ammas Pastries® Pvt LTD <br></br> Bengaluru, India <br></br> 2024 FullTime </p></li>
            <br></br>
            <li><p>Co-Founder | Full Stack Web Developer | Digital Marketing | Data Analytics | UI|UX Engineer | Happyness Engineer <br></br> MajlisDev® <br></br> Madina , Saudi Arabia <br></br> 2024 Self-employed</p></li>
            <br></br>
            <li><p>Next JS Developer | GSAP | Google Analytics | SEO  <br></br> CineFirm® <br></br> Bengaluru , India <br></br> 2024 Freelancer</p></li>
          </ul>
          <br></br>

        </div>
        <div className='hero_accordion_section_3'>
        <h4>Research<sup><span class="mdi--search"></span></sup></h4>
          <br></br>
          <ul>
            <li><p>Predictive Maintenance using Machine Learning <br></br> ResearchGate | Figshare </p></li>
            <br></br>
            <li><p>Swarm Intelligence & Distributed Robotics <br></br> ResearchGate | Figshare </p></li>
            <br></br>
            <li><p>Generative AI for Design & Manufacturing <br></br> ResearchGate | Figshare </p></li>
            <br></br>
            <li><p><strong>+17 Reasearch</strong></p></li>
          </ul>
          <h4>Articles <sup><span class="mdi--pencil-outline"></span></sup> </h4>
            <br></br>
            <ul>
              <li><p>The Science of Emotions <br></br> Medium 2024 </p></li>
              <br></br>
              <li><p>Cognitive Biases in Decision-Making <br></br> Medium 2024 </p></li>
              <br></br>
              <li><p><strong>+21 Articles</strong></p></li>
            </ul>
            <br></br>    
        </div>
        <div className='hero_accordion_section_4'>
          <h4>Projects <sup><span class="mdi--robot-love-outline"></span></sup></h4>
            <br></br>
            <ul>
              <li><p>Space Exploration Rover. <br></br> Github | FabLab </p> </li> <br></br>
              <li><p>Satellite-based Disaster Monitoring. <br></br> Kaggle | Google Colab </p></li> <br></br>
              <li><p>Aquaponics Monitoring System. <br></br> Kaggle | Google Colab</p></li> <br></br>
              <li><p>Predictive Maintenance for Manufacturing Equipment. <br></br> Kaggle | Google Colab </p></li> <br></br>
              <li><p>Stress Monitoring for Pilots. <br></br> Kaggle | Google Colab | FabLab </p></li> <br></br>
              <li><p>Cognitive Behavioral Therapy (CBT). <br></br> Kaggle | Google Colab</p></li> <br></br>
              <li><p>Emotion-Responsive Smart Lighting System. <br></br> Kaggle | Google Colab | FabLab </p></li> <br></br>
              <li><p><strong>+5 Projects</strong></p></li>
            </ul>
          <br></br>
        </div>
        <div className='hero_accordion_section_5'>
        <h4>Certifications<sup><span class="mdi--certificate-outline"></span></sup></h4>
            <br></br>
            <ul>
              <li><p> <strong>Google Certificatied</strong>  <br></br> UX Design <br></br>Digital Marketing <br></br> E-Commerce <br></br> Data Analytics  <br></br> AI-Powered Performance Ads <br></br> IT Support <br></br> Project Management  <br></br> Business Intelligence <br></br> Cybersecurity  <br></br> Cloud Engineer </p> </li>
              <br></br>
              <li><p><strong>MicroSoft Certificatied</strong> <br></br>Azure Developer Associate <br></br> Cybersecurity Architect Expert </p></li>
              <br></br>
              <li><p><strong>IBM Certificatied</strong> <br></br>Full Stack Software Developer<br></br> Data Analyst <br></br> DevOps & Software Engineering <br></br> Data Engineering  <br></br> Deep Learning  </p></li>
              <br></br>
             
              <li><p><strong>+32 Certificate's</strong></p></li>
            </ul>
            <br></br>
            


        </div>
      </div>
      <div className='hero_ask'>
        <div className='ask'>
          <span class="ci--coffe-to-go"></span>
          <input id='input-ask'
           placeholder='Ask Me Something ?' 
           maxLength="240"></input>
           <span class="ph--star-four-bold"></span>
        </div>
        <small>Can make mistakes. Check important info.</small>
      </div>
      

      
    </div>
    </>
  );
}

export default Hero;