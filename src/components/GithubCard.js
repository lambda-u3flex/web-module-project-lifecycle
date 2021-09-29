import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GithubCard = props => {
    return(
        <>
        <Card sx={{ 
            maxWidth: 600,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000',
            marginTop: '2rem'
            }}>
            <CardMedia
                component="img"
                alt="tim marchant"
                height="300"
                width="300"
                image={props.myData.avatar_url}
            />
            <div className="test">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.myData.name}
                </Typography>
                <Typography variant="body2" color="#fff">
                <a href="https://www.github.com/fromtimwithcode"
                    style={{ textDecoration: 'none', color: 'green', fontSize: '.8rem' }}>@{props.myData.login}</a>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{color:'green'}}>{props.myData.followers} Followers</Button>
                <Button size="small" style={{color:'green'}} onClick={() => {
                    window.open("https://www.fromtimwithcode.com", "_blank")
                }}>Visit Website</Button>
            </CardActions>
            </div>
        </Card>
        <div>
        <img src="http://ghchart.rshah.org/fromtimwithcode" alt="fromtimwithcode's Github chart" style={{marginTop: '1.5rem'}} />
        </div>
        </>
    )
}

export default GithubCard;