import logo from './cover.png';
import img from './undefined.png';
import './App.css';
import Header from './Header'
import Gallery from './Gallery'
import Nav from './nav'
import TestGallery from './TestGallery'
import Contact from './Contact'
import Footer from './Footer'
function App() {
  return (
    <div className="App">

      <Nav/>
      <div className="header">
      <Header test="leee"/>
      <Gallery/>


      </div>
        <TestGallery/>
          <TestGallery/>
          <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
