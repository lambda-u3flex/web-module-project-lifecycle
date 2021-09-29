import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';

const GithubCard = props => {
    return(
        <Card sx={{ 
            maxWidth: 600,
            backgroundColor: '#161618',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff'
            }}>
            <CardMedia
                component="img"
                alt="tim marchant"
                height="300"
                width="300"
                image={props.myData.avatar_url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.myData.name}
                </Typography>
                <Typography variant="body2" color="#fff">
                <a href="https://www.github.com/fromtimwithcode"
                    style={{ textDecoration: 'none', color: '#BB86FC', fontSize: '.8rem' }}>@{props.myData.login}</a>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{color:'#BB86FC'}}>{props.myData.followers} Followers</Button>
                <Button size="small" style={{color:'#BB86FC'}}>Visit Website</Button>
            </CardActions>
        </Card>
    )
}

export default GithubCard;