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

    render() {
        var moment = require('moment');
        moment().format();

        const pubDate = moment(this.props.pubDate).fromNow();

        return (
            <Card style={{ marginBottom: "10px" }}>
                <CardContent style={{ padding: "5px" }} >
                    <div className="ListItem-background">
                        <div className="ListItem-main-column">
                            <h3 className="title">{this.props.description}</h3>
                            <h4 className="subtitle">{this.props.name}</h4>
                        </div>
                        <div className="ListItem-info-column"
                            style={{ position: "relative" }}>
                            <h6 style={{ position: "absolute", top: "0", right: "10px" }}>{pubDate}</h6>
                            <Button variant="fab" mini="true"
                                style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                                <PlayArrowIcon
                                    className="play-button"
                                    onClick={() => { this.props.onPlay(this.props.link) }} />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card >
        );
    }
}

export default ListItem;