import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Menu() {

    const routeCard = (route, routeName, descriptionSmall, descriptionLarge) => {
        return <Card sx={{ minWidth: 275, maxWidth: 350, }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {descriptionSmall}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet minima quaerat?
                    Culpa, incidunt, I love you Ankita a ex iure ullam vero consequatur pariatur autem
                    dignissimos inventore quasi aspernatur cupiditate?
                </Typography>
                <Typography variant="body2">
                    {descriptionLarge}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a href={route} style={{ textDecoration: 'none', color: 'blue' }}>{routeName}</a></Button>
            </CardActions>
        </Card>;
    }

    return (
        <div className='menu-content'>
            <div className='menu-header'><h1 className='clock'>Small Apps By Bissho</h1></div>
            <div className='menu-route-card'>
                {routeCard('/timer', 'Timer', 'Timer App', 'Your Daily Timer App to assist you')}
                {routeCard('/blog', 'Blog', 'Blog App', 'Your Daily Blog App to record your blogs')}
            </div>
        </div>
    );
}