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
    
    </>
}

export default Download  