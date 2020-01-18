import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import SyntaxHighlighter from 'react-syntax-highlighter';

const useStyles = makeStyles({
    card: {
        width: '75%',
        marginTop: 15
    },
    owner: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 15,
    },
    ownerName: {
        marginLeft: 10
    },
    code: {
        marginTop: 25
    }
  });

export const Item: React.FunctionComponent<{}> = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    Repository Name
                </Typography>
                <div className={classes.owner}>
                    <Avatar>H</Avatar>
                    <Typography className={classes.ownerName} variant="h6" component="h3">
                        Owner
                    </Typography>
                </div>
                <Typography>
                    Filename
                </Typography>
                <SyntaxHighlighter className={classes.code} language="javascript" showLineNumbers={true}>
                    console.log(item);
                </SyntaxHighlighter>
                <Chip label="JavaScript"/>
            </CardContent>
            <CardActions>
                <Button size="small">Go To Repo</Button>
            </CardActions>
      </Card>
    );
}