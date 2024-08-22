using AnimalKingdom;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

//TODO: FLYTTA DETTA TILL EN ADMIN SIDA FÖR ATT SKAPA UPP DJUR/LAND VIA WEBBSIDA------------------
//using var db = new AnimalContext();

//var firstAnimal = new Animal { Name = "Kapybara", Type = "Gnagare" };
//var secondAnimal = new Animal { Name = "Häst", Type = "Hovdjur" };
//var thirdAnimal = new Animal { Name = "Kanin", Type = "Hardjur" };

//var firstCountry = new Country { Name = "Sydamerika", Animals = new List<Animal>() };
//var secondCountry = new Country { Name = "Centralasien", Animals = new List<Animal>() };
//var thirdCountry = new Country { Name = "Europa", Animals = new List<Animal>() };
//firstCountry.Animals.Add(firstAnimal);
//secondCountry.Animals.Add(secondAnimal);
//thirdCountry.Animals.Add(thirdAnimal);

//db.Countries.AddRange(firstCountry, secondCountry, thirdCountry);

//db.SaveChanges();
//----------------------------------------------------------------------------------------------

app.Run();

