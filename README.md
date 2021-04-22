
<!-- PROJECT LOGO -->
<br/>
<p align="center">
  <a href="https://github.com/nicode-io/Flutter_Fundamentals">
    <img src="./Images/SociAct.png" alt="Logo" width="350" height=300">
  </a>
</p>                                                           
<h2 align="center">Soci'Act</h2>
<p align="center">
  Social Network and Activities
  <br />
  <br />
  <a href="#description">Description</a>
  ·
  <a href="#technos">Technos</a>
  ·
  <a href="#packages">Packages</a>
  ·
  <a href="#releases">Releases</a>
  ·
  <a href="#contacts">Contacts</a>
</p>


---

### Description

This project aims to develop a social networking and activity management application.
The user will be able to create a personalised profile, create or register for events.
He can follow other users and chat with them in real time.

---

### Technos

*   .NET 5.0
*   REACT 17
*   ENTITY 6
*   MOBX 6

---

### Packages

*   Backend
    +   AutoMapper.Extensions.Microsoft.DependencyInjection
    +   MediatR.Extensions.Microsoft.DependencyInjection
    +   Microsoft.EntityFrameworkCore.Design
    +   Microsoft.EntityFrameworkCore.Sqlite
    +   Swashbuckle.AspNetCore (Swagger)
*   Frontend
    +   axios
    +   semantic-ui
    +   typeScript

---

### Releases

-   [v0.0.3](#v003)
-   [v0.0.2](#v002)
-   [v0.0.1](#v001)
    
    ####    v0.0.3
    >   CQRS & Mediator pattern
    
    *   Backend
        +   SociApi
            *   Implement MediatR in BaseApiController
            *   Migrate services into ApplicationServiceExtensions
            *   Adds routes to ActivitiesController
                +   CreateActivity
                +   DeleteActivity
                +   EditActivity
        +   SociApplication
            *   Add Create (activity)
            *   Add Delete (activity)
            *   Add Edit (activity)
            *   Implement AutoMapper

    ####    v0.0.2
    >   Skeleton
        
    *   Frontend
        +   Init React frontend
        +   Add TypeScript
        +   First activities fetch with Axios
        +   Start basic design with Semantic-UI
    *   Backend
        +   SociApi
            *   Create API controller template
            *   Create Activities controller
            *   Add routes to ActivitiesController
                +   GetActivity
                +   GetActivities
            *   Remove example controller
        +   SociApplication
            *   Add Detail (of activity)
            *   Add List (of activities)
        +   SociOmain
            *   Create Activity class (model)
        +   SociStence
            *   Create DataContext
            *   Add Activities (Activity DbSet)
            *   First migration (Entity to Sqlite)
            *   Add seed for activities
    
    ####    v0.0.1
    >   Init Project
    
    *   Create API **SociApi**
        +   Backend in ASP.Net
    *   Create application *SociApplication*
        +   Frontend in React
    *   Create domain *SociOmain*
        +   Project Core
    *   Create persistence *SociStence*
        +   Database Link using Entity
    *   Init Readme.md


---

### Contacts



<a href="https://linkedin.com/in/nicolas-denoel">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/linkedin/linkedin-original.svg" alt="linkedin.com/in/nicolas-denoel" width="40" height="40" />
</a>
<a href="https://github.com/nicode_io">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg" alt="github.com/nicode-io" width="40" height="40" />
</a>  
<a href="https://twitter.com/nicode_io">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/twitter/twitter-original.svg" alt="twitter.com/nicode_io" width="40" height="40" />
</a>  
<br/>
<br/>
<a href="https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-05-26_2021-08-02">:calendar: My Developer Timeline</a>



