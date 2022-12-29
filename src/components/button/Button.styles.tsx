import styled from 'styled-components'
import { COLORS } from '../../utils/colors'
import { BUTTON_TYPES } from '../../utils/types'

export const ButtonContainer = styled.button<{ buttonType: BUTTON_TYPES }>`
    background: ${(props) => {
        switch (props.buttonType) {
            case BUTTON_TYPES.PRIMARY:
                return COLORS.PRIMARY
            case BUTTON_TYPES.SECONDARY:
                return COLORS.SECONDARY
            case BUTTON_TYPES.DANGER:
                return COLORS.DANGER
            case BUTTON_TYPES.SUCCESS:
                return COLORS.SUCCESS
            case BUTTON_TYPES.WARNING:
                return COLORS.WARNING
            case BUTTON_TYPES.LIGHT:
                return COLORS.MERCURY
            case BUTTON_TYPES.INFO:
                return COLORS.INFO
            default:
                return COLORS.PRIMARY
        }
    }};

    border: 0px solid ${COLORS.TRANSPARENT};
    border-radius: 3px;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;
    font-size: 0.9rem;
    color: ${COLORS.WHITE};
    display: flex;
    align-items: center;
    min-height: 2.3rem;
    gap: 0.5rem;

    &:hover {
        opacity: 0.8;
    }
`
