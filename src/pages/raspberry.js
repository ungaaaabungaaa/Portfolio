import React from 'react';
import '../styles/raspberry.css';
import '../styles/icons.css';
import Camera2 from '../resources/pi/Camera2.png'
import Pi from '../resources/pi/pi.png'
import GoPi from '../resources/pi/gopropi.png'
import Wifi from '../resources/pi/router.webp'
import Linefollowing from '../resources/pi/linefollowing.png'
import linefollowingcircuite from '../resources/pi/linefollowingcircuite.png'
import ReGen from '../resources/pi/RegenDrive.png'

function Raspberry() {
  return (
    <>
    <div className='Raspberry_Layout'>
        <div className='Raspberry_Layout_1'>
          <br></br>
          <br></br>
          <br></br>
          <h4><span class="mdi--plus"></span>&nbsp;&nbsp;&nbsp;Real Time Object Detection</h4>
          <br></br>
          <p>This project involves developing a real-time object detection system using a Raspberry Pi, capable of identifying and tracking objects in live video feeds. The system captures video frames from a connected camera, processes them using a pre-trained deep learning model such as YOLO (You Only Look Once), and displays the results with bounding boxes around the detected objects in near real-time.</p>
          <br></br>
          <img id='pi_image' src={Camera2}></img>
          <br></br>
          <p><strong>Real-time Object Detection: </strong> The system uses the Raspberry Pi to process live video streams and detect objects within the scene. A pre-trained YOLO deep learning model is employed to ensure fast and accurate detection of multiple objects, even in complex environments.</p> <br></br>
          <p><strong>Efficient Edge Processing:</strong> By leveraging the Raspberry Pi, the system performs real-time processing at the edge, eliminating the need for cloud-based services. This makes the solution more cost-effective, faster, and less dependent on external network resources.</p> <br></br>
          <img id='go_pi_image' src={GoPi}></img>
          <p><strong>YOLO Deep Learning Model:</strong> The YOLO model is known for its speed and accuracy in detecting objects, with the ability to process video frames in real time while drawing bounding boxes around detected objects. The model can classify and detect multiple objects simultaneously, including humans, vehicles, animals, and more.</p> <br></br>
          <p><strong>Video Frame Capture:</strong> The system continuously captures frames from a camera connected to the Raspberry Pi. These frames are passed through the YOLO model for object detection, with results rendered on the display, showing the bounding boxes and object labels.</p> <br></br>
          <p><strong>Near Real-time Feedback:</strong> The setup provides near real-time feedback, making it suitable for applications such as surveillance, automation, or robotics, where quick object recognition and response are critical.</p> <br></br>
          <h4><span class="mdi--plus"></span>&nbsp;&nbsp;&nbsp;ReGen Line Following Robot</h4>
          <br></br>
          <p>In this project, I developed a line-following robot equipped with regenerative braking, designed for competitions where the robot must solve mazes, avoid obstacles, and perform specific tasks. The system utilizes a Raspberry Pi to store the robot’s path and employs machine learning algorithms to optimize battery usage and charging time, ensuring efficient performance during competition tasks.</p><br></br>
          <br></br>
          <img id='wifi_image' src={Linefollowing}></img>
          <br></br>
          <br></br>
          <br></br>
          <p><strong>Regenerative Braking System:</strong>  To optimize energy efficiency, the robot is designed with a regenerative braking system. When the robot decelerates, the system captures kinetic energy and converts it back into electrical energy, recharging the battery and extending operational time. </p> <br></br>
          <p><strong>Path Storage & Optimization: </strong>Using a Raspberry Pi, the robot records its path as it navigates through mazes or obstacle courses. This path data is stored and analyzed to optimize future runs, reducing unnecessary movements and improving speed and battery efficiency. </p> <br></br>
          <p><strong>Machine Learning for Energy Optimization:</strong> The robot utilizes machine learning algorithms to analyze the stored path data and optimize its energy consumption. Over time, the robot learns the most efficient routes, minimizes battery drain, and determines optimal charging times to ensure peak performance during tasks.</p> <br></br>

        </div>
        <div className='Raspberry_Layout_2'>
          <br></br>
          <br></br>
          <h4>MY PI PROJECTS</h4>
          <br></br>
          <img id='pi_image_pi_board' src={Pi}></img>
          <br></br>
          <br></br>
          <h4><span class="mdi--plus"></span>&nbsp;&nbsp;&nbsp;Media Server NAS</h4>
          <br></br>
          <p>In this project, I transformed a Raspberry Pi into a fully functional media server, allowing for seamless media streaming and file sharing across multiple devices. This lightweight, cost-effective solution enables users to store, organize, and stream digital media such as movies, music, and photos directly to any device connected to the network.</p>
          <br></br>
          <img id='wifi_image' src={Wifi}></img>
          <p><strong>File Sharing & Storage:</strong> The server is also set up for file sharing, making it easy to access and store files such as documents, media, and backups from any networked device. This feature is perfect for centralized file management in a home or small office environment.</p><br></br>
          <p><strong>Efficient Resource Usage:</strong> The Raspberry Pi, with its low power consumption and compact size, serves as a cost-effective and energy-efficient alternative to traditional media servers, making it ideal for personal use or small-scale deployments.</p><br></br>
          <p><strong>Multi-device Support:</strong> The media server can stream content to multiple devices simultaneously without compromising quality. It supports multiple streaming formats and can transcode media files on the fly to ensure compatibility with various devices.</p>
          <p><strong>Remote Access:</strong> With remote access capabilities, users can stream their media library even when they are outside the home network, enabling a portable media experience.</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img id='pi_image_pi_board' src={ReGen}></img>
          <br></br>
          <br></br>
          <p><strong>Technologies Used:</strong> Raspberry Pi, Machine Learning Algorithms (Python), Regenerative Braking System, Line-Following Sensors, Obstacle Detection Sensors</p>
          <br></br>
          <p>This project demonstrates my ability to integrate advanced robotics, machine learning, and energy efficiency technologies into a single system, making it highly suitable for competitive environments where performance and endurance are critical.</p>
          <br></br>
         
        </div>
        <div className='Raspberry_Layout_3'>
          <p>Control Electronic Components For Physical Computing & Explore the Internet Of Things (IoT).</p>
          <br></br>
        </div>
    </div>
    </>
  );
}

export default Raspberry;