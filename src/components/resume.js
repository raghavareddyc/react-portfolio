import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Raghava</h2>
                        <h4 style={{ color: 'grey' }}>UI Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Versatile Front-End developer hands-on experience in designing and developing web applications. o	Skilled in developing Single Page Applications as per the business requirements using ReactJS, Angular frameworks.</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear={2018}
                            schoolName="University of Houston Clear Lake"
                            schoolDescription="Master's in Computer Engineering - GPA: 3.55/4"
                        />
                        <Education
                            startYear={2012}
                            endYear={2016}
                            schoolName="Gitam University"
                            schoolDescription="Bachelor's in Electronics and Communication - GPA: 8.6/10"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear={'Present'}
                            jobName="Full Stack Developer at MR. COOPER"
                            jobDescription="Mr. Cooper is one of the nation's largest non-bank mortgage servicer and a leading mortgage lender. The current project I am working involves in the front-end development to its Loan tracker application where customers can upload their documents and can check the processing stage of their loans."
                        />
                        <Experience
                            startYear={2015}
                            endYear={2016}
                            jobName="Web Developer at SRASHTAA SOFTWARE"
                            // jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            progress={90}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={90}
                        />
                        <Skills
                            skill="ReactJS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={75}
                        />
                        <Skills
                            skill="Angular"
                            progress={70}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
