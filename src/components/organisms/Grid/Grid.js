import React from 'react';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import pilea from 'assets/img/pilea-peperomioides.jpg';
import banana from 'assets/img/bananowiec.jpg';
import maranta from 'assets/img/maranta.jpg';
import epipreneum from 'assets/img/epipreneum.jpg';
import sansiveria from 'assets/img/sansiveria.jpg';

const cards = [
    {
        image: pilea,
        name: 'pieniążek',
        level: 'mid',
        date: '15/06/19',
    },
    {
        image: banana,
        name: 'bananowiec',
        level: 'mid',
        date: '15/06/20',
    },
    {
        image: maranta,
        name: 'maranta',
        level: 'hard',
        date: '15/06/19',
    },
    {
        image: epipreneum,
        name: 'epipreneum',
        level: 'easy',
        date: '05/09/17',
    },
    {
        image: sansiveria,
        name: 'sansiveria',
        level: 'easy',
        date: '15/06/20',
    },
    {
        image: maranta,
        name: 'maranta1',
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