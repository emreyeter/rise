import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled.input<{ error?: boolean }>`
    border: 1px solid ${(props) => props.error ? COLORS.WARNING :  COLORS.SILVER};
    border-radius: 3px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: ${COLORS.BLACK};
    flex: 1;
    transition: all 0.2s ease-in-out;

    &:focus {
        outline: none;
        border-color: ${COLORS.SILVER};
    }
`;
