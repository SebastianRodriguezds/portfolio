import { SiLinkedin, SiGithub } from 'react-icons/si'; 
import { FaEnvelope, FaArrowAltCircleUp  } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Footer() {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(()=>{
    listenToScroll();
    window.addEventListener('scroll', listenToScroll);
    return ()=>{
      window.removeEventListener('scroll', listenToScroll);
    }
  }, []);

  const listenToScroll = ()=>{
    const heightToHideFrom = 1000;
    const winScroll = document.body.scrollTop ||
    document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
     setIsVisible(false);
   }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <> 
      <div id="contact" className="footer_container">
        <h2 className="footer_container-title">Contact</h2>
        <p className='footer_container-par'>Thank you for visiting my portfolio! If you're interested in working together or just want to chat, feel free to reach out. You can contact me via email or connect with me through my social media. Check out my LinkedIn for professional updates, visit my GitHub to see my latest projects, or simply drop me a message. I look forward to connecting with you!</p>
        <div className="footer_container-linkscontact">
          <ul>
            <li className="footer-link">
              <a href="https://www.linkedin.com/in/sebastianrodriguezds" target="_blank" rel="noopener noreferrer">
                <SiLinkedin  /> LinkedIn sebastianrodriguezds
              </a>
            </li>
            <li className="footer-link">
              <a href="https://github.com/SebastianRodriguezds" target="_blank" rel="noopener noreferrer">
                <SiGithub  /> GitHub: SebastianRodriguezds
              </a>
            </li>
            <li className="footer-link">
              <a href="mailto:sebastianrodriguezds@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope  /> Email: sebastianrodriguezds@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isVisible &&
      <FaArrowAltCircleUp id="hide" onClick={scrollToTop} className="scroll-to-top-icon" />}
    </>
  );
}
