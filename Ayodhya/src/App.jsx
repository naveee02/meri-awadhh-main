import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/home/Home';
import Booking from './Components/booking/Booking';
import Ram_ki_Paidi from './Page2/Ram_ki_Paidi';
import Newspage from './Components/news/Newspage';
import EventPage from './Components/events/EventPage';
    import { AuthProvider } from './AuthContext';
    import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Hanumangarhi from './Page2/Hanumangarhi';
import Destination from './Components/places/Destination';
import Shri_Nageshwarnath_Temple from './Components/places/Shri_Nageshwarnath_Temple';
import BookingForm from './Components/booking/BookingForm';
import Kanak_Bhawan from './Page2/full_overview/Kanak_Bhawan';
import Tulsi from './Page2/full_overview/Tulsi';
import Treta_ke from './Page2/full_overview/Treta_ke';
import Jain from './Page2/full_overview/Jain';
import Choti_devi from './Page2/full_overview/Choti_devi';
import GuptarGhat from './Page2/full_overview/GuptarGhat';
import Gurudwaras from './Page2/full_overview/Gurudwaras';
import Ram_Mandir from './Page2/full_overview/Ram_Mandir';
import LoginForm from './Components/LoginForm';
import SingUpForm from './Components/SingUpForm';

function App() {

  return (
  <>
 <AuthProvider>
< BrowserRouter>
  <Header/>
 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Destination' element={<Destination/>} />
      <Route path='/Booking' element={<Booking/>}/>
      <Route path='/Hanumangarhi' element={<Hanumangarhi/>}/>
      <Route path="/Ram_ki_Paidi" element={<Ram_ki_Paidi/>}/>
      <Route path="/Shri-Nageshwarnath-Temple" element={<Shri_Nageshwarnath_Temple/>}/>
      <Route path="/News" element={<Newspage/>}/>
      <Route path="/events" element={<EventPage/>} />
      <Route path='/BookingForm' element={ <BookingForm/>}/>
      < Route path="/Kanak_Bhawan" element={<Kanak_Bhawan/>}/>
      <Route path='/Tulsi_Smarak' element={ <Tulsi/>} />
      <Route path='/Treta_ke' element={ <Treta_ke/>} />
      <Route path='/Jain_Shrines' element={<Jain/>}/>
      <Route path='/Choti_Devi' element={<Choti_devi/>} />
      <Route path='/GuptarGhat' element={<GuptarGhat/>} />
      <Route path='/Gurudwaras' element={<Gurudwaras/>} />
      <Route path='/Ram_Mandir' element={<Ram_Mandir/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/signup" element={<SingUpForm/>} />
    </Routes>  
  <Footer/>
 </BrowserRouter>     
  </AuthProvider> 
 </>  
  
  )
}

export default App
