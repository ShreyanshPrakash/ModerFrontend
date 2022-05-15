import React, { FC } from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div``;

export const HomeComponent: FC<any> = (props: any) => {

    return (
        <HomeWrapper>
            <div data-testid="content">
                Hello world!
            </div>
        </HomeWrapper>
    )

}