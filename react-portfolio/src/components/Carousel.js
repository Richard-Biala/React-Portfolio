import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

import workout from '../assests/images/workout.png';
import weather from '../assests/images/weather.png';
import scheduler from '../assests/images/scheduler.png';
import InnVenture from '../assests/images/InnVenture.png';
import landing from '../assests/images/landing.png';
import website from '../assests/images/website.png';

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'Workout-Tracker',
                    subTitle:'An Application to keep track of your progress!',
                    imgSrc: workout,
                    link: 'https://powerful-caverns-36215.herokuapp.com/stats',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Fully Responsive Web Design',
                    subTitle:'Website designed for all screens.',
                    imgSrc: website,
                    link: 'https://powerful-caverns-36215.herokuapp.com/stats',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Landing Page',
                    subTitle:'Detailed Lading Page for Website Develpoment',
                    imgSrc: landing,
                    link: 'https://richard-biala.github.io/landingpage/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Weather Dashboard',
                    subTitle:'A weather application with 5-Day forecast included.',
                    imgSrc: weather,
                    link: 'https://richard-biala.github.io/weather-board/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Day Scheduler',
                    subTitle:'A great way to keep track of your daily tasks!',
                    imgSrc: scheduler,
                    link: 'https://richard-biala.github.io/Daily-Wrk-Sched/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'InnVenture',
                    subTitle:'A Group Project Game with turn based combat!',
                    imgSrc: InnVenture,
                    link: 'https://dry-mountain-58151.herokuapp.com/',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
    
}

export default Carousel;
