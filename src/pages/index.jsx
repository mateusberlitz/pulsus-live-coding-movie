import { useEffect, useState } from 'react';
import { Logo } from '../components/Logo';
import { Movie } from '../components/Movie';
import { api } from "../services/api";
import { Container, Content } from './style';

export default function Home(){
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        api.get(`?s=${search}&type=movie&apikey=cfbeb247`)
            .then((response) => {
              if(response.data.Search){
                setMovies(response.data.Search);
              }else{
                setMovies([]);
              }

              setLoading(false);
            })
            .catch((error) => {
                console.warn(error);
                setLoading(false);
            })
    }, [search, setSearch]);

    const handleChangeSearch = async (event) => {
      setLoading(true);
      setSearch(event.target.value);
    }

    return(
        <>
            <Container>
              <Content>
                <Logo />

                <input type="text" placeholder="Procure seu filme" value={search} onChange={handleChangeSearch}/>
              </Content>
            </Container>

            <Container>
              <Content>
                <p>{search !== '' ? (movies.length > 0 ? `${movies.length} itens encontrados`: 'Nenhum item foi encontrado com o texto informado') : 'Digite no campo o filme que deseja :D'}</p>

                <span>{loading ? 'Carregando...' : ''}</span>
              </Content>

              <Content>
                {movies && movies.map((movie, index) => {
                  return (
                    <Movie key={`${index}-${movie.imdbID}`} movie={movie}/>
                  );
                })}
              </Content>
            </Container>
        </>
    )
}