using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactASPCrud.Models;
using ReactASPCrud.Services;


namespace ReactASPCrud.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserService userService;
        public UsersController(UserService userService)
        {
            this.userService = userService;
        }
        // GET Users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return userService.GetAll();
        }
        // GET Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(userService.GetById(id));
        }
        // POST Users
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            return CreatedAtAction("Get", new { id = user.Id }, userService.Create(user));
        }
        // PUT Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] User user)
        {
            userService.Update(id, user);
            return NoContent();
        }
        // DELETE Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            userService.Delete(id);
            return NoContent();
        }
        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}