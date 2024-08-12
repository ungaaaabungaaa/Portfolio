import React, { useState } from 'react';
import '../styles/work.css';
import Header from '../components/header';
import resumePDF from '../resources/Resume/resume.pdf';

function Home() {




  const [message, setMessage] = useState('');
  const [placeholder, setPlaceholder] = useState('Type your message here');

  const sendMessage = () => {
    if (!message.trim()) {
      setPlaceholder("Duhhhh, you typed nothing in!???");
    } else {
      const phoneNumber = '919945405632'; // Replace with the desired phone number
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      setPlaceholder('Type your message here'); // Reset placeholder after sending
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Function to open the PDF in a new tab
  const openResume = () => {
    window.open(resumePDF, '_blank');
  };

  

  return (
    <>
    <Header></Header>
    <div className='work'>
      <div className='work_section'>
        <h1 className='work_title'>Get in Touch</h1>
        <div className='work_inputs'>
            <input className='input'
            type="text"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setPlaceholder('Type your message here')} // Reset placeholder when focused
            />
            <button className='send' onClick={sendMessage}>Send</button>

        </div>
        <div className='resume_layout'>
          <h3  onClick={openResume} id='resume' className='my_resume'>My Resume</h3>
          <br></br>
          <svg  onClick={openResume} id='resume' xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 16 16">
            <path fill="white" d="m7.775 3.275l1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018a2 2 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042m-4.69 9.64a2 2 0 0 0 2.83 0l1.25-1.25a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0a.75.75 0 0 1-.018 1.042a.75.75 0 0 1-1.042.018a2 2 0 0 0-2.83 0l-2.5 2.5a2 2 0 0 0 0 2.83" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;