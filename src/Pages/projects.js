import React from 'react';
import ProjectCard from '../components/Project/ProjectCard';
import './projects.css';
import Horiseon from '../assets/app-images/horiseon.jpg';
import PWGenerator from '../assets/app-images/pw-generator.jpg';
import CodeQuiz from '../assets/app-images/code-quiz.jpg';
import WorkDay from '../assets/app-images/work-day-scheduler.jpg';
import Weather from '../assets/app-images/weather-app.jpg';
import PWA from '../assets/app-images/PWA.jpg';
import SocialNetwork from '../assets/app-images/social-network.jpg';
import TechBlog from '../assets/app-images/tech-blog.jpg';
import RhythmReviews from '../assets/app-images/rhythm-reviews.jpg';
import ECommerceBackend from '../assets/app-images/ecommerce.jpg';
import EmployeeTracker from '../assets/app-images/employee-tracker.jpg';
import RhythmReviews2 from '../assets/app-images/rhythmreview2.jpg';
import Revents from '../assets/app-images/revents.jpg';
import Newsfeed from '../assets/app-images/python-newsfeed.jpg';
import SpaceInvasion from '../assets/app-images/space_invasion.jpg';
import Cleaner from '../assets/app-images/python-desktop-cleaner.jpg';
import Retail from '../assets/app-images/retail-site-scraper.jpg';
import StockMarket from '../assets/app-images/stock-market-scraper.jpg';
import Auction from '../assets/app-images/auction-site-scraper.jpg';
import Dragon from '../assets/app-images/houseOfTheDragon.jpg';
import DjangoBlog from '../assets/app-images/django-blog.jpg';
import WeatherApp from '../assets/app-images/django-weather-app.jpg';
import Calculator from '../assets/app-images/calculator.jpg';
import StudentDB from '../assets/app-images/postgresqldb.jpg';
import Compressor from '../assets/app-images/compressor.jpg';
import Converter from '../assets/app-images/converter.jpg';
import Validator from '../assets/app-images/pw-validator.jpg';
import Generator from '../assets/app-images/qr-code.jpg';
import Credit from '../assets/app-images/cc-validator.jpg';
import CSV from '../assets/app-images/csv-converter.jpg';
import PDF from '../assets/app-images/pdf-generator.jpg';
import Invoice from '../assets/app-images/invoice-generator.jpg';
import CV from '../assets/app-images/cv-generator.jpg';
import Paint from '../assets/app-images/paint-app.jpg';
import Inventory from '../assets/app-images/inventory.jpg';
import Budget from '../assets/app-images/budget_manager.jpg';
import Tasks from '../assets/app-images/to-do-app.jpg';
import Thoughts from '../assets/app-images/deep-thoughts.jpg';
import WordMatch from '../assets/app-images/wordmatch.jpg';
import CatWorx from '../assets/app-images/catworx.jpg';
import Dictionary from '../assets/app-images/dictionary-app.jpg';

const projectData = [

    { title: 'Employee Badge App', description: 'A C# + SkiaSharp App', imageUrl: CatWorx, url: <a href="https://github.com/jenstem/CatWorx">GitHub</a>, site: <a href="https://github.com/jenstem/CatWorx">Gif available on GitHub</a> },
    { title: 'Python Dictionary App', description: 'A Python + Tkinter App', imageUrl: Dictionary, url: <a href="https://github.com/jenstem/python-dictionary">GitHub</a>, site: <a href="https://github.com/jenstem/python-dictionary">Gif available on GitHub</a> },
    { title: 'Word Match App', description: 'A Python + Flask App', imageUrl: WordMatch, url: <a href="https://github.com/jenstem/python-word-match">GitHub</a>, site: <a href="https://github.com/jenstem/python-word-match">Gif available on GitHub</a> },
    { title: 'Deep Thoughts App', description: 'An AWS + React App', imageUrl: Thoughts, url: <a href="https://github.com/jenstem/aws2">Private GitHub Repo</a>, site: <a href="https://youtu.be/yulIIdO484M">View YouTube Video</a> },
    { title: 'Python To Do App', description: 'A Python & Django To Do List App', imageUrl: Tasks, url: <a href="https://github.com/jenstem/django-to-do-app">GitHub</a>, site: <a href="https://github.com/jenstem/django-to-do-app">Gif available on GitHub</a> },
    { title: 'Python Budget App', description: 'A Python & Flask Budget Manager App', imageUrl: Budget, url: <a href="https://github.com/jenstem/python-expense-manager">GitHub</a>, site: <a href="https://github.com/jenstem/python-expense-manager">Gif available on GitHub</a> },
    { title: 'Python Inventory App', description: 'A Python, PyQt & SQLite App', imageUrl: Inventory, url: <a href="https://github.com/jenstem/python-inventory-app">GitHub</a>, site: <a href="https://github.com/jenstem/python-inventory-app">Gif available on GitHub</a> },
    { title: 'Python Paint App', description: 'A Python & PyQt Paint App', imageUrl: Paint, url: <a href="https://github.com/jenstem/python-paint-app">GitHub</a>, site: <a href="https://github.com/jenstem/python-paint-app">Gif available on GitHub</a> },
    { title: 'Python Automated CV Generator App', description: 'A Python CV Generator App', imageUrl: CV, url: <a href="https://github.com/jenstem/automated-cv-generator">GitHub</a>, site: <a href="https://github.com/jenstem/automated-cv-generator">Gif available on GitHub</a> },
    { title: 'Python Invoice Generator App', description: 'A Python & FPDF Invoice Generator App', imageUrl: Invoice, url: <a href="https://github.com/jenstem/pdf-invoice-generator">GitHub</a>, site: <a href="https://github.com/jenstem/pdf-invoice-generator">Gif available on GitHub</a> },
    { title: 'Python PDF Generator App', description: 'A Python & FPDF PDF Generator App', imageUrl: PDF, url: <a href="https://github.com/jenstem/python-pdf-generator">GitHub</a>, site: <a href="https://github.com/jenstem/python-pdf-generator">Gif available on GitHub</a> },
    { title: 'Python CSV to PDF Converter App', description: 'A Python & FPDF CSV to PDF Converter App', imageUrl: CSV, url: <a href="https://github.com/jenstem/csv-to-pdf-converter">GitHub</a>, site: <a href="https://github.com/jenstem/csv-to-pdf-converter">Gif available on GitHub</a> },
    { title: 'Python Credit Card Validator App', description: 'A Python Credit Card Validator App', imageUrl: Credit, url: <a href="https://github.com/jenstem/credit-card-validator">GitHub</a>, site: <a href="https://github.com/jenstem/credit-card-validator">Gif available on GitHub</a> },
    { title: 'Python QR Code Generator App', description: 'A Python, PyQRCode & Pillow App', imageUrl: Generator, url: <a href="https://github.com/jenstem/qr-code-generator">GitHub</a>, site: <a href="https://github.com/jenstem/qr-code-generator">Gif available on GitHub</a> },
    { title: 'Python Password Validator App', description: 'A Python & bcrypt App', imageUrl: Validator, url: <a href="https://github.com/jenstem/python-password-validator">GitHub</a>, site: <a href="https://github.com/jenstem/python-password-validator">Gif available on GitHub</a> },
    { title: 'Python Text to Speech Converter App', description: 'A Python & Tkinter App', imageUrl: Converter, url: <a href="https://github.com/jenstem/text-to-speech-converter">GitHub</a>, site: <a href="https://github.com/jenstem/text-to-speech-converter">Image available on GitHub</a> },
    { title: 'Python Compressor App', description: 'A Python & Tkinter App', imageUrl: Compressor, url: <a href="https://github.com/jenstem/python-compressor">GitHub</a>, site: <a href="https://github.com/jenstem/python-compressor">Gif available on GitHub</a> },
    { title: 'PostgreSQL Database App', description: 'A Python, PostgreSQL & Tkinter App', imageUrl: StudentDB, url: <a href="https://github.com/jenstem/postgresql-database">GitHub</a>, site: <a href="https://github.com/jenstem/postgresql-database">Gif available on GitHub</a> },
    { title: 'Python Calculator App', description: 'A Python & Tkinter App', imageUrl: Calculator, url: <a href="https://github.com/jenstem/python-calculator-app">GitHub</a>, site: <a href="https://github.com/jenstem/python-calculator-app">Gif available on GitHub</a> },
    { title: 'Django Weather App', description: 'A Python, Django, OpenWeather API App', imageUrl: WeatherApp, url: <a href="https://github.com/jenstem/django-weather-app">GitHub</a>, site: <a href="https://github.com/jenstem/django-weather-app">Gif available on GitHub</a> },
    { title: 'Django REST API Blog', description: 'A Python, Django, REST API App', imageUrl: DjangoBlog, url: <a href="https://github.com/jenstem/django-rest-api-blog">GitHub</a>, site: <a href="https://github.com/jenstem/django-rest-api-blog">Gif available on GitHub</a> },
    { title: 'Selenium Web Scraper', description: 'A Python & Selenium Web Scraper App', imageUrl: Dragon, url: <a href="https://github.com/jenstem/selenium-web-scraper">GitHub</a>, site: <a href="https://github.com/jenstem/selenium-web-scraper">Gif available on GitHub</a> },
    { title: 'Web Scraper - Auction Site', description: 'A Python Web Scraper App', imageUrl: Auction, url: <a href="https://github.com/jenstem/web-scraper-auction-site">GitHub</a>, site: <a href="https://github.com/jenstem/web-scraper-auction-site">Image available on GitHub</a> },
    { title: 'Web Scraper - Stock Market', description: 'A Python Web Scraper App', imageUrl: StockMarket, url: <a href="https://github.com/jenstem/web-scraper-stock-market">GitHub</a>, site: <a href="https://github.com/jenstem/web-scraper-stock-market">Image available on GitHub</a> },
    { title: 'Web Scraper - Retail Site', description: 'A Python Web Scraper App', imageUrl: Retail, url: <a href="https://github.com/jenstem/web-scraper-retail-site">GitHub</a>, site: <a href="https://github.com/jenstem/web-scraper-retail-site">Image available on GitHub</a> },
    { title: 'Python Desktop Cleaner', description: 'An Automated Python Desktop Cleaner', imageUrl: Cleaner, url: <a href="https://github.com/jenstem/python-desktop-cleaner">GitHub</a>, site: <a href="https://github.com/jenstem/python-desktop-cleaner">Gif available on GitHub</a> },
    { title: 'Space Invasion', description: 'A Python Pygame game', imageUrl: SpaceInvasion, url: <a href="https://github.com/jenstem/space_invasion">GitHub</a>, site: <a href="https://github.com/jenstem/space_invasion">"Gif available on GitHub"</a> },
    { title: 'The Python Newsfeed', description: 'A Python Flask MySQL newsfeed site', imageUrl: Newsfeed, url: <a href="https://github.com/jenstem/the-python-newsfeed">GitHub</a>, site: <a href="https://the-python-newsfeed-aebfc671fd04.herokuapp.com/">View Website</a> },
    { title: 'Revents', description: 'A React Redux Firebase Typescript event site', imageUrl: Revents, url: <a href="https://github.com/jenstem/Revents">GitHub</a>, site: <a href="https://revents-2023-6b66b.firebaseapp.com/events">View Website</a> },
    { title: 'Rhythm Reviews 2.0', description: 'A React review site', imageUrl: RhythmReviews2, url: <a href="https://github.com/group2-project3/rhythm-reviews-2.0">GitHub</a>, site: <a href="https://rhythm-reviews-v2-a30efa7f58da.herokuapp.com/">Not Available</a> },
    { title: 'PWA Text Editor', description: 'Text editor web application', imageUrl: PWA, url: <a href="https://github.com/jenstem/pwa-text-editor">GitHub</a>, site: <a href="https://www.youtube.com/shorts/yxEn1dpDuZo">View Youtube Video</a> },
    { title: 'Social Network API', description: 'A command line invoked network api', imageUrl: SocialNetwork, url: <a href='https://github.com/jenstem/social-network-api'>GitHub</a>, site: <a href="https://www.youtube.com/watch?v=5fiwiHfIDHg">View Youtube Video</a> },
    { title: 'Tech Blog', description: 'CMS-style blog site', imageUrl: TechBlog, url: <a href="https://github.com/jenstem/tech-blog">GitHub</a>, site: "Not Available" },
    { title: 'Rhythm Reviews', description: 'A CMS-style review site', imageUrl: RhythmReviews, url: <a href="https://github.com/group7-project2/rhythm-reviews">GitHub</a>, site: <a href="https://rhythm-reviews-8a43a75413f9.herokuapp.com/">Not Available</a> },
    { title: 'E-Commerce Backend', description: 'Express.js API', imageUrl: ECommerceBackend, url: <a href="https://github.com/jenstem/e-commerce-backend">GitHub</a>, site: <a href="https://www.youtube.com/watch?v=3DmoPdavAnE">View Youtube Video</a> },
    { title: 'Employee Tracker', description: 'Command line application', imageUrl: EmployeeTracker, url: <a href="https://github.com/jenstem/employee-tracker">GitHub</a>, site: <a href="https://www.youtube.com/watch?v=RX8-YfCXom0&t=1s">View Youtube Video</a> },
    { title: 'Weather Dashboard', description: 'JavaScript Weather Forecast app', imageUrl: Weather, url: <a href="https://github.com/jenstem/weather-dashboard">GitHub</a>, site: <a href="https://jenstem.github.io/weather-dashboard/">View Website</a> },
    { title: 'Work Day Scheduler', description: 'JavaScript Calendar app', imageUrl: WorkDay, url: <a href="https://github.com/jenstem/work-day-scheduler">GitHub</a>, site: <a href="https://jenstem.github.io/work-day-scheduler/">View Website</a> },
    { title: 'Coding Quiz Challenge', description: 'JavaScript quiz', imageUrl: CodeQuiz, url: <a href="https://github.com/jenstem/Coding-Quiz-Challenge">GitHub</a>, site: <a href="https://jenstem.github.io/Coding-Quiz-Challenge/">View Website</a> },
    { title: 'Password Generator', description: 'JavaScript Password Generator', imageUrl: PWGenerator, url: <a href="https://github.com/jenstem/Password-Generator">GitHub</a>, site: <a href="https://jenstem.github.io/Password-Generator/">View Website</a> },
    { title: 'Horiseon', description: 'HTML & CSS web page', imageUrl: Horiseon, url: <a href="https://github.com/jenstem/horiseon_seo_web_page">GitHub</a>, site: <a href="https://jenstem.github.io/horiseon_seo_web_page/">View Website</a> },
];

export default function Projects() {
    return (
        <div id="projects" className="projects-container">
            <h2 className="portfolio-size">My Portfolio</h2>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                        <ProjectCard project={project} />
                ))}
            </div>
            <div className="add-space"></div>
            <div className="bar"></div>
        </div>
    );
};