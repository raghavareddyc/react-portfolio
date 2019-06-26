import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <h2>Raghava</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> Versatile Front-End developer and Microsoft Certified Professional with hands-on experience in designing and developing web applications. Skilled in developing Single Page Applications as per the business requirements using ReactJS, Angular frameworks. Adaptive at all phases of project lifecycle, including requirements gathering and user analysis to information architecture (IA), graphic user interface (GUI) design, implementation and supporting QA teams, bug fixing, and debugging production issues.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (252) 365-5538
                                    </ListItemContent>
                                </ListItem>
                                {/*<ListItem>*/}
                                    {/*<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>*/}
                                        {/*<i className="fa fa-fax" aria-hidden="true" />*/}
                                        {/*(123) 456-7890*/}
                                    {/*</ListItemContent>*/}
                                {/*</ListItem>*/}
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        raghava.c25@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        raghava.c25
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
