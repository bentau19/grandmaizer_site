
import './App.css';
import './AboutUs/aboutus'
import {Header} from'./Header/header'
import AboutUs from './AboutUs/aboutus';
import Download from './Download/download';
import { HowTo } from './HowTo/howto';
function App() {
  return (
      <>
  <div style={{ textAlign:"center", color:"white"}}>
  <a href="#aboutUs" className="custom-link">
  <div className='appbar_cell'>ABOUT US</div>
</a>
<a href="#download" className="custom-link">
<div className='appbar_cell'>DOWNLOAD</div>
</a>
<a href="#howto" className="custom-link">
<div className='appbar_cell'>HOW TO</div>
</a>
    
    
    <div className='appbar_cell'>DONATE</div>
  </div>
  <Header/>
  {/* <div style={{height:"1000px"}}></div> */}
  <div id='aboutUs'/>
  <AboutUs />
  <div id='download'/>
  <Download/>
  <div id='howto'/>
  <HowTo/>


</>
  );
}

export default App;
