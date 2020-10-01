#   (◉ ͜ʖ◉))ﾉ彡 BEGINNER'S GUIDE 
#   TO (VIRTUAL) PRIVATE SERVER ✧٩(•́⌄•́๑)
>   Want to host multiple websites on your own private server?  
>   Want to be free to configure your server as you like ?  
>   Let's start together ! 


## Description 
> Start 15-08-2020

A small, unpretentious guide that brings together the information collected from different sites in order to best organize the first steps of installing the various tools on a (virtual) private server to host a multitude of websites and applications.

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
    -   [MARIADB](#mariadb)
    -   [MYSQL](#mysql)
    -   [MONGO DB](#mongo-db)
-   [TOOLS](#tools)
    -   [PHPMYADMIN](#phpmyadmin)
    -   [PHP MAILER](#php-mailer)
-   [DEVELOPMENT ENVIRONMENT](#development-environment)
    -   [VSCODE REMOTE DEVELOPMENT EXTENSION](#vscode-remote-development-extension) 
    -   [PYTHON VIRTUAL ENVIRONMENT](#python-virtual-environment)
        -   [VENV](#venv)
        -   [PIPENV](#pipenv)
-   [COLLABORATION](#collaboration)
-   [TIMELINE](#timeline)


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
        *   ```$ sudo nano ~/.ssh/config``` and add followings: 
                ```Host *```
                ``` AddKeysToAgent yes```
                ``` UseKeychain yes```
                ``` IdentityFile ~/.ssh/id_rsa```
        *   ```$ ssh-add -K ~/.ssh/id_rsa```

    *   #####   Copy SSH key in clipboard   
        *   ```$ pbcopy < ~/.ssh/key_name.pub```    
            or  (if you don't have pbcopy for example)  
        *   ```$ cat ~/.ssh/key_name.pub``` and copy terminal output

    *   #####   Connect to SSH to (virtual) private server
        *   ```$ ssh-copy-id username@your_server_IP```
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

    ####    BASIC SECURITY FIRST STEP
    >   :warning:

    *  #####    Disabling password auth / ROOT connection with SSH on (virtual) private server
        *   First be sure you have at least root ssh access to your server, ideal would be to have another user with sudo powers and ssh access to your server.
        *   ```$ sudo nano /etc/ssh/sshd_config```
        *   Uncomment line: "PasswordAuthentication yes" and change it to "PasswordAuthentication no"
        *   Set *PermitRootLogin* to **no**
        *   Add : *AllowUsers **username*** Add a space between usernames if you have many
        *   Save and close file
        *   ```$ sudo systemctl restart ssh```
        *   As precaution, open a new terminal window and test that the SSH service is running correctly before closing session, and so avoid you can't log on your sever next time

    *   #####   (Optionnal) Keep server connection alive with your local computer:  
        >   If you want to avoid freeze of your terminal when spending time searching web or read documentation while configuring your server, recommended to remove it when your (virtual) private server in in production mode. 
        *   In the same file */etc/ssh/sshd_config* add the followings: 
            *TCPKeepAlive yes*
            *ServerAliveInterval 30*
            This will send a TCPKeepAlive every 30 seconds
        *   On your local computer: 
            ```$ sudo nano /etc/ssh/ssh_config```
        *   Add the following line:  
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
        *   SSH port: ```$ sudo ufw allow 22``` 
        *   HTTP/HTTPS: ```$ sudo ufw allow proto tcp from any to any port 80,443```
        *   HTTP: ```sudo ufw allow http``` or ```sudo ufw allow 80```
        *   HTTPS: ```sudo ufw allow https``` or ```sudo ufw allow 443```


--- 


### BASICS FOR WEB HOSTINGS
>  :wrench: Apps, Virtual Hosts, databases

-   [DOMAIN REDIRECTION](#domain-redirection) 
-   [SFTP ACCESS](#sftp-access)
-   [APACHE](#apache)
-   [VIRTUAL HOSTS](#virtual-hosts)
-   [CERTBOT - SSL CERTIFICATION](#certbot---ssl-certification)
-   [HTACCESS](#htaccess)

    ####    DOMAIN REDIRECTION
    >   Because you think a long time for this awesome name that will make you the next sold start-up :moneybag:

    *   #####   Redirect your domain name to (virtual) private server
        *   Check on your domain name's provider dashboard a **DNS** section or **A-Records** section
        *   Create a new A-record using the followings :
            *   Host: **@**
            *   Value/IP: **your_server_ip** (ipv4)  
            *   TTL: **auto** or **30minutes** or specific setting if you need it
            *   Check propagation with : ```$ dig your_domain_name```you should see if the process works :magic_wand:

    ####    SFTP ACCESS
    >  :warning: SSH FTP connection

    *   #####   Download FTP client
        *   [FileZilla](https://filezilla-project.org/) for example is free

    *   #####   Create new SFTP connection
        *   Click *New connection* and use followings:  
            *   Protocol: **SFTP - SSH File Transfer Protocol**
            *   Host: **your_server_IP** 
            *   Port: empty should work, else try **22**
            *   User: *Username used for SSH connection to your (virtual) private server*
            *   Password: *Password used for SSH connection to your (virtual) private server*
        *   Connect, accept fingerprint if asked

    ####    APACHE
    >   Your web hosting server, mandatory for websites hosting/development

    *   #####   Installation
        *   ```$ sudo apt update && sudo apt upgrade```
        *   ```$ sudo apt-get install apache2```
        *   ```$ sudo ufw allow 'Apache'```

    ####    VIRTUAL HOSTS
    >   One virtual host and file folder are needed for each website you'll host    
    >   Repeat followings for each website you host

    *   #####   Making file / directory structure and setup permissions
        *   ```$ sudo mkdir -p /var/www/domainname.com/public_html```
        *   ```$ sudo chown -R $USER:$USER /var/www/domainname.com/public_html```
        *   ```$ sudo chmod -R 755 /var/www/```

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

    > Do followings operations on local computer not on (virtual) private server !

    *   ```$ sudo nano /etc/hosts```
    *   Add :
        ```your_server_IP  domainname.com``` 
    *   Make a line for every domain you have 
    *   Visit domainname.com in your local browser, this should work :magic_wand: 
    *   Let's develop a great website now !

    ####    CERTBOT - SSL CERTIFICATION

    *   #####   Installation 
        *   ```$ sudo apt update && sudo apt upgrade```
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
    >   Manage your pages redirection, create 404 or allow or deny specific IPs

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

    *   #####   Create an **.htaccess** file
        *   Be sure to do one file for each website you host to be sure avoiding conflicts and personalize your configuration
        *   Go to your website's root directory:    
            ```$ cd var/www/domainname.com/public_html```
        *   Create **.htacess** file:   
            ```$ touch .htacess```
        *   Add the following line and save:    
            **Options -Indexes**
        *   From now you can edit this file for the following steps: redirection, 404 page, specific IP filters and more. 

    *   #####   Manage website pages redirection
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
        *   Navigate to your **domain.com/index.html** you should now be redirected to **domain.com/redir-test.html**

    *   #####   Set up a 404 page 
        *   Create a **404.html** page in folder /var/www/domainname.com/public_html
        *   Add, for example, following content in it and save:  
            <!doctype html>
                <html>
                    <body>
                    404 ERROR : Page not found :(
                    </body>
                </html>
        *   Edit your **.htaccess** file:   
            ```$ sudo nano .htaccess```
        *   Add the following line and save: 
            **ErrorDocument 404 /404.html**  
        *   Navigate to an *uncreated* page, for example *www.domainname.com/no-exist.html*
        *   You should be redirected to your freshly installed 404 page !

    *   #####   Disallow access to specific file

    *   #####   Restricted IPs
        > :warning: Sometimes you want to give access to specific IP's to a folder or otherwise you want to refuse access to specific IP's, for example if you ban an user's IP. You can do that in two ways: **1.** allow all IP's but somes or **2.** do not allow any addresses except certain 
        *   **1.** Block IPs
            *   Edit your **.htaccess** file:   
            ```$ sudo nano .htaccess```
            *   Remove the following line (if applicable):  
                **Options -Indexes**
            *   Add the followings lines and save:  
                **order allow,deny** indicate you allow all IPs but ...  
                **deny from 192.0.2.9** to block just this IP   
                **deny from 192.0.2** to block all the range from 0 to 255
        *   **2.** Allow IPs
            *   Edit your **.htaccess** file:   
            ```$ sudo nano .htaccess```
            *   Add the followings lines and save:  
                **order deny,allow**    
                **Deny from all** to block all IPs
                **allow from 192.0.2.9** to allow just this IP
                **allow from 192.0.2** to allow all the range from 0 to 255
            

---


### PROGRAMMING LANGUAGE
> The start of everything in digital world, programming languages transform every ideas into working solutions. Find the one who fits to you and your goals and say **Hello World**
-   [PHP](#php)
-   [PYTHON](#python)

    ####    PHP
    >   A very popular programming language 
    *   #####   Install PHP and PHP modules
        *   ```$ sudo apt update && sudo apt upgrade```
        *   ```sudo apt install -y php7.4-mysql```
        *   ```sudo phpenmod pdo_mysql```
        *   ```$ php -v``` check wich version is installed
            Install PHP modules (example:)
        *   ```sudo service apache2 restart```

    ####    PYTHON
    >   A powerfull programming language for Web-Development as for I.A and data-science

    *   #####   Installation
        *   ```$ sudo apt update && sudo apt upgrade```
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
-   [MARIADB](#mariadb)
-   [MYSQL](#mysql)
-   [MONGO DB](#mongo-db)
-   [PHPMYADMIN](#phpmyadmin)

    ####    MARIADB
    >   This one is one of the most relationnal database. Based on a for of MySQL and made by original developers of MySQL. It is faster in many points and guaranteed to stay open source

    *   #####   Installation
        *   Update System
            *   ```$ sudo apt update && sudo apt upgrade```
            *   ```$ sudo apt -y install software-properties-common``` 
        *   Import MariaDB gpg key
            *   ```$ sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'``` 
        *   Add MariaDB APT repository
            *   ```$ sudo add-apt-repository 'deb [arch=amd64] http://mariadb.mirror.globo.tech/repo/10.5/ubuntu focal main'``` 
        *   Install MariaDB Server
            *   ```$ sudo apt update && sudo apt upgrade```
            *   ```$ sudo apt install -y mariadb-server mariadb-client```
        *   Secure MariaBD Server :warning:
            *   ```$ sudo mysql_secure_installation```
            *   Answer all the questions and you're done
            *   ```$ systemctl status mysql``` to check status

    *   #####   Access to MariaDB
        *   ```$ sudo mysql -u root -p``` *enter root password*

    *   #####   PDO connection syntax
        ```<?php try {```
        ``` $pdo = new PDO('mysql:host=localhost;port=3306;dbname=db_name;charset=utf8', 'user_name', 'password';```
        ```     echo 'Connection succeeded';```
        ``` }```
        ``` catch (PDOException $e) {```
        ```     die('Erreur : '.$e->getMessage());```
        ```}?>```

    *   #####   Create a database
        *   ```MariaDB [...]> CREATE DATABASE db_name;```
        *   ```MariaDB [...]> SHOW DATABASES;``` to check creation

    *   #####   Create a user and manage privileges
        *   ```$ sudo mysql -u root```
        *   ```MariaDB [...]> CREATE USER user_name@localhost IDENTIFIED BY user_password;```
        *   PRIVILEGES
            *   ```MariaDB [...]> GRANT ALL PRIVILEGES ON *.* TO user_name@localhost IDENTIFIED BY user_password;``` to give all access
            *   ```MariaDB [...]> GRANT ALL PRIVILEGES ON *.* TO user_name@localhost IDENTIFIED BY user_password WITH GRANT OPTION;``` to give all access and superuser access
            *   ```MariaDB [...]> GRANT ALL PRIVILEGES ON db_name.* TO user_name@localhost IDENTIFIED BY user_password;``` to give access to specific database
            *   ```MariaDB [...]> FLUSH PRIVILEGES;``` to refresh recently added privileges
            *   ```MariaDB [...]> SHOW GRANTS FOR user_name@localhost;``` to check status of privileges for user

    *   #####   Update a user's password
        *   Connect as superuser: ```mysql> mysql -u root -h localhost -p```
        *   Run: ```mysql> ALTER USER 'username'@'localhost' IDENTIFIED BY 'new_password';```

    *   #####   Remove a user
        *   ```DROP USER user_name@localhost;``` 

    *   #####   Remove MariaDB completely for re-install
        *   **BACKUP YOUR DATABASES** or you're gonna **loose them !**
        *   ```$ sudo service mysql stop```
        *   ```$ sudo apt-get --purge remove "mysql*"```
        *   ```sudo rem -rf /etc/mysql/```

    ####    MYSQL
    >   Another relationnal database, older than MariaDB (wich is based on a fork of MySQL by the way) and a lesser speed

    *   #####   Installation
        *   ```$ sudo apt update && sudo apt upgrade```
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

    *   #####   Update a user's password
        *   Connect as superuser: ```mysql> mysql -u root -h localhost -p```
        *   Run: ```mysql> ALTER USER 'username'@'localhost' IDENTIFIED BY 'new_password';```

    *   #####   Testing MySQL
        *   ```$ systemctl status mysql.service```
        *   You should see "Server is operationnal" and many others informations
            *   If not: ```$ sudo systemctl start mysql```
        *   ```$ sudo mysqladmin -p -u username version``` 
        *   You should see an output with many elements like mysqladmin version, this means MySQL is up and running :magic_wand:

    ####    MONGO DB
    >   A no SQL Databases manager/server, its powerfull schema less system and OOP structure and more of that an easy way to scale up when your website will growth

    *   #####   Installation
        *   ```$ sudo apt update && sudo apt upgrade```
        *   ```$ sudo apt install -y mongodb```
        *   Check install / running service with:  
            ```$ sudo systemctl status mongodb```   
        *   Install official Python MongoDB driver called PyMongo:  
            ```$ sudo pip3 install pymongo```

    *   #####   Make a connection with MongoClient
        :construction:

-   [TOOLS](#tools)
    -   [PHPMYADMIN](#phpmyadmin)
    -   [COMPOSER](#composer)
    -   [PHP MAILER](#php-mailer)

    ####    PHPMYADMIN
    >   PHPMyAdmin is a GUI, accesible remotely, that allows you to administrate MariaDB/MySQL easily. 

    *   #####   Installation
        *   ```$ sudo apt install phpmyadmin```
    *   #####   Configure Apache for PHPMyAdmin
        *   ```$ sudo nano /etc/apache2/apache2.conf```
        *   At the end of the file add followings:  
            *Include phpMyAdmin*    
            **Include /etc/phpmyadmin/apache.conf** 
    *   #####   Create an SQL superuser if you don't have one
        *   ```$ sudo mysql -u root```
        *   ```MariaDB [...]> CREATE USER user_name@localhost IDENTIFIED BY user_password;```
        *   ```MariaDB [...]> GRANT ALL PRIVILEGES ON *.* TO user_name@localhost IDENTIFIED BY user_password;``` to give all access
    *   #####   Accessing PHPMyAdmin remotely
        *   On your local computer, browse the following:   
            **http://your_server_IP/phpmyadmin
        *   Enter your SQL superuser credentials
        *   You now have access to the admin panel from everywhere
    
    ####    COMPOSER
    >   Composer is a popular dependency management tool for PHP, created mainly to facilitate installation and updates for project dependencies. Composer is also commonly used to bootstrap new projects based on popular PHP frameworks, such as Symfony and Laravel.

    *   #####   Installation
        *   ```$ sudo apt update && sudo apt upgrade```
        *   ```$ sudo apt install php-cli unzip```
        *   ```$ cd ~```
        *   ```$ curl -sS https://getcomposer.org/installer -o composer-setup.php```
        *   ```$ HASH=`curl -sS https://composer.github.io/installer.sig``` to verify download
        *   ```$ echo $HASH``` to verify the hash value
        *   ```$ php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"``` check script
        *   If the output is **Installer verified**, you're good to go, else start installation again
        *   ```$ sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer```
        *   ```$ composer``` to test your install, you should see long list of command starting by Composer's logo


    ####    PHP MAILER
    >   An extension that allows you to send email from PHP code in your web pages. Our way to install require Composer, see above for details. 
    *   #####   Installation
        *   ```$ sudo apt update && sudo apt upgrade```

    *   #####   Use Google SMTP
        *   [Allow less secure applications](https://myaccount.google.com/security-checkup) and **Turn on less secure app access**
        *   [Disable Captcha for server connection](https://accounts.google.com/DisplayUnlockCaptcha)
        *   Use the followings as connection information in your phpmailer config:
            *   ```$mail->Host = 'smtp.gmail.com';```
            *   ```$mail->Username = 'your_mail@google.com';```
            *   ```$mail->Password = 'you_google_password';``` be aware of security and better use a variable value coming from another php file that is secured and invisible
            *   ```mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;```
            *   ```mail->Port = 465;```


---


### DEVELOPMENT ENVIRONMENT
>   Configure a development environment available remotely
-   [VSCODE REMOTE DEVELOPMENT EXTENSION](#vscode-remote-development-extension) 
-   [PYTHON VIRTUAL ENVIRONMENT](#python-virtual-environment)
    -   [VENV](#venv)
    -   [PIPENV](#pipenv)

    ####    VSCODE REMOTE DEVELOPMENT EXTENSION
    > Allows you to connect to your server's files and projects remotely

    *   #####   SSH Server
        *   Make sure you have an SSH server running on your (virtual) private server, if you follow this guide you should have OpenSSH up to date doing the job

    *   #####   VSCODE
        *   Install [VSCode](https://code.visualstudio.com/) or [VSCode Insiders](https://code.visualstudio.com/insiders/) on your local computer.

    *   #####   VSCODE REMOTE DEVELOPMENT EXTENSION
        *   Install [Remote Development VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)  
        *   In VSCode (local), click on the *shiny blue*  **><** button on bottom left 
            *   Click *Connect to host*
            *   Choose *+ Add a new host*
            *   Type *ssh username@your_server_IP -A* and press *Enter*
            *   A new VScode window will pop, you're now connected to your remote server and have access to the file structure and all folders you have there. :thumbs:

    ####    PYTHON VIRTUAL ENVIRONMENT
    >   Create isolated space on your server for each of your Python's projects.

    *   ####    VENV
        *   #####   Installation
            *   ```$ sudo apt update && sudo apt upgrade```
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
            *   From now the start of your command prompt will be your environment name, all packages or library you'll install in it won't be linked to your (virtual) private server's system but only to this virtual environment :magic_wand:

        *   #####   Close venv virtual environment
            *   *CTRL + D*

        *   #####   Delete venv virtual environment 
            *   Simply delete *environment_name* folder with:   
                ```$ sudo rm -r .../environment_name/*```
    
    *   ####    PIPENV
        >   You need PIP package manager to use PIPENV
        *   #####   Installation
            *   ```$ pip install pipenv```
        *   #####   Create a new virtual environment
            *   Got to your project directory: ```$ cd project```
            *   Install environment: ```$ pipenv installl```
        *   #####   Launch virtual environment shell
            *   Launch shell: ```$ pipenv shell```
        *   #####   Install 3rd party package
            *   ```$ pipenv install package_name```
            *   For specific version: ```$ pipenv install package_name==0.10.1```
            *   Install from VCS (like Github): ```$ pipenv install -e git+https://github.com/package_name/package_name.git#egg=package_name```
            *   Specify using only in development: ```$ pipenv install package_name --dev```
        *   #####   Lock your environment when ready to production
            *   ```$ pipenv lock```
        *   #####   Tips to deploy
            *   When you have the **code** and the **Pipfile.lock** in your production environment, you should install the last successful environment recorded:    
            ```$ pipenv install --ignore-pipfile``` 
            *   If a developer wants to make additions to your code, they need the **code**, the **Pipfile** and type:  
            ```$ pipenv install --dev``` 
            This will install all packages, included the ones installed with **--dev** options


---


### **BeCode** Intensive Bootcamp     
This project took place in my leearning path in BeCode (see below) to full stack web developer.
In seven months you have a wonderful luck to become a great web developer. Inclusion and share spirit is your daily feeling !  
Give maximum to get maximum :rocket:

### COLLABORATION
Hello, I'm [Nicolas](https://www.linkedin.com/in/nicolas-denoel/), welcome to my all new life as developer.
After 15 years as manager and sales director it's time for me to make my dreams come true and to become a developer.
Autonomous learner, problem solver and commited team member, I'm ready for challenges !
So feel strongly to give me any recommandation about my work, advice for future projects, and all comments you want.  
If you are looking to hire a strong hybrid and atypical profile in your team do not hesitate to contact me to check if we can share a project together !  
Thanks by advance for that :heart:  

### TIMELINE
[:calendar: Discover the great timeline of my adventure to become a developer. Want to write your company's name on it ? Let's meet !](https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-05-26_2020-06-27)  

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
