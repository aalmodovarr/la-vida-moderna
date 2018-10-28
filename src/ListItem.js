import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { Button } from 'reactstrap';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    play(link) {
        window.location.replace(link);
    }

    render() {
        var moment = require('moment');
        moment().format();

        const pubDate = moment(this.props.pubDate).fromNow();

        return (
            <li >
                <div className="ListItem-background">
                    <div className="ListItem-main-column">
                        <h3>{this.props.description}</h3>
                        <h4>{this.props.name}</h4>
                    </div>
                    <div className="ListItem-info-column">
                        <h6>{pubDate}</h6>
                        <button className="play-button" onClick={() => this.play(this.props.link)}> Play </button>
                    </div>
                </div>
            </li >
        );
    }
}

export default ListItem;