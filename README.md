<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nicode-io/DockerCursus">
    <img src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original.svg" alt="Logo" width="250" height=250">
  </a>

<h3 align="center">DOCKER CURSUS</h3>

<p align="center">
    Discover the super powers of containers
    </br>
</p>
<p align="center">
    <br />
    <br />
    <a href="#description">Description</a>
    ·
    <a href="#cheatsheet">Main Commands</a>
    ·
    <a href="#tips">Tips</a>
    .
    <a href="#vocabulary">Vocabulary</a>
    .
    <a href="#timeline">Timeline</a>
    .
</p>

<br/>
---


##  Description

<p>
This non-exhaustive documentation aims to introduce the concepts and use of containerisation with Docker through the different commands.
</p>
<p>
Docker has become a must-have because of its ease of use and its possibilities to isolate an environment. Far from being exhaustive this repo aims to make the understanding of the tool accessible to beginners.
</p>
<p>
Being regularly confronted with questions related to the deployment of my various projects, it seemed obvious to me to turn to Docker in order to be able to gather my projects on the same VPS while managing to deploy various solutions going from Node applications to .Net applications among other examples
</p>

<br>
---


##  Cheatsheet

### Global

*   ```docker version``` Check version and docker installation
*   ```docker info``` Display config values of engine
*   ```docker help``` Get all commands you can use
*   ```docker system prune``` Purge Docker of all dangling images, containers, volumes and networks
    +   -a => Also removes unused files (not just dangling, so not associated with a container)
 
### Images Management

*   ```docker image ls``` See all images on your system
*   ```docker rmi -f containerId``` Force deleting image according to its id
    +   Also works with first numbers of image id and multiple id

### Run Stop Delete Container

*   ```docker container run --publish 8080:80 --detach --name webhost nginx``` run a container
    +   old: docker run 
    +   --publish systemPort:containerPort => Choose which port to open for container
    +   --detach => Use container in detached window
    +   --env => Add environment variables, -e also works
    +   --name => Set the name of the container
    +   imageName
*   ```docker stop container containerId``` Stop running a container
    +   Old: docker stop
    +   Also works with first numbers of container id and multiple id
*   ```docker container rm -f 133 24e 3f3``` Delete multiple containers
    +   Numbers are first number of container id
    +   -f => Forces delete of running containers

    
### List Logs Process 

*   ```docker container ls``` List all running containers
    +   old: docker ps
*   ```docker container ls -a``` List all containers installed
*   ```docker containers logs containerName``` Return log history of container
*   ```docker container top containerName``` See running processes in container
*   ```docker inspect containerName``` See a json of container's configuration
*   ```docker stats``` Streaming stats about all running containers
    +   ```docker stats containerName``` Streaming stats for specific container
    
### Work into a container

+   ####    Create and first-time running a container with interactive terminal
    *   ```docker run -it --name proxy nginx bash```
        +   -i  => Keep session open to receive terminal input (interactive)
        +   -t => Simulate a terminal (like SSH)
        +   bash => The kind of terminal used
        +   (nginx) => ContainerImage, nginx is an example

+   ####    Re-run a container with interactive terminal
    *   ```docker start -ai ubuntu``` 
        +   -a => attached
        +   -i => interactive

+   ####    Run a shell in a running container 
    *   ```docker container exec -it mysql bash```
        +   Give you root shell access into (mysql for example) container
    

### Network

+   ```docker container port containerName``` See ports used in container
+   ```docker container inspect --format '{{ .NetworkSettings.IPAddress }}' containerName``` Returns IP of you container
    +   --format => Allows you to get a clean result of your search while using **inspect** command
+   ```docker network ls``` List all Docker virtual networks
+   ```docker network inspect containerId``` Display information about virtual network
    +   Also works with first numbers of network id and multiple id
+   ```docker network rm containerId``` Remove virtual network
    +   Also works with first numbers of network id and multiple id


<br/>
---


##  Tips

*   ### Get into local docker VM (windows-MacOS)
    +   As Docker runs into a mini VM on Windows and Mac you won't see container's processes running with command ```ps aux```
    +   To see running processes:
        *   Run ```docker run -it --rm --privileged --pid=host justincormack/nsenter1```
        *   Type ````ps aux```` to look for all processes
        *   Type ```ps aux | grep processName``` to look for a specific process name
        *   Quit with ```exit```

*   ### Operations inside a container
    +   Once you used ```docker run -it --name proxy nginx bash``` you have access to terminal, you can then make operations like in a classic terminal like ```ls -al``` or ```apt install``` on a Linux-based container.
    +   It's important to understand that operations in your container persist inside the container but will never change the original image that you used to create the container
    +   If ```ps -aux``` is not available in container (like now in mysql) run ```apt update && apt install -y procps```
    
*   ### What is Alpine 
    +   Alpine is a minimalist Linux distribution, ideal for containers so.
    +   Image size of Alpine is only more than 5Mb (where Ubuntu for example is more than 70Mb)
    +   Alpine don't have bash installed, but you can use ```sh``` it's the terminal of this distribution
    +   **APK** is the package manager for Alpine 

*   ### About network
    +   Each container connected to a private virtual network "bridge"
    +   Each virtual network routes through NAT firewall on host IP
    +   All containers on a virtual network can talk to each other without -p
    +   Best practice is to create a new virtual network for each app

<br/>
---

## Timeline
> Current steps and history of my reconversion

<a href="https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-06-02_2021-09-08">
    <img src="./images/timeline.png" alt="Timeline">
</a>

[:calendar: Discover the timeline of my adventure to become a developer. Want to write your company's name on it ? Let's meet !](https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-05-26_2021-08-02)
