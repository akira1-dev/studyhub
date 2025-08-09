function App() {
    function non() {
        alert("None");
    }
    function OralCom() { window.location.href = "../PAGES/OralCom.html" }
    function EmpTech() { window.location.href = "../PAGES/EmpTech.html" }
    return (
<div>
    <header>
        <h2><i className="fas fa-book"></i> StudyHub</h2>
    </header>
    <div className="intro">
        <h1>My StudyHub</h1>
    </div>
    <br></br>
    <div className="main-study-area">
        <div className="main-study-body">
            <h2>Learning Material</h2>
            <div className="study-btn-area">
                <button className="studyBTN" onClick={OralCom}>Oral Communication</button>
                <button className="studyBTN" onClick={EmpTech}>Empowerment Technologies</button>
                <button className="studyBTN" onClick={non}>General Mathematics</button>
                <button className="studyBTN" onClick={non}>Fundamentals of Computer</button>
                <button className="studyBTN" onClick={non}>Personal Development</button>
                <button className="studyBTN" onClick={non}>Komunikasyon sa Filipino</button>
                <button className="studyBTN" onClick={non}>Design Program Logic</button>
                <button className="studyBTN" onClick={non}>HOPE#1</button>
                <button className="studyBTN" onClick={non}>Earth & Social Science</button>
            </div>
            <h2>Programming RoadMap</h2>
            <div className="study-btn-area">
                <button className="studyBTN" onClick={non}>Python</button>
                <button className="studyBTN" onClick={non}>JavaScript</button>
                <button className="studyBTN" onClick={non}>C++</button>
                <button className="studyBTN" onClick={non}>Java</button>
            </div>
        </div>
    </div>
    <footer>
        <small>&copy; StudyHub || Developed by: Akira (Owner) & Adrian (Frameworks)</small>
    </footer>
</div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
