import React from 'react';
import '../styles/Footer.css';

function Footer() {
    const CreatorName = 'Tengiz Akhalaia';
    const linkToGithub = 'Github';
    return (
        <div className="footer">
            <h3>{CreatorName}</h3>
            <p>creation date: {(new Date).toDateString()}</p>
            <a href="https://github.com/TengizGit/Test.git" target="_blank" rel="noreferrer">{linkToGithub}</a>
        </div>
    );
}

export default Footer;