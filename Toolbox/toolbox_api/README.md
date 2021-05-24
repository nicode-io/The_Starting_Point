#   API

##  First Endpoint & Database Waking Skeleton 
-   Create an API web application
-   Create controller to create endpoint / request result
    *   Keep and modify default **WeatherForecast** controller
-   Create model to create object structure
    *   With a field named **Id** Entity will automatically made it the primary key of the table
-   Install Microsoft.EntityFrameworkCore.Sqlite
-   Create DataContext class
    *   Make class inherit from **DbContext**
    *   Create constructor
    *   Create a DbSet to associate with the model
-   Setup database service in **Startup** file
    *   ```
        services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(_config.GetConnectionString("Data source=YourDBName.db"));
            }); 
        ``` 
        Load database context (here SQlite for example)
-   Create first migration
    *   Check if dotnet-ef tool is installed and updated
        +   Check install: ```dotnet tool install --global dotnet-ef```
        +   Check update: ```dotnet tool update --global dotnet-ef```
    *   From a terminal window in api directory, run ```dotnet ef migrations add InitialCreate```  
-   Create database
    *   From a terminal window in api directory, run ```dotnet ef database update```
    
