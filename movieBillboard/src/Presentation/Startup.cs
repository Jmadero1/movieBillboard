public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();


    var omdbApiConfig = Configuration.GetSection("OMDbApi");
    var omdbApiUrl = omdbApiConfig.GetValue<string>("BaseUrl");
    var omdbApiKey = omdbApiConfig.GetValue<string>("ApiKey");


    services.AddScoped<IOmdbApiService>(provider => new OmdbApiService(omdbApiUrl, omdbApiKey));

    // Registrar otros servicios
    services.AddDbContext<MovieDbContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
}
