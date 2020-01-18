import * as React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        marginTop: 25,
        width: '100%'
    }
});

export const SearchBar: React.FunctionComponent<{}> = () => {
    const classes = useStyles();

    const [snippet, setSnippet] = React.useState('');

    const handleSnippetChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        setSnippet(event.target.value);
    };

    return (
        <div className={classes.searchContainer}>
            <TextField
                className={classes.searchBar}
                label="Code Snippet"
                InputProps={{
                    startAdornment: <InputAdornment position="start">&lt;&gt;</InputAdornment>,
                }}
                variant="outlined"
                onChange={handleSnippetChange}
            />
        </div>
    );
}