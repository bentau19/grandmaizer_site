import './download.css'
import img from'../photos/GrandMaizer.png'
const Download=()=>{
    return <>
    <div className="download_container">
        <h1 className="download_title">
            DOWNLOAD
        </h1>
    </div>
    <img src={img} className='download_img' alt="img" />
    <p style={{color:"white"}} >sdf</p>
    <button className='download_button'> DOWNLOAD</button>
    </>
}

export default Download  