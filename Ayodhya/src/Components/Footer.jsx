import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

  const handlechange=(event)=>{
    alert("we will contact you soon")
  };
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/', '_blank');
  };
  const handlefacebookClick = () => {
    window.open('https://www.facebook.com/', '_blank');
  };
  const handlegmailClick = () => {
    window.open('https://www.gmail.com/', '_blank');
  };
  const handlegithubClick = () => {
    window.open('https://www.github.com/', '_blank');
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  return (
    <>
      <div className='footer_s bg-gray-800 mt-(3) pr-20'>

        <div className="footer-section">
          <Link to='/'>
          <h1 className='f-h1 '>Meri-AWADH</h1>

          </Link>
          <br />
          <br />
          <br />
          <h1 className='f-h1'>Contact Us</h1>
          <br />
          <p className='p-f'>Phone: +1-123-456-7890</p>

        </div>
        <div className="footer-section">
          <Link to="/Destination" onClick={scrollToTop}>
            <h3 className='site '>Top-Destination</h3>

          </Link>
          <ul className='ul-f'>
            <Link to="/Ram_Mandir" onClick={scrollToTop}>
              <li>Ram Mandir</li>
            </Link>
            <Link to='/Hanumangarhi' onClick={scrollToTop}>
              <li>HanumanGarhi</li>
            </Link>
            <Link to='/Ram_ki_Paidi' onClick={scrollToTop}>
              <li>Ram Ki Paidi</li>
            </Link>
            <Link to='/Kanak_Bhawan' onClick={scrollToTop}>
              <li>Kanak-Bhawan</li>

            </Link>
            <Link to='/Shri-Nageshwarnath-Temple'onClick={scrollToTop}>
              <li>Shri NageshwarNath Temple</li>

            </Link>
            <Link to='/Tulsi_Smarak'onClick={scrollToTop}>
              <li>Tulsi Smarak Bhawan</li>

            </Link>
            <Link to='/Treta_ke' onClick={scrollToTop}>

              <li>Treta ke Thakur</li>
            </Link>
            <Link to='/Choti_Devi' onClick={scrollToTop}>
              <li>Chhoti DeviKalli Temple</li>

            </Link>
            <Link to='/GuptarGhat'onClick={scrollToTop}>

            </Link>

            <Link to='/GuptarGhat' onClick={scrollToTop}>
            <li> Guptar Ghat</li>

            </Link>
          </ul>


          <h1 className='pl-28'>Copyright @2024</h1>

        </div>
        <div className="footer-section">
          <div className='last_sec pl-24 pt-7 text-black'>
            <input className='w-48  h-8 pl-3 ' type="e-mail" placeholder='Enter Gmail' /><br />
            <button className='bg-slate-300 h-7 w-24 mt-2 hover:bg-slate-600   ' onClick={handlechange}> Subscribe</button>


          </div>
          <div className='buttons'>
            <img className='Icons' src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png" onClick={handleInstagramClick} alt="" />
            <img  className='Icons' src="https://img.icons8.com/?size=48&id=13912&format=png"onClick={handlefacebookClick} alt="" />
            <img className='Icons' src="https://img.icons8.com/?size=48&id=P7UIlhbpWzZm&format=png"onClick={handlegmailClick} alt="" />
            <img className='Icons' src="https://img.icons8.com/?size=48&id=bVGqATNwfhYq&format=png" onClick={handlegithubClick} alt="" />
          </div>



        </div>
      </div>

    </>
  )
}

export default Footer