import React from 'react';

const PreviewMovie = ({ genres, release_date, overview, vote_average, poster_path, title, name }) => {
    return (

        <>
            <div className="filmInfo">
                <div className="images">

                    {poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} /> : <h2>Ooops..there is no such movie, man</h2>}
                </div>
                <div className="filmInfoText">
                    <h1>
                        {name || title} ({parseInt(release_date)})
          </h1>
                    <p>User source {(vote_average) * 10}% </p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <ul className="">
                        {genres.map(genre => (
                            <li key={genre.id}> {genre.name} </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PreviewMovie;

