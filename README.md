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
    <a href="#docker">Docker</a>
    ·
    <a href="#docker-compose">Docker Compose</a>
    ·
    <a href="#timeline">Timeline</a>
    ·
    <a href="#sources">Sources</a>
</p>

---

## Description

<p>
This non-exhaustive documentation aims to introduce the concepts and use of containerisation with Docker through the different commands.
</p>
<p>
Docker has become a must-have because of its ease of use and its infinite possibilities. Far from being exhaustive this repo aims to make the understanding of the tool accessible to beginners. Create your custom and flexible development environment in an instant like you would assemble Lego blocks
</p>
<p>
Docker Compose give you more power to join multiple containers, networks, ... sky is the limit ! It makes using Docker containers even easier than it already is. 
</p>
<br/>

---

# DOCKER
-   [Cheatsheet](#cheatsheet)
    -   [Global](#global)
    -   [Images](#images)
        -   [Build Delete](#build-delete)
        -   [List Logs Process](#list-logs-process)
        -   [Tags Publish](#tags-publish)
    -   [Container](#container)
        -   [Run Stop Delete](#run-stop-delete)
        -   [List Logs Process](#list-logs-process)
        -   [Work into container](#work-into-container)
    -   [Network](#network)
        -   [Network information](#network-information)
        -   [Create (Dis)Connect Delete](#create-disconnect-delete)
    -   [Persistent Data](#persistent-data)
        -   [Volume](#volume)
        -   [Bind Mounting](#bind-mounting)
-   [Tips](#tips)
    -   [Global](#global)
    -   [Image](#image)
        -   [What is (not) an image](#what-is-not-an-image)
        -   [Building Dockerfile](#building-dockerfile)
        -   [Dockerfile KEYWORDS](#dockerfile-keywords)
    -   [Container](#container)
    -   [Network](#network)
        -   [Default virtual networks](#default-virtual-networks)
        -   [Network good practise](#network-good-practise)
        -   [Docker DNS](#docker-dns)
    -   [Persistent Data](#persistent-data)
        -   [Volume](#volume)
        -   [Bind Mounting](#bind-mounting)

    ##  Cheatsheet

    ### Global
    * ```docker version``` Check version and docker installation
    * ```docker info``` Display config values of engine
    * ```docker login``` Add login credentials to log on Docker Hub
        + ```cat .docker/config.json``` To see your credentials
    * ```docker logout``` Remove login credentials to log off Docker Hub
        + Log off every time if you don't trust the computer you're working on
    * ```docker help``` Get all commands you can use
    * ```docker system prune``` Purge Docker of all dangling images, containers, volumes and networks
        + -a => Also removes unused files (not just dangling, so not associated with a container)

    ### Images
    > Images are made up of file system changes and metadata

    +   #### Build Delete
        * ```docker image build -t imageName .``` Build an image from Dockerfile in current folder
            + -t => Define a name, and eventually a tage for built image
            + . => In current folder, otherwise use a path to Dokcerfile
        * ```docker rmi -f containerId``` Force deleting image according to its id
            + Also works with first numbers of image id and multiple id
    +   #### List Logs Process
        * ```docker image ls``` See all images on your system
        * ```docker image inspect imageName``` Display image metadata
        * ```docker image history imageName``` Show layers update in an image
    +   #### Tags Publish
        * ```docker image tag originalImageName accountName/newImageName``` Create a new image and tag from an existing
          image
            + Here tag is not specified and so will be **latest** by default
        * ```docker image tag accoutnName/imageName accountName/imageName:customTag``` Add a custom tag to an existing image
        * ```docker image push accountName/imageName``` Push an image to DockerHub repository
        * ```docker image push accountName/imageName:customTag``` Push an image to DockerHub with custom tag
            + As usual with Docker, if layers are similar it won't create a new image but associate the existing one with
              the new tag

    ### Container
    > A container is just a single read/write layer on to of image

    +   #### Run Stop Delete
        * ```docker container run --publish 8080:80 --detach --name webhost nginx``` run a container
            + old: docker run
            + --publish systemPort:containerPort => Choose which port to open for container
            + --detach => Use container in detached window
            + --env => Add environment variables, -e also works
            + --name => Set the name of the container
            + --link => Specify the virtual network to connect
            + --rm => automatically remove container when exist (execute something and destroy)
            + imageName
        * ```docker stop container containerId``` Stop running a container
            + Old: docker stop
            + Also works with first numbers of container id and multiple id
        * ```docker container rm -f 133 24e 3f3``` Delete multiple containers
            + Numbers are first number of container id
            + -f => Forces delete of running containers
    
    +   #### List Logs Process
        * ```docker container ls``` List all running containers
            + old: docker ps
        * ```docker container ls -a``` List all containers installed
        * ```docker containers logs containerName``` Return log history of container
        * ```docker container top containerName``` See running processes in container
        * ```docker inspect containerName``` Display container metadata
        * ```docker stats``` Streaming stats about all running containers
            + ```docker stats containerName``` Streaming stats for specific container
    
    +   #### Work into container
        
        * ```docker run -it --name proxy nginx bash``` Create and first-time running a container with interactive terminal
            + -i => Keep session open to receive terminal input (interactive)
            + -t => Simulate a terminal (like SSH)
            + bash => The kind of terminal used
            + (nginx) => ContainerImage, nginx is an example
        * ```docker start -ai ubuntu``` Re-run a container with interactive terminal
            + -a => attached
            + -i => interactive
        * ```docker container exec -it mysql bash``` Run a shell in a running container
            + Give you root shell access into (mysql for example) container

    ### Network
    
    *   ####    Network information
        + ```docker container port containerName``` See ports used in container
        + ```docker network inspect networkName``` Display info about virtual network
            * --format '{{ .NetworkSettings.IPAddress }}' Allows you to get a clean result of your search while using **
              inspect** command (IPAddress is an example)
        + ```docker network ls``` List all Docker virtual networks
        + ```docker network inspect containerId``` Display information about virtual network
            * Also works with first numbers of network id and multiple id
    *   #### Create (Dis)Connect Delete
        + ```docker network create --driver``` Create a virtual network
            * --driver => specify a driver, default is **bridge** (see tips for details)
        + ```docker network connect networkId containerId``` Connect a container to a virtual network
        + ```docker network disconnect networkId containerId``` Disconnect a container from a virtual network
        + ```docker network rm networkId``` Remove virtual network
            * Also works with first numbers of network id and multiple id
    *   #### Communicate within network
        + ```docker container exec -it containerOne ping containerTwo``` Check communication between two containers that are
          in the same virtual network
    *   #### DNS
        + ```docker container run -d --net networkName --net-alias netScopeAlias imageName``` Create a container with a
          custom network and alias
            * --net => specify virtual network name
            * --net-alias => specify an alias in the network-scope for the container

    ### Persistent Data
    +   ### Volume
        *   ```docker volume ls``` List all volumes
        *   ```docker volume inspect volumeId``` Display volume metadata and system path
            +   You can only browse volume in Linux, not directly on Windows or Mac, see tips.
        *   ```docker container run -d --name myCustomName -v volumeName:/dir/to/volume imageName``` Create a container with a named volume, you can then check volume more easily, for example with ```docker volume ls``` 
        *   ```docker volume rm volumeName``` Remove volume, works only if volume is not linked to a container
        *   ```docker volume prune``` Delete all volumes not used by at least one container
    +   ### Bind mounting
        *   Mac/Linux: ```docker container run -v /path/on/host:path/in/container``` Create bind mounting
            +   To avoid typing your full host path you can use ```-v $(pwd):/container/path``` that point to your active terminal directory
            +   For Windows: ```docker container run -v //driveLetter/path/on/host:path/in/container```
    
    ## Tips

    +   ### Global
        *   ####    Get into local docker VM (windows-MacOS)
            +   As Docker runs into a mini VM on Windows and Mac you won't see container's processes running with
              command ```ps aux```
            +   To see running processes:
                *   Run ```docker run -it --rm --privileged --pid=host justincormack/nsenter1```
                *   Type ````ps aux```` to look for all processes
                *   Type ```ps aux | grep processName``` to look for a specific process name
        *   ####    What is Alpine
            +   Alpine is a minimalist Linux distribution, ideal for containers so.
            +   Image size of Alpine is only more than 5Mb (where Ubuntu for example is more than 70Mb)
            +   Alpine don't have bash installed, but you can use ```sh``` it's the terminal of this distribution
            +   **APK** is the package manager for Alpine
                *   Quit with ```exit```
    +   ### Image
        *   ####    What is (not) an image
            +   App binaries and dependencies
            +   Metadata about the image and running information
            +   It's not, like a virtual machine, a complete OS.
            +   Image use host kernel
            +   Very flexible: from one file to a full Linux distribution with LAMP stack for example
            +   Docker never duplicate image if an exact match is existing on host
            +   Each layer of an image as its own SHA and is only stored once on host (space-saving)
            +   Image is read-only and can be accessed multiple times by multiple containers
        *   ####    Building Dockerfile
            +   When Docker build an image, it attributes a SHA to each layer, later if this layer hasn't changed Docker will
              reuse it. That's what's make Docker so fast and powerful
            +   When you create a Dockerfile it's important to put the code that change the most in the bottom of your file, this way you reduce the amount of layers that need to be updated and so you reduce time and storage space needed for building your image
        *   ####    Dockerfile KEYWORDS
            +   FROM : Define source image, usually an official image as a base (Ubuntu, Nginx, etc...)
            +   ENV : Define environment variables
            +   WORKDIR : Go to a specific path (for example in an Ubuntu folder /usr/share/ )
            +   RUN : All the tasks you need to run to launch your container (ex: apt update && apt upgrade)
            +   COPY : Copy files from local directory to your image
            +   EXPOSE : Open ports inside the virtual machine of Docker (not the host who runs the image)
            +   CMD : The command that you'd use on your local machine to launch your project (ex: node app.js)
            
    +   ### Container
        +   Once you used ```docker run -it --name proxy nginx bash``` you have access to terminal, you can then make
          operations like in a classic terminal like ```ls -al``` or ```apt install``` on a Linux-based container.
        +   It's important to understand that operations in your container persist inside the container but will never
          change the original image that you used to create the container
        +   If ```ps -aux``` is not available in container (like now in mysql)
          run ```apt update && apt install -y procps```
    
    *   ### Network
        +   ####    Default virtual networks
            +   **bridge** or **docker0** is the default network that bridges NAT firewall to Host
            +   **host** network links container directly to host without using Docker VM, it passed out security of
              containerisation but can sometimes improve performance, be aware while using it
            +   **none** is not link virtual network
        +   ####    Network good practise
            +   Each virtual network routes through NAT firewall on host IP
            +   All containers on a virtual network can talk to each other without -p
            +   Best practice is to create a new virtual network for each app
            +   Create your apps so frontend / backend sit on same Docker network
            +   Inter-communication never leaves host
            +   All externally exposed ports closed by default
            +   You must expose ports via ```-p hostPort:containerPort```, which is better default security
        +   ####    Docker DNS
            +   Use containerName for communication within the same network
            +   Don't rely on IP's because they could change at any moment
            +   Use custom network, default network like bridge don't have the containerName DNS logic
    
    +   ### Persistent Data
        *   #### Volumes
            +   Good Practise: Create named volume ```-v name:path/to/volume``` to make them persist for each container created from your image, to make directory name more friendly and to make it easier to identify through inspect or ls commands
            +   Volumes are a solution to include persistent data without including them directly into your container, which is by definition immutable and not persistent
            +   Volume is not deleted when the container that generate it is deleted or stopped
            +   You can browse the volume through Linux file explorer 
            +   You can't browse volumes into Windows or Mac file explorer cause Docker runs behind the scene in a mini virtual machine. You have to use mounted volume to go around this limitation
        *   #### Bind Mounting
            +   Bind mounting maps a host file/directory to a container file/directory
            +   Mapping is virtual, files are just in one location
            +   Files are not deleted if container is
            +   You can't use mapping in Dockerfile, just with ```docker container run``` command
            +   If files located in bind mounting is deleted into the container it's also deleted on host 
        
    
<br/>

---

# DOCKER COMPOSE
-   [Cheatsheet](#cheatsheet)
    -   [Global](#global)
-   [Tips](#tips)
    -   [Global](#global)
    
    ##  CheatSheet
    *   ### Global
        +   ```docker-compose up``` Launch all parts: containers, volumes, networks
        +   ```docker-compose down``` Stop and delete all parts: containers, volumes, networks
    *   +   ```docker-compose build``` Build from docker-compose.yml or force build if images contained in your docker-compose file already exist locally 
    ##  Tips
    *   ### Global
        +   Docker compose is a test/local development tool, not really fit for production
        

---

<a href="https://linkedin.com/in/nicolas-denoel">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/linkedin/linkedin-original.svg" alt="linkedin.com/in/nicolas-denoel" width="40" height="40" />
</a>  <a href="https://twitter.com/nicode_io">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/twitter/twitter-original.svg" alt="twitter.com/inicode_io" width="40" height="40" />
</a>  

## Timeline

> Current steps and history of my reconversion

<a href="https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-06-02_2021-09-08">
    <img src="./images/timeline.png" alt="Timeline">
</a>

---

##  Sources

-   [Bret Fisher aka DockMaster](https://www.bretfisher.com/)
-   [Docker Documentation](https://docs.docker.com/docker-hub/)
-   [Docker Compose Documentation](https://docs.docker.com/compose/)
-   [DockerHub](https://hub.docker.com/)
