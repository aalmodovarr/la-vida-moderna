import React, { Component } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    play(link) {
        window.open(link, "_parent");
    }

    render() {
        var moment = require('moment');
        moment().format();

        const pubDate = moment(this.props.pubDate).fromNow();

        return (
            <li >
                <Card >
                    <CardContent style={{ padding: "10px" }} >
                        <div className="ListItem-background">
                            <div className="ListItem-main-column">
                                <h3 className="title">{this.props.description}</h3>
                                <h4 className="subtitle">{this.props.name}</h4>
                            </div>
                            <div className="ListItem-info-column" style={{ position: "relative" }}>
                                <h6>{pubDate}</h6>
                                <Button variant="fab" mini="true" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                                    <PlayArrowIcon
                                        className="play-button"
                                        onClick={() => this.play(this.props.link)} />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </li >
        );
    }
}

export default ListItem;