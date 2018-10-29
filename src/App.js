import React, { Component } from "react";
import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from './ListItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      feed: [],
      loading: true,
      error: false
    }
  }

  componentDidMount() {
    // Note: some RSS feeds can't be loaded in the browser due to CORS security.
    // To get around this, you can use a proxy.
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

    let Parser = require('rss-parser');
    let parser = new Parser();

    parser.parseURL(CORS_PROXY + 'http://fapi-top.prisasd.com/podcast/playser/oh_my_lol/itunestfp/podcast.xml',
      (err, data) => {
        // console.log(data);
        let items = [];
        if (data != null) {
          items = data.items.filter(entry => entry.title.startsWith("La Vida Moderna"));
        }
        this.setState({ feed: items, loading: false, error: data == null })
      }
    )
  }

  render() {

    let content;

    if (this.state.loading) {
      content = <h4>Cargando...</h4>
    } else if (this.state.error) {
      content = <h4>Inténtelo de nuevo más tarde</h4>
    } else {
      content = <ul className="App-listcontainer">
        {this.state.feed.map(entry =>
          <ListItem key={entry.pubDate}
            name={entry.title}
            description={entry.content}
            pubDate={entry.pubDate}
            link={entry.guid}
          />)}
      </ul>;
    }

    return (
      <React.Fragment>
        <CssBaseline />
        {<div className="App">
          <AppBar className="App-appbar" position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                La vida moderna | Oh! My LOL
              </Typography>
              <img src="./lvm-oml.png"
                height='50px' width='50px' />
            </Toolbar>
          </AppBar>

          {content}

        </div >}
      </React.Fragment>

    );
  }
}

export default App;
