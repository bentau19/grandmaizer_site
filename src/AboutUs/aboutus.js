import './aboutus.css'
const AboutUs=()=>{
    return <>
        <div className="grid-container">
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>
    </div>
    <div className='aboutUs_container flex-row'>
        <div className="flex-container row1">
    <div className="aboutUs_cell ">
    Hey there! 👋🏼  <br/> I'm Ben, a 20-year-old software engineer.<br/>
    I specialize in professional development using React, Node.js, Python, and Flutter.
</div>
<div className="aboutUs_cell">
    I developed this application with love for my grandma, making it easy for her to download songs on her phone.
</div>
<div className="aboutUs_cell">
    My goal was to create a user-friendly platform that benefits not only seniors but also kids and adults. 
    I aimed for efficiency and accessibility, making the internet a friendlier place for everyone!
</div>
</div>
    </div></>
}

export default AboutUs