import React from 'react';
import '../styles/Arduino.css';
import '../styles/icons.css';
import arduino_board from '../resources/arduino/audrino.webp';
import arm_Mechanics from '../resources/arduino/emgarmmechanism.webp';
import converyor from '../resources/arduino/conveyor.webp';
import Humanoidarm1 from '../resources/arduino/humoniodarm1.webp';
import plotter from '../resources/arduino/plotter.webp';
import robotarm1 from '../resources/arduino/sci-fiarm.webp';
import signature from '../resources/arduino/signature.webp';


function Arduino() {
  return (
    <>
    <div className='Arduino_Layout'>
      <div className='Arduino_Layout_Side_1'>
        {/* Empty for now   */}
      </div>
      <div className='Arduino_Layout_Side_2'>
        <h4><span class="mdi--plus"></span>&nbsp;&nbsp;&nbsp;ARDUINO UNO</h4>
        <br></br>
        <p>The Arduino Uno is an open-source microcontroller board based on the Microchip ATmega328P microcontroller and developed by Arduino.cc and initially released in 2010. Open-source electronic prototyping platform enabling users to create interactive electronic objects.</p><br></br>
        <p>programmable open-source microcontroller board that can be integrated into a variety of electronic projects. This board can be interfaced with other Arduino boards, Arduino shields</p>
        <br></br>
        <br></br>
        <img className='images' id='arduino_image' src={arduino_board}></img>
        <br></br>
        <br></br>
        <br></br>
        <h4><span class="mdi--plus"></span>&nbsp;&nbsp;&nbsp;OPEN CV CONVEYOR BELT </h4>
        <br></br>
        <br></br>
        <img className='images' id='conveyor_image' src={converyor}></img>
        <br></br>
        <br></br>
        <br></br>
        <p>An Arduino-controlled Conveyor Belt System With A Colour Sensor And Servo Enables Automated Sorting By Detecting And Separating Objects Based On Their Colour.</p>
        <br></br>
        <p>In this project, I designed and developed an automated conveyor belt system using an Arduino microcontroller, a color sensor, and a servo motor to streamline the sorting process based on object color. The system works by detecting the color of objects placed on the conveyor and automatically separating them into designated areas.</p>
        <br></br>
        <p>This project demonstrates my ability to integrate hardware and software to create a fully functional automation system, enhancing efficiency and reducing the need for manual labor in sorting tasks.</p>
        <br></br>
        <p><strong>Technologies Used :</strong>Arduino, TCS3200 Color Sensor, Servo Motor, Conveyor Belt Mechanism</p>
        <br></br>
        <br></br>
        <img className='images' id='humoniodarm1_imgage' src={Humanoidarm1}></img>
        <br></br>
        <br></br>
        <h4><span class="mdi--plus"></span>&nbsp;&nbsp;&nbsp;EMG BIONIC ARM</h4>
        <br></br>
        <p>An Arduino-powered Emg Bionic Arm Utilises Inmoov 3d Printing Files To Create A Prosthetic Arm That Can Be Controlled By Muscle Signals, Enabling Individuals With Limb Differences To Regain Functionality.</p>
        <br></br>
        <p>This project involves creating a prosthetic arm that can be controlled by muscle signals (EMG), empowering individuals with limb differences to regain functional control of their arm. Utilizing InMoov’s 3D printing files, I designed and developed a bionic arm driven by an Arduino microcontroller.</p>
        <br></br>
        <p>This project showcases my ability to merge biomedical technology, 3D printing, and microcontroller programming to create innovative solutions that positively impact people's lives.</p>
        <br></br>
        <p><strong>Technologies Used :</strong> Arduino, EMG Sensor, Servo Motors, InMoov 3D Printing Files</p>

      </div>
      <div className='Arduino_Layout_Side_3'>
        <br></br>
        <br></br>
        <br></br>
        <h4>MY UNO PROJECTS</h4>
        <br></br>
        <br></br>
        <br></br>
        <img className='images' id='plotter_image' src={plotter}></img>
        <br></br>
        <br></br>
        <h4><span class="mdi--plus"></span>&nbsp;&nbsp;&nbsp;NLP 2D PLOTTER</h4>
        <br></br>
        <p>Uses G-code Instructions To Precisely Control Tool Tip. By leveraging CM Laser library from the Inkscape, it can create intricate drawings & Designs.</p>
        <br></br>
        <p>This project involves the use of G-code instructions to precisely control the movement of a tool tip, enabling the creation of intricate designs and drawings. By leveraging the CM Laser Library in Inkscape, I developed a system that translates digital designs into physical outputs with high precision.</p>
        <br></br>
        <p>This project highlights my expertise in controlling precision machinery through G-code programming and demonstrates my ability to integrate software and hardware to achieve high levels of detail in automated design creation.</p>
        <br></br>
        <p><strong>Technologies Used:</strong> G-Code, CM Laser Library (Inkscape), CNC/Plotter Machine</p>
        <br></br>
        <br></br>
        <img className='images' id='signature_image' src={signature}></img>
        <br></br>
        <br></br>
        <h4><span class="mdi--plus"></span>&nbsp;&nbsp;&nbsp;EMG BIONIC ARM</h4>
        <br></br>
        <br></br>
        <img className='images' id='mechanics_image' src={arm_Mechanics}></img>
        <br></br>
        <br></br>
        <p><strong>G-Code Precision:</strong> The system uses G-code instructions, which are widely used in CNC machining and 3D printing, to accurately control the tool tip’s movement along the X, Y, and Z axes. This allows for highly detailed and intricate drawings to be produced.</p>
        <br></br>
        <p><strong>Integration with Inkscape:</strong> By integrating the CM Laser Library from Inkscape, a popular vector graphics software, I was able to convert digital designs into G-code that the system can interpret. This workflow simplifies the process of turning artistic designs into machine-executable commands.</p>
        <br></br>
        <br></br>
        <img className='images' id='mechanics_image' src={robotarm1}></img>
        <br></br>
        <br></br>
        <p><strong>Laser/CNC Adaptability:</strong>The system can be adapted for use with various tools, including laser cutters and CNC machines, making it versatile for both artistic and industrial applications. Whether for engraving, etching, or drawing, the system ensures high accuracy in reproducing complex patterns.</p>
        <br></br>
        <p> <strong>Scalable System :</strong> This setup can be scaled to work on different surface sizes, materials, and with various tools, offering flexibility for a wide range of projects—from small-scale artwork to larger industrial designs.</p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
    </>
  );
}

export default Arduino;