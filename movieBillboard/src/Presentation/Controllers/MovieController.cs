// Controllers/MovieController.cs
using Microsoft.AspNetCore.Mvc;
using YourNamespace.Application.Interfaces;
using YourNamespace.Application.Dtos;

namespace YourNamespace.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IMovieService _movieService;

        public MovieController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieDto>>> GetAllMovies()
        {
            var movies = await _movieService.GetAllMovies();
            return Ok(movies);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MovieDto>> GetMovieById(string id)
        {
            var movie = await _movieService.GetMovieById(id);
            if (movie == null) return NotFound();
            return Ok(movie);
        }

        [HttpPost]
        public async Task<ActionResult> CreateMovie([FromBody] MovieCreateDto movieCreateDto)
        {
            await _movieService.CreateMovie(movieCreateDto);
            return CreatedAtAction(nameof(GetMovieById), new { id = movieCreateDto.Title }, movieCreateDto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateMovie(string id, [FromBody] MovieCreateDto movieCreateDto)
        {
            await _movieService.UpdateMovie(id, movieCreateDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteMovie(string id)
        {
            await _movieService.DeleteMovie(id);
            return NoContent();
        }

        [HttpGet("random")]
        public async Task<ActionResult<MovieDto>> GetRandomMovie()
        {
            var movie = await _movieService.GetRandomMovie();
            if (movie == null) return NotFound();
            return Ok(movie);
        }

        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<MovieDto>>> SearchMovies([FromQuery] string title)
        {
            var movies = await _movieService.SearchMovies(title);
            return Ok(movies);
        }
    }
}
