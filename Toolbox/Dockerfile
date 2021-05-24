FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /DockerSource

# Copy csproj and restore as distinct layers
COPY *.sln .
COPY toolbox_api/*.csproj ./toolbox_api/
RUN dotnet restore

# Copy everything else and build website
COPY toolbox_api/. ./toolbox_api/
WORKDIR /DockerSource/toolbox_api
RUN dotnet publish -c release -o /DockerOutput/Api --no-cache

# Final stage / image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /DockerOutput/Api
COPY --from=build /DockerOutput/Api ./
ENTRYPOINT ["dotnet", "toolbox_api.dll"]
