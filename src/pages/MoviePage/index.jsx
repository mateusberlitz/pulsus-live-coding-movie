import { useEffect, useState } from 'react';
import { Logo } from '../../components/Logo';
import { api } from "../../services/api";
import { Container, Content, MainContent } from './style';
import { Link } from "react-router-dom";


export default function MoviePage(props){
    const id = props.match.params.id;
    const [movie, setMovie] = useState();

    useEffect(() => {
        api.get(`?i=${id}&type=movie&apikey=cfbeb247`)
            .then((response) => {
              console.log(response);
              if(response.data){
                setMovie(response.data);
              }else{
                setMovie({});
              }
            })
            .catch((error) => {
                console.warn(error);
            })
    }, []);

    console.log(movie);

    return movie ? (
        <>
            <Container>
              <MainContent>
                <Logo />

                <Link to={`/`}>
                    Voltar para a lista
                </Link>
              </MainContent>
            </Container>

            <Container>
              <Content>
                <img src={movie.Poster} alt={movie.Title} />

                <div>
                    <h1>{movie.Title}</h1>
                    <span>{movie.Year}</span>

                    <small>Resumo:</small>
                    <p>{movie.Plot}</p>

                    <small>Atores:</small>
                    <p>{movie.Actors}</p>

                    <button>Assistir</button>
                </div>
              </Content>
            </Container>
        </>
    ) :  (
      <>
            <Container>
              <MainContent>
                <Logo />

                <Link to={`/`}>
                    Voltar para a lista
                </Link>
              </MainContent>
            </Container>
        </>
    )
}