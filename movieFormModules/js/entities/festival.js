import Program from "./program.js"
import Movie from "./movie.js"

class Festival {
    constructor() {  
    this.listOfPrograms = [];
    this.listOfMovies = [];
}
    addProgram(program) {
        if (!program || !(program instanceof Program)) {
            console.log("Invalid input");
            return false;
        }
        return this.listOfPrograms.push(program) - 1;
}
    addMovie(movie) {
        if (!movie || !(movie instanceof Movie)) {
            console.log("Invalid input");
            return false;
        }
        return this.listOfMovies.push(movie) - 1;
    }
}

export default Festival;