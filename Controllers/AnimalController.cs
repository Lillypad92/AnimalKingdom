using AnimalKingdom.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace AnimalKingdom.Controllers
{
    [ApiController]
    public class AnimalController : ControllerBase
    {
        private readonly AnimalContext _context;
        
        public AnimalController(AnimalContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/animal/getanimals")]
        public async Task<List<Animal>> GetAnimals()
        {
            
            var test = await _context.Animals.Select(a => a).ToListAsync();

            return test;
        }
    }
}
