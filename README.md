# :book: BEGINNER'S GUIDE TO VPS :computer:
> On my way to host multiple websites on my virtual private server


## Description 
> Start 15-08-2020

A small, unpretentious guide that brings together the information collected from different sites in order to best organize the first steps of installing the various tools on a VPS to host a multitude of websites and applications.

---

## :file_folder: Index
-   [Server Initialisation](#server-initialisation) 
    -   [SSH](#SSH) 
    -   [USERS & ROOT USER](#users-&-root-user)
    -   [BASIC SECURITY FIRST STEP](#basic-security-first-step)
-   [WEB HOSTING](#basic-for-web-hosting)
    -   [DOMAIN REDIRECTION](#domain-redirection) 
    -   [SFTP ACCESS](#sftp-access)
    -   [PHP](#php)
    -   [MYSQL](#mysql)
    -   [APACHE](#apache)
    -   [VIRTUAL HOSTS](#virtual-hosts)
    -   [CERTBOT - SSL CERTIFICATION](#certbot---ssl-certification)
    -   [PYTHON](#python)
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
*   Create SSH key
    *   ```$ ssh-keygen```
    *   Choose name of the key and where to save :  
        /home/.ssh/key_name 
    *   Enter password twice for the key    
*   Copy SSH key in clipboard   
    *   ```$ pbcopy < ~/.ssh/key_name.pub```    
        or  (if you don't have pbcopy for example)  
    *   ```$ cat ~/.ssh/key_name.pub``` and copy terminal output
*   Connect to SSH to VPS
    *   ```$ ssh-copy-id -i ~/.ssh/mykey user@host```
    *   ```$ ssh 'user@host```You'll be asked by local system for key password
    *   It's ok, from now you can connect without having to type a password on this computer

####    USERS & ROOT USER
*   Avoid using root user for daily admin usage, cause of too many privileges this user have, instead create a user with sudo powers, it will allow you to do main daily tasks
*   Switch to root user and change root user's password
    *   ```$ sudo -i```
    *   ```$ passwd```

*   Create user with sudo powers on server  
    *   ```$ sudo adduser username``` 
    *   Enter user information and validate 
    *   Add user to sudo group  
        *   ```$ sudo usermod -aG sudo username```    
            check if the user is in sudo group  
        *   ```$ id username```  
*   Ask for ROOT access with you sudo User 
    *   ```$ su -```
    *   Enter **ROOT** password
    *   You now working as ROOT user with same rights (God mode activated, be aware of your power :smile:)

####    BASIC SECURITY FIRSTS STEPS
>   :warning:
*   Disabling password auth / ROOT connection with SSH on VPS
    *   First be sure you have at least root ssh access to your server, ideal would be to have another user with sudo powers and ssh access to your server.
    *   ```$ sudo nano /etc/ssh/sshd_config```
    *   Uncomment line: "PasswordAuthentication yes" and change it to "PasswordAuthentication no"
    *   Set *PermitRootLogin* to **no**
    *   Add : *AllowUsers **username*** Add a space between usernames if you have many
    *   Save and close file
    *   ```$ sudo systemctl restart ssh```
    *   As precaution, open a new terminal window and test that the SSH service is running correctly before closing session, and so avoid you can't log on your sever next time
*   (Optionnal) Keep server connection alive with your local computer:  
>   If you want to avoid freeze of your terminal when spending time searching web or read documentation while configuring your server, recommended to remove it when your VPS in in production mode. 

    *   In the same file */etc/ssh/sshd_config* add the followings: 
        *TCPKeepAlive yes*
        *ServerAliveInterval 30*
        This will send a TCPKeepAlive every 30 seconds

*   Setting up basic firewall
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
>   Apps, Virtual Hosts, databases

-   [DOMAIN REDIRECTION](#domain-redirection) 
-   [SFTP ACCESS](#sftp-access)
-   [PHP](#php)
-   [MYSQL](#mysql)
-   [APACHE](#apache)
-   [VIRTUAL HOSTS](#virtual-hosts)
-   [CERTBOT - SSL CERTIFICATION](#certbot---ssl-certification)
-   [PYTHON](#python)
-   [MONGO DB](#mongo-db)

####    DOMAIN REDIRECTION
*   Redirect your domain name to VPS
    *   Check on your domain name's provider dashboard a **DNS** section or **A-Records** section
    *   Create a new A-record using the followings :
        *   Host: **@**
        *   Value/IP: **your_vps_ip** (ipv4)  
        *   TTL: **auto** or **30minutes** or specific setting if you need it
        *   Check propagation with : ```$ dig your_domain_name```you should see if the process works 

####    SFTP ACCESS
>  :warning: SSH FTP connection

*   Download FTP client, FileZilla for example is free
*   Create a new connection with followings informations :
    *   Protocol: **SFTP - SSH File Transfer Protocol**
    *   Host: **VPS_IP** 
    *   Port: empty should work, else try **22**
    *   User: *Username used for SSH connection to your VPS*
    *   Password: *Password used for SSH connection to your VPS*
    *   Accept fingerprint if asked, then connect

####    PHP
*   Install PHP and PHP modules
    *   ```$ sudo apt install -y php7.4``` 
    *   ```$ php -v``` check wich version is installed
        Install PHP modules (example:)
    *   ```sudo apt install php7.4-mysql php7.4-curl php7.4-json php7.4-cgi php7.4-xsl```

####    MYSQL
*   Installation
    *   ```$ sudo apt update```
    *   ```$ sudo apt install mysql-server```
*   Configuration
    *   ```$ sudo mysql_secure_installation```
    *   Choose a level of security for passwords, from 0 to 2
    *   Enter and confirm your password 
    *   Choose if you wish to disable anonymous connection *recommended*
    *   Choose if you wish to disable remote root login *recommended*
    *   Choose if you wich to remove test database and access to it *not recommended for now*
*   Create dedicated MySQL user and granting privileges
    *   ```$ sudo mysql``` Enter in MySQL console 
    *   ```mysql> CREATE USER username@host_name IDENTIFIED BY 'password';```
    *   From now you can grant specific permissions to user, there's many of them, here's an example: 
        ```mysql> GRANT DELETE ON db_name.table TO 'username@host';```
    *   You can add *WITH GRANT OPTION* at the end of statement to allow user giving permissions to other users (off course limited to his own permissions)
    *   A good practise is to run following after giving permissions: 
        ```mysql> FLUSH PRIVILEGES;```
    *   ```mysql> exit``` to finally quit MySQL
*   Testing MySQL
    *   ```$ systemctl status mysql.service```
    *   You should see "Server is operationnal" and many others informations
        *   If not: ```$ sudo systemctl start mysql```
    *   ```$ sudo mysqladmin -p -u username version``` 
    *   You should see an output with many elements like mysqladmin version, this means MySQL is up and running

####    APACHE
*   Install APACHE Web Server
    *   ```$ sudo apt-get update```
    *   ```$ sudo apt-get install apache2```

####    VIRTUAL HOSTS
>   One virtual host and file folder are needed for each website you'll host
>   Repeat followings for each website you host
*   Making file / directory structure and setup permissions
    *   ```$ sudo mkdir -p /var/www/domainname.com/public_html```
    *   ```$ sudo chown -R $USER:$USER /var/www/domainname.com/public_html```
    *   ```$ sudo chmod -R 755 /var/www```
*   Create sample web content page 
    *   ```$ sudo nano /var/www/domainname.com/public_html/index.html```
    *   Add basic HTML page's content 
*   Create virtual host configuration files
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
*   Make a check of Apache's configuration files with:  
    ```$ sudo apache2ctl configtest```  
    Result should be **Syntax OK**, if not you have to correct your configuration file
*   Enabling virtual host
    *   ```$ sudo a2ensite domainname.com.conf```
*   Restart Apache to apply changes
    *   ```$ sudo service apache2 restart```
> End of loop to add a new site 

> Do followings operations on local computer not on VPS !

*   ```$ sudo nano /etc/hosts```
*   Add :
    ```VPS_IP  domainname.com``` 
*   Make a line for every domain you have 
*   Visit domainname.com in your local browser, this should work ;) 
*   Let's develop a great website now !

####    CERTBOT - SSL CERTIFICATION
>   :warning: allow HTTPS connections
*   Installation 
    *   ```$ sudo apt update```
    *   ```$ sudo apt -y upgrade```
    *   ```$ sudo apt install certbot python3-certbot-apache```
*   Allow HTTPS trough the firewall
    *   ```$ sudo ufw status```
    *   ```$ sudo ufw allow 'Apache Full'```
    *   ```$ sudo ufw delete allow 'Apache'```
    *   Check if access is *Apache Full* with again:    
        ```$ sudo ufw status```
*   Obtaining an SSL Certificate
    *   ```$ sudo certbot --apache```
    *   Enter a valid email adress, it'll be used for renewal !
    *   Agree the terms of service
    *   Share or not your email (not recommended)
    *   Each domain for wich you can activate a certificate, choose one or many, if many separate choice's number by a space
    *   Validate and wait for the certification to be done
    *   Test your website with HTTPS, and the magic happens :smile:
    *   You can use following to check renewal (if no error it's fine): 
        ```$ sudo systemctl status certbot.timer``` 
        ```$ sudo certbot renew --dry-run```

####    PYTHON
*   Installation
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
    *   We're ready for next step: Setting up a Virtual Environment :smile:

####    MONGO DB
*   Installation
    *   ```$ sudo apt update```
    *   ```$ sudo apt -y upgrade```
    *   ```$ sudo apt install -y mongodb```
    *   Check install / running service with:  
        ```$ sudo systemctl status mongodb```   
    *   Install official Python MongoDB driver called PyMongo:  
        ```$ sudo pip3 install pymongo```
*   Make a connection with MongoClient

---

### DEVELOPMENT ENVIRONMENT
>   Configure a deevelopment environment available remotely

-   [VSCODE REMOTE DEVELOPMENT EXTENSION](#vscode-remote-devlopment-extension) 
-   [PYTHON VIRTUAL ENVIRONMENT](#python-virtual-environment)

### VSCODE REMOTE DEVELOPMENT EXTENSION
> Allows you to connect to your server's files and projects remotely

*   Make sure you have an SSH server running on your VPS, if you follow this guide you should have OpenSSH up to date doing the job
*   Install [VSCode](https://code.visualstudio.com/) or [VSCode Insiders](https://code.visualstudio.com/insiders/) on your local computer.
*   Install [Remote Devlopment VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)  
*   In VSCode (local), click on the *shiny blue*  **><** button on bottom left 
    *   Click *Connect to host*
    *   Choose *+ Add a new host*
    *   Type *ssh username@VPS_IP -A* and press *Enter*
    *   A new VScode window will pop, you're now connected to your remote server and have access to the file structure and all folders you have there. :thumbs:

### PYTHON VIRTUAL ENVIRONMENT
>   Create isolated space on your server for each of your Python's projects



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