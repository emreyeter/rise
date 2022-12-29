import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${COLORS.SILVER};
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`
export const Logo = styled.div`
    height: 50px;
    margin-top: 1rem;
    background : url('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
    background-size: contain;
    background-repeat: no-repeat;
`
