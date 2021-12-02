import styled from "styled-components";

export const MovieStyle = styled.article`
    width: 24%;
    min-width: 280px;
    margin-bottom: 4rem;

    padding: 1rem;
    cursor: pointer;
    border: 1px solid transparent;

    transition: all 0.3s;

    img{
        margin-bottom: 1rem;
        width: 100%;
    }

    h2{
        margin-bottom: 0.6rem;
        opacity: 0.9;
    }

    span{
        opacity: 0.7;
    }

    &:hover{
        background: rgba(0,0,0,0.2);
        border: 1px solid var(--blue);
    }
`