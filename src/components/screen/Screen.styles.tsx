import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    @media (max-width: 576px) {
        margin: 0 1rem;
    }
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }

`

