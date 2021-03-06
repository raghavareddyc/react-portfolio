import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, CardTitle, Card, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* project1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        {/*<CardTitle style={{ color: 'white', width: '330px', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover' }}>NodeJS</CardTitle>*/}
                        <CardTitle>NodeJS</CardTitle>
                        <CardText>
                            Weather Search
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/raghavareddyc/node-weather-website" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            GitHub</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* project2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        {/*<CardTitle style={{ color: 'white', width: '330px', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover' }}>ReactJS</CardTitle>*/}
                        <CardTitle>ReactJS+Redux</CardTitle>
                        <CardText>
                            Sample React Weather Search
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/raghavareddyc/React-weather-Search" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                                GitHub</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* project3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        {/*<CardTitle style={{ color: 'white', width: '330px', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover' }}>ReactJS</CardTitle>*/}
                        <CardTitle>ReactJS</CardTitle>
                        <CardText>
                            React Video Search
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/raghavareddyc/React-VideoSearch" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                                GitHub</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* project1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', width: '330px', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover' }}>Angular Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* project2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', width: '330px', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover' }}>Angular Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* project3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', width: '330px', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover' }}>Angular #3</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1></div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React/Node</Tab>
                    {/* <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab> */}
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Projects;
