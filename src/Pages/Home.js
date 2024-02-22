import React from 'react';
import Week from '../Components/Week';
import { Container, Col, Row } from 'react-bootstrap';
export default function Home()
{
    return(
        <div className='container-fluid'>

            <h1>Home</h1>
            <Week/>
        </div>
    )
}