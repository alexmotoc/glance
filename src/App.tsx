import React from 'react';
import './App.css';
import Fab from '@material-ui/core/Fab';
import { Item } from './components/Item';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto Mono'
  }
});

const useStyles = makeStyles({
  searchContainer: {
    display: 'flex',
    marginTop: 25,
    flexDirection: 'row'
  },
  defaultSearchBar: {
    marginTop: 25,
    width: '100%'
  },
  resultsSearchBar: {
    width: '50%'
  },
  defaultSearchButton: {
    marginTop: 10
  },
  resultsSearchButton: {
    marginLeft: 15
  },
  results: {
    marginTop: 25
  },
  item: {
    marginTop: 15
  }
});

enum Status {
  Main,
  Results
};

const App: React.FC = () => {
  const classes = useStyles();

  const [status, setStatus] = React.useState(Status.Main);
  const [snippet, setSnippet] = React.useState('');
  const [fade, setFade] = React.useState(true);

  const handleSnippetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSnippet(event.target.value);
  };

  const handleSearch = () => {
    setStatus(Status.Results);
    setFade(false);
  };

  return (
    <ThemeProvider theme={theme}>
      {status === Status.Results && 
        <div className="Results">
          <div className={classes.searchContainer}>
            <TextField
                className={classes.resultsSearchBar}
                label="Code Snippet"
                InputProps={{
                    startAdornment: <InputAdornment position="start">&lt;&gt;</InputAdornment>,
                }}
                variant="outlined"
                defaultValue={snippet}
                onChange={handleSnippetChange}
            />
            <Fab className={classes.resultsSearchButton} variant="extended" onClick={handleSearch}> 
              <SearchIcon />
              Search
            </Fab>
          </div>
          <Typography className={classes.results} variant="h4" component="h2">Results</Typography>
          <Item/>
        </div>
      }
      {status === Status.Main &&
        <div className="Landing">
          <Typography variant='h1'>Glance</Typography>       
          <TextField
              className={classes.defaultSearchBar}
              label="Code Snippet"
              InputProps={{
                  startAdornment: <InputAdornment position="start">&lt;&gt;</InputAdornment>,
              }}
              variant="outlined"
              onChange={handleSnippetChange}
          />
          <Fab className={classes.defaultSearchButton} variant="extended" onClick={handleSearch}> 
            <SearchIcon />
            Search
          </Fab>
        </div>          
      }
    </ThemeProvider>
  );
}

export default App;
