import styled from 'styled-components';
import Dropdown from '../../components/dropdown/Dropdown';
import Input from '../../components/input/Input';
import { COLORS } from '../../utils/colors';

export const CreateJobChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CreateJobContainer = styled.form`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: flex-end;
    gap: 10px;

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: stretch;
      
        ${CreateJobChildContainer}:nth-child(3) {
            align-self: flex-end;
        }
    }

    ${CreateJobChildContainer}:nth-child(1) {
        flex: 1;
    }
`
export const Table = styled.table`
    width: 100%;
    font-size: 0.9rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    thead {
        background: ${COLORS.SILVER};
    }

    th {
        @media (max-width: 576px) {
            display: none;
        }
    }

    tbody {
        @media (max-width: 576px) {
            border-top: 1px solid ${COLORS.SILVER};
        }
    }

    th, td {
        margin: 10px;
        &:nth-child(1) {
            margin-right: auto;
        }
        &:nth-child(2) {
            width: 100px;
        }
        &:nth-child(3) {
            width: 100px;
        }
    }
    tr {
        display: flex;
        align-items: center;
        @media (max-width: 576px) {
            align-items: flex-start;
            flex-direction: column;
            position: relative;
        }
    }
    td:nth-child(3) {
        display: flex;
        gap: 0.5rem;
        @media (max-width: 576px) {
            bottom: 0;
            right: 0;
            position: absolute;
        }
    }

`

export const ModalContainer = styled.form`
    display: flex;
    flex: 1;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
`

export const FilterContainer = styled.form`
    flex-direction: row;
    display: flex;
    background: ${COLORS.ZANTUR};
    padding: 10px;
    margin-top: 20px;
    gap: 10px;

    @media (max-width: 576px) {
        flex-direction: column;
    }

`

export const FilterInput = styled(Input)`
    flex: 1;
`

export const FilterDropdown = styled(Dropdown)`
    width: auto;
`
