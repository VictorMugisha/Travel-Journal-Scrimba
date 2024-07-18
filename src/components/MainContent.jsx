import React from 'react'
import Travel from './Travel'
import travels from '../data'

export default function MainContent() {
    const travelJournals = travels.map((travel, index) => (
        <>
            <Travel
                key={index}
                title={travel.title}
                location={travel.location}
                googleMapsUrl={travel.googleMapsUrl}
                startDate={travel.startDate}
                endDate={travel.endDate}
                description={travel.description}
                imageUrl={travel.imageUrl}
            />
            <div className='line'></div>
        </>
    ));

    return (
        <div className='travels'>
            {travelJournals}
        </div>
    );
}
