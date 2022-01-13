import React from 'react';
import {
    CaptionStyles,
    GridWrapper,
    TableStyles,
    TdStyles,
    TheadStyles,
    ThStyles,
    TrTheadStyles
} from "./GridStylesWrapper";


const Grid = ({title, config, data}) => (
    <GridWrapper>
        <CaptionStyles>{title}</CaptionStyles>
        <TableStyles>
            <TheadStyles>
            <TrTheadStyles>
                {config.map((item, index) =>
                    <ThStyles scope='col' key={index}>
                        {item.title}
                    </ThStyles>
                )}
            </TrTheadStyles>
            </TheadStyles>
            <tbody>
            {data.map((item, index) =>
                <tr key={index}>
                    {config.map((itemField, indexField) =>
                        <TdStyles key={`td${indexField}`}>
                            {
                                !itemField.component
                                    ? item[itemField.field]
                                    : itemField.component(item)
                            }
                        </TdStyles>
                    )}
                </tr>
            )}
            </tbody>
        </TableStyles>
    </GridWrapper>

);

export default Grid;