import React from 'react';
import { LegendContent, LegendWrapper } from './styles';

const Legend = ({legendItems}) => {
    return (
        <LegendWrapper>
            {legendItems.map((item) => (
                <LegendContent key={item.title}
                    style={{
                        backgroundColor: item.color,
                        color: item.textColor,
                    }}                
                >
                    <span>{item.title}</span>
                </LegendContent>
            ))}
        </LegendWrapper>
    );
}
 
export default Legend;