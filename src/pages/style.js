import styled from "styled-components";

export const Container = styled.header`
    border-bottom: '1px solid';
    border-color: '#ededed';
`

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    padding: 2rem 1rem 3rem;
    display: flex;
    align-items: top;
    justify-content: space-between;

    flex-wrap: wrap;

    a{
        color: inherit;
        text-decoration: none;
    }

    input{
        width: 100%;
        max-width: 300px;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;
        
        border: 1px solid #28334e;
        background: #28334e;

        font-weight: 400;
        font-size: 1rem;

        color: #fff;

        outline: transparent solid 2px;
        outline-offset: 2px;

        &::placeholder{
            color: #b0b4c9;
        }

        &:focus{
            border: 1px solid var(--blue);
        }

        & + input{
            margin-top: 1rem;
        }
    }
`