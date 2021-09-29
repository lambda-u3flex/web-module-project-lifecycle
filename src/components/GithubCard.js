import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Followers from './Followers';

const GithubCard = props => {
    const [showingFollowers, setShowingFollowers] = useState(false);

    const handleToggle = () => {
        setShowingFollowers(!showingFollowers)
    }

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
                alt="github avatar"
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
                <a href={`https://www.github.com/${props.myData.login}`}
                    style={{ textDecoration: 'none', color: 'green', fontSize: '.8rem' }}>@{props.myData.login}</a>
                </Typography>
            </CardContent>
            <CardActions>
                {console.log(props.myData)}
                <Button size="small" style={{color:'green'}} onClick={handleToggle}>{props.myData.followers} Followers</Button>
                <Button size="small" style={{color:'green'}} onClick={() => {
                    window.open(`${props.myData.blog}`, "_blank")
                }}>Visit Website</Button>
            </CardActions>
            </div>
        </Card>
        <div>
        <img src={`http://ghchart.rshah.org/${props.myData.login}`} alt="fromtimwithcode's Github chart" style={{marginTop: '1.5rem'}} />
        </div>
        <div className="followers-container">
            {showingFollowers
                ? <Followers followers={props.followerData} />
                : <div></div>}
        </div>
        </>
    )
}

export default GithubCard;