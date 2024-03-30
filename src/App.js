import './App.css';
import Home from './Pages/home';
import About from './Pages/about';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
import Resume from './Pages/resume';

function App() {
    return (
        <div className="App">
            <Header />
            <div id='home'>
                <Home />
            </div>
            <div id='about'>
                <About />
            </div>
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
