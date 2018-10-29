import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
                <div className="ListItem-background">
                    <div className="ListItem-main-column">
                        <h3 className="title">{this.props.description}</h3>
                        <h4 className="subtitle">{this.props.name}</h4>
                    </div>
                    <div className="ListItem-info-column">
                        <h6>{pubDate}</h6>
                        <IconButton aria-label="Play/pause">
                            <PlayArrowIcon
                                className="play-button"
                                onClick={() => this.play(this.props.link)} />
                        </IconButton>
                        {/* <button className="play-button" onClick={() => this.play(this.props.link)}> Play </button> */}
                    </div>
                </div>
            </li >
        );
    }
}

export default ListItem;