import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            < div style={{ width: '100%', heigth: ' 100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="http://rahulraj.work/assets/images/male.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>FullStackWebDeveloper</h1>

                            <hr />
                            <p>HTML/CSS/JavaScript | ES6 | React | TypeScript | Angular | NodeJS | Express | MongoDB | Java/.Net</p>

                            <div className="social-links">
                                {/* linkedin */}
                                <a href="https://www.linkedin.com/in/raghava-c-33a63315a/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/raghavareddyc" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/*/!* freecodecamp *!/*/}
                                {/*<a href="http://google.com" rel="noopener noreferrer" target="_blank">*/}
                                    {/*<i className="fa fa-free-code-camp" aria-hidden="true" />*/}
                                {/*</a>*/}
                                {/*/!* youtube *!/*/}
                                {/*<a href="http://google.com" rel="noopener noreferrer" target="_blank">*/}
                                    {/*<i className="fa fa-youtube-square" aria-hidden="true" />*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default LandingPage;
