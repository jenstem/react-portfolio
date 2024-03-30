import './App.css';
import Home from './Pages/home';
import About from './Pages/about';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
import Resume from './Pages/resume';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <div className="App">
            {/* <ToastContainer position='top-right' hideProgressBar theme='colored'/> */}
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
