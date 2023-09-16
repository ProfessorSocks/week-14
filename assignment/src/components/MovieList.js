import React from "react";
import Movie from "./Movie";
import Stars from "./Stars";

export default class MovieList extends React.Component{

    render() {
        const movies = [
            {
              id: 1,
              title: "The Shawshank Redemption",
              image: "https://example.com/shawshank-redemption.jpg",
              description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
            },
            {
              id: 2,
              title: "The Godfather",
              image: "https://example.com/godfather.jpg",
              description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            },
            {
              id: 3,
              title: "Pulp Fiction",
              image: "https://example.com/pulp-fiction.jpg",
              description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
            },
            {
              id: 4,
              title: "The Dark Knight",
              image: "https://example.com/dark-knight.jpg",
              description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
            },
            {
              id: 5,
              title: "Schindler's List",
              image: "https://example.com/schindlers-list.jpg",
              description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
            },
            {
              id: 6,
              title: "Forrest Gump",
              image: "https://example.com/forrest-gump.jpg",
              description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
            },
            {
              id: 7,
              title: "Inception",
              image: "https://example.com/inception.jpg",
              description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
            },
            {
              id: 8,
              title: "The Matrix",
              image: "https://example.com/matrix.jpg",
              description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
            },
            {
              id: 9,
              title: "The Silence of the Lambs",
              image: "https://example.com/silence-of-the-lambs.jpg",
              description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
            },
            {
              id: 10,
              title: "Saving Private Ryan",
              image: "https://example.com/saving-private-ryan.jpg",
              description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
            }
          ];


        return(
            <div className="container">
                {movies.map((movie) => (
                    <div>
                        <Movie key={movie.id} movie={movie} title={movie.title} image={movie.image} description={movie.description} id={movie.id} />
                        <Stars id={movie.id}/>
                    </div>
                ))}
                
            </div>
        );
    };


};