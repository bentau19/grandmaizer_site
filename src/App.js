
import './App.css';
import './AboutUs/aboutus'
import {Header} from'./Header/header'
import AboutUs from './AboutUs/aboutus';
function App() {
  return (
      <>
  <div style={{ textAlign:"center", color:"white"}}>
    <a className='appbar_cell' href="#aboutUs">ABOUT US</a>
    <div className='appbar_cell'>DOWNLOAD</div>
    <div className='appbar_cell'>HOW TO</div>
    <div className='appbar_cell'>DONATE</div>
  </div>
  <Header/>
  <div style={{height:"1000px"}}></div>
  <div id='aboutUs'/>
  <AboutUs />
  


</>
  );
}

export default App;
