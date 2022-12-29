import styled from 'styled-components'
import { COLORS } from '../../utils/colors'

export const Container = styled.select`
    border: 1px solid ${COLORS.SILVER};
    border-radius: 3px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    &:focus {
        outline: none;
        border-color: ${COLORS.SILVER};
    }
`

export const OptionItem = styled.option``

