import React from 'react';
import styled from 'styled-components';
import { cards } from 'data/data';
import Card from 'components/molecules/Card/Card';

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