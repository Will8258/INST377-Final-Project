import PictureSlider from "../components/RandomSlider"

function Home() {
  return(
    <div className="homePage">
      <h1>Welcome to the Home Page for my INST377 Final Project</h1>
        <p>This webpage is a travel guide based solely on the weather. More information in
          the "About" section on using this site.
        </p>
      <p>In the meantime here is a random picture slider of travel photos.</p>
      <div className="pictures" style={{height: 612, width: 612}}>
        <PictureSlider/>
      </div>
    </div>
  )
}

export default Home