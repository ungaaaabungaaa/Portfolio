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
      </div>
    </div>
    </>
  );
}

export default Home;