import React, { useContext } from 'react';
import styled from 'styled-components';
// import { cards } from 'data/data';
import Card from 'components/molecules/Card/Card';
import { PlantContext } from 'providers/PlantProvider';

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Grid = () => {
    const {cards} = useContext(PlantContext);
    return (
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
}


export default Grid;