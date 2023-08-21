import logo from "./logo.png"
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
     
   <div className="container"> 
      <img src= {logo} alt="logo" className="img-fluid"  />
      <h3 className="learn"> Dictionary</h3>
      <h4>what word would you like to look up?</h4>
     <div className="time">
    <main><Dictionary /></main> 
</div>

      <header className="App-header">
      
      </header>






















<footer className="foot">⚡️👩🏽‍💻This website was coded by, Athenah Coucean</footer>
<ul className="nav justify-content-center mt-5">
    <li className="nav-item">
        <a className="nav-link active" href="https://www.shecodes.io/" target="_blank"  rel="noreferrer" title="SheCodes profile">SheCodes</a>
    </li>
    
    <li className="nav-item">
        <a className="nav-link" href="https://linkedin.com/in/athenah-c-2639251a0" target="_blank" rel="noreferrer" title="linkedin profile">  <FontAwesomeIcon icon={faLinkedin} /></a>
    </li>
<li>
    <a className="nav-link" href="https://github.com/Athens410/dictionary-react.git" target="_blank" rel="noreferrer" title="github profile">   <FontAwesomeIcon icon={faGithub} /></a>
    </li>
<li className="nav-item ml-5">
        <a className="nav-link"   href="https://www.shecodes.io/" target="_blank"  rel="noreferrer" tabIndex="-1" aria-disabled="true">© 2021 SheCodes All rights reserved.</a>
    </li>

</ul>
</div>
    
    </div>








  );
}


