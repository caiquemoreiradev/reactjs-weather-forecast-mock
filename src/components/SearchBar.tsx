import '../styles/searchBar.scss';

import SearchIcon from '../assets/search.png';

interface Props {
    search: () => void;
}

export const SearchBar = ({ search }: Props) => {

    return (
        <div className="container">
            <div className='search__container'>
                <input placeholder='Inisira o nome da cidade' />
                <button onClick={search}>
                    <img src={SearchIcon} alt="imagem de lupa para pesquisar a cidade" />
                </button>
            </div>
        </div>
    )
}