# (◉ ͜ʖ◉))ﾉ彡 BEGINNER'S GUIDE TO VPS ✧٩(•́⌄•́๑)
>   Want to host multiple websites on your own VPS ?    
>   Want to be free to configure your server as you like ?  
>   Let's start together ! 


## Description 
> Start 15-08-2020
> 

A small, unpretentious guide that brings together the information collected from different sites in order to best organize the first steps of installing the various tools on a VPS to host a multitude of websites and applications.

When you see::warning:, this refers directly to server, files or users' security

Little disclaimer: made by a rookie for the rookie, there's for sure missing things (I'll complete with times) and bad things (I'll improve myself). 

---

## :file_folder: Index
-   [SERVER INITIALISATION](#server-initialisation) 
    -   [SSH](#SSH) 
    -   [USERS & ROOT USER](#users-&-root-user)
    -   [BASIC SECURITY FIRST STEP](#basic-security-first-step)
-   [WEB HOSTING](#basic-for-web-hosting)
    -   [DOMAIN REDIRECTION](#domain-redirection) 
    -   [SFTP ACCESS](#sftp-access)
    -   [APACHE](#apache)
    -   [VIRTUAL HOSTS](#virtual-hosts)
    -   [CERTBOT - SSL CERTIFICATION](#certbot---ssl-certification)
    -   [HTACCESS](#htaccess)
-   [PROGRAMMING LANGUAGE](#programming-language)
    -   [PHP](#php)
    -   [PYTHON](#python)
-   [DATABASES MANAGEMENT](#databases-management)
    -   [MYSQL](#mysql)
    -   [MONGO DB](#mongo-db)
-   [DEVELOPMENT ENVIRONMENT](#development-environment)
    -   [VSCODE REMOTE DEVELOPMENT EXTENSION](#vscode-remote-devlopment-extension) 
    -   [PYTHON VIRTUAL ENVIRONMENT](#python-virtual-environment)
-   [Collaboration](#collaboration)
-   [Timeline](#timeline)

---

### SERVER INITIALISATION
-   [SSH](#SSH)
-   [USERS & ROOT USER](#users-&-root-user)
-   [BASIC SECURITY FIRST STEP](#basic-security-first-step)

    ####    SSH
    >   :warning:   
    *   #####   Create SSH key
        *   ```$ ssh-keygen```
        *   Choose name of the key and where to save :  
            /home/.ssh/key_name 
        *   Enter password twice for the key    
    *   #####   Copy SSH key in clipboard   
        *   ```$ pbcopy < ~/.ssh/key_name.pub```    
            or  (if you don't have pbcopy for example)  
        *   ```$ cat ~/.ssh/key_name.pub``` and copy terminal output
    *   #####   Connect to SSH to VPS
        *   ```$ ssh-copy-id -i ~/.ssh/mykey user@host```
        *   ```$ ssh 'user@host```You'll be asked by local system for key password
        *   It's ok, from now you can connect without having to type a password on this computer :magic_wand:

    ####    USERS & ROOT USER
    >   Get the superpowers of admin and give the tiny rights to these bad users :crown:
    *   #####   Security advice
        *   Avoid using root user for daily admin usage, cause of too many privileges this user have, instead create a user with sudo powers, it will allow you to do main daily tasks
    *   #####   Switch to root user 
        *   ```$ sudo -i```
    *   #####   change root user's password
        *   ```$ passwd```
    *   #####   Create user with sudo rights  
        *   ```$ sudo adduser username``` 
        *   Enter user information and validate 
        *   Add user to sudo group  
            *   ```$ sudo usermod -aG sudo username```    
                check if the user is in sudo group  
            *   ```$ id username```  
    *   #####   Ask for ROOT access with you sudo User 
        *   ```$ su -```
        *   Enter **ROOT** password
        *   You now working as ROOT user with same rights 

    ####    BASIC SECURITY FIRSTS STEPS
    >   :warning:
    *  #####    Disabling password auth / ROOT connection with SSH on VPS
        *   First be sure you have at least root ssh access to your server, ideal would be to have another user with sudo powers and ssh access to your server.
        *   ```$ sudo nano /etc/ssh/sshd_config```
        *   Uncomment line: "PasswordAuthentication yes" and change it to "PasswordAuthentication no"
        *   Set *PermitRootLogin* to **no**
        *   Add : *AllowUsers **username*** Add a space between usernames if you have many
        *   Save and close file
        *   ```$ sudo systemctl restart ssh```
        *   As precaution, open a new terminal window and test that the SSH service is running correctly before closing session, and so avoid you can't log on your sever next time
    *   #####   (Optionnal) Keep server connection alive with your local computer:  
        >   If you want to avoid freeze of your terminal when spending time searching web or read documentation while configuring your server, recommended to remove it when your VPS in in production mode. 
        *   In the same file */etc/ssh/sshd_config* add the followings: 
            *TCPKeepAlive yes*
            *ServerAliveInterval 30*
            This will send a TCPKeepAlive every 30 seconds
        *   On your local computer: 
            ```$ sudo nano /etc/ssh/ssh_config```
        *   Add the folloing line:  
            **ServerAliveInterval 120**

    *   #####   Setting up basic firewall
        *   Each applications have its own settings for firewall    
            you can see the app list :  
        *   ```$ sudo ufw app list```
            authorize OpenSSH : 
        *   ```$ sudo ufw allow OpenSSH```
            enable then firewall :
        *   ```$ sudo ufw enable```
            check status
        *   ```$ sudo ufw status```
        *   Be sure to allow future applications through the firewall to allow traffic in

--- 

### BASICS FOR WEB HOSTINGS
>  :wrench: Apps, Virtual Hosts, databases

-   [DOMAIN REDIRECTION](#domain-redirection) 
-   [SFTP ACCESS](#sftp-access)
-   [PHP](#php)
-   [PYTHON](#python)
-   [MYSQL](#mysql)
-   [MONGO DB](#mongo-db)
-   [APACHE](#apache)
-   [VIRTUAL HOSTS](#virtual-hosts)
-   [CERTBOT - SSL CERTIFICATION](#certbot---ssl-certification)
-   [HTACCESS](#htaccess)

    ####    DOMAIN REDIRECTION
    >   Because you think a long time for this awesome name that will make you the next sold start-up :moneybag:
    *   #####   Redirect your domain name to VPS
        *   Check on your domain name's provider dashboard a **DNS** section or **A-Records** section
        *   Create a new A-record using the followings :
            *   Host: **@**
            *   Value/IP: **your_vps_ip** (ipv4)  
            *   TTL: **auto** or **30minutes** or specific setting if you need it
            *   Check propagation with : ```$ dig your_domain_name```you should see if the process works :magic_wand:

    ####    SFTP ACCESS
    >  :warning: SSH FTP connection

    *   #####   Download FTP client
        *   [FileZilla](https://filezilla-project.org/) for example is free
    *   #####   Create new SFTP connection
        *   Click *New connection* and use followings:  
            *   Protocol: **SFTP - SSH File Transfer Protocol**
            *   Host: **VPS_IP** 
            *   Port: empty should work, else try **22**
            *   User: *Username used for SSH connection to your VPS*
            *   Password: *Password used for SSH connection to your VPS*
        *   Connect, accept fingerprint if asked

    ####    APACHE
    >   Your web hosting server, mandatory for websites hosting/development
    *   #####   Installation
        *   ```$ sudo apt-get update```
        *   ```$ sudo apt-get install apache2```

    ####    VIRTUAL HOSTS
    >   One virtual host and file folder are needed for each website you'll host    
    >   Repeat followings for each website you host
    *   #####   Making file / directory structure and setup permissions
        *   ```$ sudo mkdir -p /var/www/domainname.com/public_html```
        *   ```$ sudo chown -R $USER:$USER /var/www/domainname.com/public_html```
        *   ```$ sudo chmod -R 755 /var/www```
    *   #####   Create sample web content page 
        *   ```$ sudo nano /var/www/domainname.com/public_html/index.html```
        *   Add basic HTML page's content 
    *   #####   Create virtual host configuration files
        *   ```$ sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/domainname.com.conf```
        *   ```$ sudo nano /etc/apache2/sites-available/domainname.com.conf```
        *   Overwrite with followings values :   
        ```<VirtualHost *:80>```    
        ```ServerAdmin admin@test.com```     
        ```ServerName test.com```   
        ```ServerAlias www.test.com```  
        ```DocumentRoot /var/www/test.com/public_html```    
        ```ErrorLog ${APACHE_LOG_DIR}/error.log```  
        ```CustomLog ${APACHE_LOG_DIR}/access.log combined```   
        ```</VirtualHost>```   
    *  #####    Check Apache's configuration 
        ```$ sudo apache2ctl configtest```  
        Result should be **Syntax OK**, if not you have to correct your configuration file
    *   #####   Enabling virtual host
        *   ```$ sudo a2ensite domainname.com.conf```
    *   #####   Restart Apache to apply changes
        *   ```$ sudo service apache2 restart```
    > End of loop to add a new site 

    > Do followings operations on local computer not on VPS !

    *   ```$ sudo nano /etc/hosts```
    *   Add :
        ```VPS_IP  domainname.com``` 
    *   Make a line for every domain you have 
    *   Visit domainname.com in your local browser, this should work :magic_wand: 
    *   Let's develop a great website now !

    ####    CERTBOT - SSL CERTIFICATION
    >   :warning: AllowS HTTPS connections if your hosting provider doesn't provide a solution, wich is rare
    *   #####   Installation 
        *   ```$ sudo apt update```
        *   ```$ sudo apt -y upgrade```
        *   ```$ sudo apt install certbot python3-certbot-apache```
    *   #####   Allow HTTPS trough the firewall
        *   ```$ sudo ufw status```
        *   ```$ sudo ufw allow 'Apache Full'```
        *   ```$ sudo ufw delete allow 'Apache'```
        *   Check if access is *Apache Full* with again:    
            ```$ sudo ufw status```
    *   #####   Obtaining an SSL Certificate
        *   ```$ sudo certbot --apache```
        *   Enter a valid email adress, it'll be used for renewal !
        *   Agree the terms of service
        *   Share or not your email (not recommended)
        *   Each domain for wich you can activate a certificate, choose one or many, if many separate choice's number by a space
        *   Validate and wait for the certification to be done
        *   Test your website with HTTPS, and the magic happens :magic_wand:
        *   You can use following to check renewal (if no error it's fine): 
            ```$ sudo systemctl status certbot.timer``` 
            ```$ sudo certbot renew --dry-run```

    ####    HTACCESS
    >   Manage your pages redirection, create 404 or allow or deny specific IP's
    *   #####    Enable .htaccess in Apache
        *   You'll need to add configuration to your website's virtual host, repeat this operation for each website you host 
        *   Open your website's virtual host configuration file:    
            ```$ sudo nano /etc/apache2/sites-available/domainname.com.conf```
        *   Add following lines after the **</virtualHost>** line:   
            <Directory /var/www/domainname.com/public_html> 
                Options Indexes FollowSymLinks  
                AllowOverride All   
                Require all granted 
            </Directory>    
        *   Restart Apache Service: 
            ```$ sudo service apache2 restart```
    *   ##### Create an **.htaccess** file
        *   Be sure to do one file for each website you host to be sure avoiding conflicts and personalize your configuration
        *   Go to your website's root directory:    
            ```$ cd var/www/domainname.com/public_html```
        *   Create **.htacess** file:   
            ```$ touch .htacess```
        *   Add the following line and save:    
            **Options -Indexes**
        *   From now you can edit this file for the following steps: redirection, 404 page, specific IP filters and more. 
    *   ##### Manage website pages' redirection
        *   First go to your website folder:    
            ```$ cd /var/www/domainname.com/public_html/```
        *   Create an html basic file to test redirection:  
            ```$ sudo touch redir-test.html```
        *   Edit this file: 
            ```$ sudo nano redir-test.html```
        *   Add following code and save: 
            ```<html><body>Redirection Test is working</body></html>```
        *   Edit your **.htaccess** file:   
            ```$ sudo nano .htaccess```
        *   Add the following line and save: 
            **Redirect 301 /index.html /redir-test.html**
    *

---

### PROGRAMMING LANGUAGE
> The start of everything in digital world, programming languages transform every ideas into working solutions. Find the one who fits to you and your goals and say **Hello World**
-   [PHP](#php)
-   [PYTHON](#python)

    ####    PHP
    >   A very popular programming language 
    *   #####   Install PHP and PHP modules
        *   ```$ sudo apt install -y php7.4``` 
        *   ```$ php -v``` check wich version is installed
            Install PHP modules (example:)
        *   ```sudo apt install php7.4-mysql php7.4-curl php7.4-json php7.4-cgi php7.4-xsl```

    ####    PYTHON
    >   A powerfull programming language for Web-Development as for I.A and data-science
    *   #####   Installation
        *   ```$ sudo apt update```
        *   ```$ sudo apt -y upgrade``` *-y option allow installation without manual confirmation*
        *   Check if Python 3 is already installed with :   
            ```$ python3 -V```
        *   Install pip, it's Python package/library manager, as apt is for example:    
            ```$ sudo apt install -y python3-pip```
        *   From now, you can install packages with following:  
            ```$ sudo pip3 install package_name``` (ex: ```$ sudo pip3 install django```)
        *   Here's a few more packages to prepare a robust development environment: 
            ```$ sudo apt install -y build-essential libssl-dev libffi-dev python3-dev```
        *   We're ready for next step: Setting up a Virtual Environment !

---

### DATABASES MANAGEMENT
>   There's many databases manager and types of databases. We can sort them in two main families: Relative and Non-relative (also often called No SQL).
>   MySQL is a relative database system and Mongo DB is an unrelative database system
-   [MYSQL](#mysql)
-   [MONGO DB](#mongo-db)

    ####    MYSQL
    >   A relative Databases manager/server, this is one of the references and you should find all the documentation you need to launch your first projects.
    *   #####   Installation
        *   ```$ sudo apt update```
        *   ```$ sudo apt install mysql-server```
    *   #####   Configuration
        *   ```$ sudo mysql_secure_installation```
        *   Choose a level of security for passwords, from 0 to 2
        *   Enter and confirm your password 
        *   Choose if you wish to disable anonymous connection *recommended*
        *   Choose if you wish to disable remote root login *recommended*
        *   Choose if you wich to remove test database and access to it *not recommended for now*
    *   #####   Create dedicated MySQL user and granting privileges
        *   ```$ sudo mysql``` Enter in MySQL console 
        *   ```mysql> CREATE USER username@host_name IDENTIFIED BY 'password';```
        *   From now you can grant specific permissions to user, there's many of them, here's an example: 
            ```mysql> GRANT DELETE ON db_name.table TO 'username@host';```
        *   You can add *WITH GRANT OPTION* at the end of statement to allow user giving permissions to other users (off course limited to his own permissions)
        *   A good practise is to run following after giving permissions: 
            ```mysql> FLUSH PRIVILEGES;```
        *   ```mysql> exit``` to finally quit MySQL
    *   #####   Testing MySQL
        *   ```$ systemctl status mysql.service```
        *   You should see "Server is operationnal" and many others informations
            *   If not: ```$ sudo systemctl start mysql```
        *   ```$ sudo mysqladmin -p -u username version``` 
        *   You should see an output with many elements like mysqladmin version, this means MySQL is up and running :magic_wand:

    ####    MONGO DB
    >   A no SQL Databases manager/server, its powerfull schema less system and OOP structure and more of that an easy way to scale up when your website will growth
    *   #####   Installation
        *   ```$ sudo apt update```
        *   ```$ sudo apt -y upgrade```
        *   ```$ sudo apt install -y mongodb```
        *   Check install / running service with:  
            ```$ sudo systemctl status mongodb```   
        *   Install official Python MongoDB driver called PyMongo:  
            ```$ sudo pip3 install pymongo```
    *   #####   Make a connection with MongoClient

---


### DEVELOPMENT ENVIRONMENT
>   Configure a development environment available remotely
-   [VSCODE REMOTE DEVELOPMENT EXTENSION](#vscode-remote-devlopment-extension) 
-   [PYTHON VIRTUAL ENVIRONMENT](#python-virtual-environment)

    ####    VSCODE REMOTE DEVELOPMENT EXTENSION
    > Allows you to connect to your server's files and projects remotely
    *   #####   SSH Server
        *   Make sure you have an SSH server running on your VPS, if you follow this guide you should have OpenSSH up to date doing the job
    *   #####   VSCODE
        *   Install [VSCode](https://code.visualstudio.com/) or [VSCode Insiders](https://code.visualstudio.com/insiders/) on your local computer.
    *   #####   VSCODE REMOTE DEVELOPMENT EXTENSION
        *   Install [Remote Development VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)  
        *   In VSCode (local), click on the *shiny blue*  **><** button on bottom left 
            *   Click *Connect to host*
            *   Choose *+ Add a new host*
            *   Type *ssh username@VPS_IP -A* and press *Enter*
            *   A new VScode window will pop, you're now connected to your remote server and have access to the file structure and all folders you have there. :thumbs:

    ####    PYTHON VIRTUAL ENVIRONMENT
    >   Create isolated space on your server for each of your Python's projects. We'll use **VENV** but others exists
    *   #####   Installation
        *   ```$ sudo apt update```
        *   ```$ sudo apt upgrade```
        *   ```$ sudo apt install -y python3-venv```
    *   #####   Create a new virtual environment
        *   Create a project folder:    
            ```$ mkdir project_folder```
        *   Navigate to your project folder:    
            ```$ cd project_folder```
        *   Create the virtual environment using:   
            ```$ python3 -m venv environment_name```
        *   List created files (optionnal): 
            ```$ ls environment_name```
        *   Activate your virtual environment:  
            ```$ source environment_name/bin/activate```
        *   From now the start of your command prompt will be your environment name, all packages or library you'll install in it won't be linked to your VPS's system but only to this virtual environment :magic_wand:
    *   #####   Close venv virtual environment
        *   *CTRL + D*
    *   #####   Delete venv virtual environment 
        *   Simply delete *environment_name* folder with:   
            ```$ sudo rm -r .../environment_name/*```

    ####    DJANGO
    >   A Powerful Web-Framework using Python to develop beautiful-builded websites with a high-level of security. Your website will growth more and more ? Django then shines !
    *   #####   Installation

---

**BeCode** Intensive Bootcamp     
This project took place in my leearning path in BeCode (see below) to full stack web developer.
In seven months you have a wonderful luck to become a great web developer. Inclusion and share spirit is your daily feeling !  
Give maximum to get maximum :rocket:

## Timeline 
[:calendar: Discover the great timeline of my adventure to become a developer. Want to write your company's name on it ? Let's meet !](https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-05-26_2020-06-27)  

## Collaboration
Hello, I'm [Nicolas](https://www.linkedin.com/in/nicolas-denoel/), welcome to my all new life as developer.
After 15 years as manager and sales director it's time for me to make my dreams come true and to become a developer.
Autonomous learner, problem solver and commited team member, I'm ready for challenges !
So feel strongly to give me any recommandation about my work, advice for future projects, and all comments you want.  
If you are looking to hire a strong hybrid and atypical profile in your team do not hesitate to contact me to check if we can share a project together !  
Thanks by advance for that :heart:  


[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)