import React from 'react';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import pilea from 'assets/img/pilea-peperomioides.jpg';
import banana from 'assets/img/bananowiec.jpg';
import maranta from 'assets/img/maranta.jpg';

const cards = [
    {
        image: pilea,
        name: 'Pieniążek',
        level: 'medium',
        date: '15/06/19',
    },
    {
        image: banana,
        name: 'bananowiec',
        level: 'medium',
        date: '15/06/20',
    },
    {
        image: maranta,
        name: 'maranta',
        level: 'hard',
        date: '15/06/19',
    },
    {
        image: pilea,
        name: 'Pieniążek',
        level: 'medium',
        date: '15/06/19',
    },
    {
        image: banana,
        name: 'bananowiec',
        level: 'medium',
        date: '15/06/20',
    },
    {
        image: maranta,
        name: 'maranta',
        level: 'hard',
        date: '15/06/19',
    },
];
const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Grid = () => (
    <StyledWrapper>
        {cards.map(item => (
            <Card 
                image={item.image}
                name={item.name}
                level={item.level}
                date={item.date}
                key={item.name}
                />
        ))}
    </StyledWrapper>
);

export default Grid;