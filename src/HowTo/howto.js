
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./howto.css";

// Import Swiper styles
import 'swiper/css/pagination';


// import required modules

// import required modules
import { Keyboard,Pagination, Navigation } from "swiper/modules";
import { induction } from "../classes/induction";
import howTo1 from "../grandmaizerPhotos/howTo1.png";
import howTo2 from "../grandmaizerPhotos/2.png";
import howTo3 from "../grandmaizerPhotos/3.png";
import howTo4 from "../grandmaizerPhotos/4.png";
import howTo5 from "../grandmaizerPhotos/5.png";
import howTo6 from "../grandmaizerPhotos/6.png";
import howTo7 from "../grandmaizerPhotos/7.png";
import howTo8 from "../grandmaizerPhotos/8.png";
const colors = ["#fbadaf","#a4e0eb","#edb9d6","#fdca95","#cbb5e2"]
const steps=[
  new induction({
    title:"Step 1: Launch the Application",
    content:"•	Begin by double-clicking the application icon that locate at the desktop to open the application.",
    img:howTo1}
    ),
  new induction({
    title:"Step 2: Choose a Destination Folder",
    content:"•	Use your mouse to click on the folder icon to select the folder where you intend to save the songs at.",
    img:howTo2}
    ),
  new induction({
    title:"Step 3: Select the Destination Folder",
    content:'•	Left-click the desired folder and choose "Select Folder."',
    img:howTo3}
    ),  
    new induction({
      title:"Step 4: Search for Your Song",
      content:"•	Enter the song title and/or the performer's name in the search fields.",
      img:howTo4}
      ),
    new induction({
      title:"Step 5: Playback and Download",
      content:"•	If a video isn't available, click ''Watch on YouTube.'' If a video is available, click the play button to listen to the song. (Proceed to the next step only if a video isn't available.)",
      img:howTo5}
      ),
    new induction({
      title:"Step 6: Watch the Song",
      content:"•	Watch the song, and when you decide if this is the song you'd like to download, click the X button to exit.",
      img:howTo6}
      ),  
      new induction({
        title:"Step 7: Explore More Results (if needed)",
        content:'•	If you have not found your desired song, click the "Next" button and return to Step 5 until you locate the song you wish to download.',
        img:howTo7}
        ),
      new induction({
        title:"Step 8: Download the Song",
        content:'•	Click the "Download" button to save the song in your selected directory. Wait for the download button to reappear to ensure the process is complete. You can then return to Step 4 and repeat the process for other songs.',
        img:howTo8}
        ),
  ]
export const CardView =({step})=>{
    return <div >
            <img
            src={step.img}
            alt=""
            className="book-photo"
          />
    <div className="induction ">
    <div className="title">
      {step.title}
    </div>
    <br/>
    <div className="content">
      {step.content}
    </div>
    </div>
    </div>
}

export const HowTo=()=>{
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
    return (
        <>
        <div className="book-slide" style={{ width:"95%", margin:"auto"}} >
          <Swiper 
            slidesPerView={1}
            spaceBetween={1}
            loopedSlidesLimit={false}
            pagination={
              pagination
            }
            keyboard={{
              enabled: true,
            }}
            speed={500}
            navigation={true}
            loop={true}
            modules={[Keyboard,Pagination, Navigation]}
            className="mySwiper"
          >
            {

        steps.map((step,i)=>{
              return <SwiperSlide key={i} className='mainCard' style={{backgroundColor:colors[i%6]}} >
                <CardView step={step} />
              </SwiperSlide>
            })
            }
          </Swiper>
          </div>
        </>
      );
}