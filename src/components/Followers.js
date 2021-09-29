import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardMedia';
import { CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Followers = (props) => {
    return(
        <div className="followers">
            {props.followers.map((person) => {
                return(
                    <Card sx={{ width: 400, margin: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={person.avatar_url}
                            alt="github follower avatar"
                            />
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {person.login}
                            </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small" style={{color:'green'}} onClick={() => {
                                window.open(`${person.html_url}`, "_blank")
                            }}>Visit Github</Button>
                            </CardActions>
                        </CardActionArea>
                        </Card>
                )
            })}
        </div>
    )
}

export default Followers;