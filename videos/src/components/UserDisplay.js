export default function UserDisplay(props) {
    return (
        <div>
            <h1>
                Welcome to {props.location}, {props.userName}
            </h1>
            {props.favoriteMovies.map(movie => (
                <>
                    Title: {movie.title}<br></br>
                    Year: {movie.year}
                </>
            ))}
        </div>
    )
}
