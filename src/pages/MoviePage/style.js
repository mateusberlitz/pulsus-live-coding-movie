import styled from "styled-components";

export const Container = styled.header`
    border-bottom: '1px solid';
    border-color: '#ededed';
`

export const MainContent = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    padding: 2rem 1rem 5rem;
    display: flex;
    align-items: top;
    justify-content: space-between;

    flex-wrap: wrap;

    a{
        color: inherit;
        text-decoration: none;
    }
`

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    padding: 3rem 2rem 2rem 3rem;
    display: flex;
    align-items: top;
    justify-content: center;

    flex-wrap: wrap;

    background: rgba(0,0,0,.2);

    a{
        color: inherit;
        text-decoration: none;
    }

    img{
        margin-right: 3rem;
        width: 100%;
        max-width: 300px;
    }

    span{
        opacity: 0.7;
        margin-bottom: 3rem;
        display: inline-block;
        width: 100%;
    }

    small{
        margin-bottom: 1rem;
        display: inline-block;
    }

    p{
        margin-bottom: 2rem;
    }

    div{
        width: 100%;
        max-width: calc(100% - 300px - 3rem);
    }

    h1{
        font-size: 3rem;
    }

    button{
        width: 100%;
        max-width: 300px;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;
        
        background: var(--blue);
        border: none;

        font-weight: 400;
        font-size: 1rem;

        color: #fff;

        outline: transparent solid 2px;
        outline-offset: 2px;

        &:hover{
            opacity: 0.8;
        }

        &:focus{
            border: 1px solid white;
        }
    }
`