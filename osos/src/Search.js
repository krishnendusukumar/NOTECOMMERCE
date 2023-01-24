import React from 'react'
import { useGlobalContext } from './context'
import { Link, NavLink } from 'react-router-dom';

const Search = () => {
    const { query, setQuery, isError } = useGlobalContext();
    return (
        <div className='movie__nav'>
            <div className="search-section">
                <h2>Search your favourite Movie</h2>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <input
                            type="text"
                            placeholder="search movie"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </form>
                <div className="card-error">
                    <p>{isError.show && isError.msg}</p>
                </div>
            </div>
            <div className="movie__home">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="movie__language">
                <Link to="/">Language</Link>
            </div>
            <div className="movie__genre">
                <Link to="/" >Genre</Link>
            </div>
            <div className="movie__login">
                <Link to="/login">Login</Link>
            </div>

        </div>
    )
}

export default Search
