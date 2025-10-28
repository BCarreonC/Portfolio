import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialSidebar from './components/SocialSidebar';
import EmailSidebar from './components/EmailSidebar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-background-dark font-display text-text-dark-primary min-h-screen flex flex-col">
      <Header />
      <Hero />
      <SocialSidebar />
      <EmailSidebar />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
