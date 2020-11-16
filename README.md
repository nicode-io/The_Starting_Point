#   (◉ ͜ʖ◉))ﾉ彡 BEGINNER'S GUIDE 
#   TO (VIRTUAL) PRIVATE SERVER ✧٩(•́⌄•́๑)
>   Want to host multiple websites on your own private server?  
>   Want to be free to configure your server as you like ?  
>   Let's start together ! 


## Description 
> Last Update: 16-11-2020

A small, unpretentious guide that brings together the information collected from different sites in order to best organize the first steps of installing the various tools on a (virtual) private server to host a multitude of websites and applications.

When you see::warning:, this refers directly to server, files or users' security

Little disclaimer: made by a rookie for the rookie, there's for sure missing things (I'll complete with times) and bad things (I'll improve myself). 


---


## :file_folder: Index
-   [SERVER INITIALISATION](#server-initialisation) 
    -   [SSH](#SSH) 
    -   [USERS MANAGEMENT](#users-management)
    -   [BASIC SECURITY FIRST STEP](#basic-security-first-step)
-   [INSTALL LAMP STACK](#install-lamp-stack)
    -   [Apache](#apache)
    -   [MySQL](#mysql)
    -   [PHP](#php)
-   [PHPMYADMIN](#phpmyadmin)
    -   [Installation](#installation)
    -   [Apache Configuration](#apache-configuration)
    -   [Users Privileges](#users-privileges)
    -   [Remote Access](#remote-access)
    -   [Secure Instance](#secure-instance)
-   [VIRTUAL HOSTS](#virtual-hosts)
    -   [Website Directory](#webiste-directory)
    -   [Virtual Host Configuration](#virtual-host-configuration)
-   [CERTBOT - SSL CERTIFICATION](#certbot---ssl-certification)
    -   [Installation](#installation)
    -   [Get SSL Certificate](#get-ssl-certificate)
    -   [Test SSL Configuration](#test-ssl-configuration)
-   [.HTACCESS](#.htaccess)
    -   [Apache Configuration](#apache-configuration)
    -   [.HTACCESS file](#.htaccess-file)
-   [WORDPRESS](#wordpress)
    -   [Create Database](#create-database)
    -   [Additionnal PHP Extensions](#additionnal-php-extensions)
    -   [Enable .HTACCESS Overrides](#enabling-.htaccess-overrides)
    -   [Enable Rewrite Module](#enable-rewrite-module)
    -   [Get Wordpress](#get-wordpress)
    -   [Configure Wordpress Directory](#configure-wordpress-directory)
    -   [Configure Wordpress Configuration File](#configure-wordpress-directory)
    -   [Complet Installation Online](#complete-installation-online)
-   [COLLABORATION](#collaboration)
-   [TIMELINE](#timeline)


---


# SERVER INITIALISATION
-   [SSH](#ssh)
-   [USERS MANAGEMENT](#users-management)
-   [BASIC SECURITY](#basic-security)

    ##    SSH
    >   Link your computer with an SSH key to secure remote communication

    *   ###   Create SSH key
        *   ```$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"```
        *   Choose name of the key and where to save :  
            /home/.ssh/key_name 
        *   Enter password twice for the key  
        *   ```$ sudo nano ~/.ssh/config``` and add followings:   
                ```Host *```  
                ``` AddKeysToAgent yes```  
                ``` UseKeychain yes```  
                ``` IdentityFile ~/.ssh/id_rsa```  
        *   ```$ ssh-add -K ~/.ssh/id_rsa```  
    *   ###    Copy SSH key in clipboard   
        *   ```$ pbcopy < ~/.ssh/key_name.pub```    
            or  (if you don't have pbcopy for example)  
        *   ```$ cat ~/.ssh/key_name.pub``` and copy terminal output
    *   ###   Connect to SSH to (virtual) private server  
        *   ```$ ssh-copy-id username@your_server_IP```  
        *   ```$ ssh 'user@host```You'll be asked by local system for key password  
        *   It's ok, from now you can connect without having to type a password on this computer   

    ##    USERS MANAGEMENT
    >   Set up users, you should not use root as daily user

    *   Switch to root user 
        *   ```$ sudo -i```
    *   Change root user's password
        *   ```$ passwd```
    *   Create user with sudo rights  
        *   ```$ sudo adduser username```   
        *   Enter user information and validate   
        *   Add user to sudo group    
            *   ```$ sudo usermod -aG sudo username```      
        *   Check if the user is in sudo group    
            *   ```$ id username```    
    *   Ask for **root** permissions while using your user
        *   ```$ su -```
        *   Enter **root** password

    ##    BASIC SECURITY
    >   Avoid major beginner's security breach

    *  ###  Edit **SSHD_CONFIG** file
        *   First be sure you have at least root ssh access and another user with sudo privileges too
        *   Open **sshd_config** file
            *   ```$ sudo nano /etc/ssh/sshd_config```
        *   Set
            *   ```PermitRootLogin``` to **no**
        *   Set (uncomment) 
            *   ```PasswordAuthentication```  to **no**
        *   Add : 
            *   ```AllowUsers username``` 
            *   Add a space between differents usernames
        *   Keep server connection alive with your local computer
            *   Set (uncomment)
                *    ```TCPKeepAlive``` to **yes**
            *   Set (uncomment)
                *    ```ClientAliveInterval``` to **120**
            *   Set (uncomment)
                *    ```ClientAliveCountMax``` to **0**
            *   On your local computer 
                *   ```$ sudo nano /etc/ssh/ssh_config```
                *   Add the following line:  ```ServerAliveInterval 120```
        *   Save and close **SSHD_CONFIG** file
        *   Restart SSH service
            *   ```$ sudo systemctl restart ssh```
        *   **WARNING**: Before leaving your server connection 
            *   Be sure to have restart SSH service
                *   ```$ sudo systemctl restart ssh```
            *   Open a new terminal window and log to your server in a new SSH session 
            *   If you modify the SSH connection port use
                *   ```$ ssh username@ip -pXX``` (where XX is the new port number)

    *   ###   Set up Ubuntu firewall
        *   Each applications have its own settings for firewall    
            you can see the app list 
            *   ```$ sudo ufw app list```
        *   Enable firewall
            *   ```$ sudo ufw enable```
        *   Authorize application (ex:OpenSSH)     
            *   ```$ sudo ufw allow OpenSSH```
        *   Allow HTTP & HTTPS
            *    ```$ sudo ufw allow proto tcp from any to any port 80,443```
        *   Allow specific port (ex: new SSH port)
        *   Check status
            *   ```$ sudo ufw status```
    
--- 

#   INSTALL LAMP STACK
-   [Apache](#apache)
-   [MySQL](#mysql)
-   [PHP](#php)

    ##  Apache
    >   A web server

    *   ### Installation
        *   ```$ sudo apt update && sudo apt upgrade -y```
        *   ```$ sudo apt install -y apache2```
        *   ```$ sudo ufw allow 'Apache Full'```
    *  ###  Check configuration 
        *   ```$ sudo apache2ctl configtest```  
        *   Result should be **Syntax OK** 
        *   Do not take into account **AH00558 error** for now
        
    ##  MySQL
    >   A relationnal database manager
    
    *   ### Installation
        *   ```$ sudo apt install -y mysql-server```
        *   Configure security and password validator
            *   ```$ sudo mysql_secure_installation```
            *   Select **y|Y**
            *   Choose a level of security **2** (adivce)
            *   Choose a root password for MySQL
            *   Answer **y|Y** to all following questions
            
    *   ### Check configuration
        *   ```$ systemctl status mysql.service```
        *   You should see "Server is operationnal" and many others informations
        
    *   ### MySQL Console
        *   ```$ sudo mysql```
        *   You are now in MySQL console
        *   ```mysql> exit```
        
    ##  PHP
    >   A well-known programming language, notably used in wordpress
    
    *   ### Installation
        *   ```$ sudo apt update && sudo apt -y upgrade```
        *   ```$ sudo apt install -y php libapache2-mod-php php-mysql```
        *   ```$ sudo phpenmod pdo_mysql```
        *   ```$ sudo service apache2 restart```
        
    *   ### Check configuration
        *   ```$ php -v``` 
        
---

##    PHPMYADMIN
>   PHPMyAdmin allows you to manage MariaDB/MySQL databases remotely
-   [Installation](#installation)
-   [Apache Configuration](#apache-configuration)
-   [Users Privileges](#users-privileges)
-   [Remote Access](#remote-access)
-   [Secure Instance](#secure-instance)

    *   ### Installation
        *   ```$ sudo mysql```
        *   ```mysql> UNINSTALL COMPONENT "file://component_validate_password";```
        *   ```$ sudo apt install -y phpmyadmin php-mbstring php-zip php-gd php-json php-curl```
        *   When prompted, select **apache2** with **spacebar**
            *   **WARNING** Be sure you see **[*] apache2**
        *   Click **<Ok>**
        *   Click **<Yes>**
        *   Choose a password

        *   ```$ sudo mysql```
        *   ```mysql> INSTALL COMPONENT "file://component_validate_password";```
        *   ```$ sudo phpenmod mbstring```
        
    *   ### Apache Configuration
        *   ```$ sudo nano /etc/apache2/apache2.conf```
        *   At the end of the file add followings:  
            *   ```# Include phpMyAdmin```  
            *   ```Include /etc/phpmyadmin/apache.conf```
        *   ```$ sudo systemctl restart apache2```
            
    *   ### Users Privileges
        *   ```$ sudo mysql```
        *   ```mysql> SELECT user,authentication_string,plugin,host FROM mysql.user;```
        *   Change **root** password type
            *   ```mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'new_strong_password';```
        *   Create your own superuser
            *   ```mysql> CREATE USER 'username'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'new_strong_password';```
        *   Give privileges to your own superuser
            *   ```mysql> GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' WITH GRANT OPTION;```
        *   ```mysql> exit```

    *   ### Remote Access
        *   On your local computer, browse the following   
            *   ```http://your_server_IP/phpmyadmin```
        *   Enter your superuser credentials
        
    *   ### Secure Instance
        *  ```$ sudo nano /etc/apache2/conf-available/phpmyadmin.conf```
        *   In **<Directory /usr/share/phpmyadmin>** add
            *   ```AllowOverride all```
        *   ```$ sudo systemctl restart apache2```
        *   ```$ sudo nano /usr/share/phpmyadmin/.htaccess```
        *   Add following lines to the file  
            AuthType Basic  
            AuthName "Restricted Files"  
            AuthUserFile /etc/phpmyadmin/.htpasswd  
            Require valid-user  
        *   Define password for htaccess file
            *   ```$ sudo htpasswd -c /etc/phpmyadmin/.htpasswd username```
        *   ```$ sudo systemctl restart apache2```
        *   On your local computer, browse the following   
            *   ```http://your_server_IP/phpmyadmin```
        *   You should be prompted now for the credentials you just defined before accessing phpMyAdmin
    
---

#    VIRTUAL HOSTS
>   Configure Apache behaviour for your domain name
-   [Website Directory](#webiste-directory)
-   [Virtual Host Configuration](#virtual-host-configuration)


*   ###   Website Directory
    *   ```$ sudo mkdir -p /var/www/domainname.com/public_html```
    *   ```$ sudo chown -R $USER:$USER /var/www/domainname.com/public_html```
    *   ```$ sudo chmod -R 755 /var/www```
    *   Create sample web content page 
        *   ```$ sudo nano /var/www/domainname.com/public_html/index.html```
        *   Add basic HTML page's content 

*   ###   Virtual Host Configuration
    *   ```$ sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/domainname.com.conf```
    *   ```$ sudo nano /etc/apache2/sites-available/domainname.com.conf```
    *   Overwrite with followings values :   
        ```<VirtualHost *:80>```      
            ```ServerAdmin admin@domainname.com```       
            ```ServerName domainname.com```     
            ```ServerAlias www.domainname.com```    
            ```DocumentRoot /var/www/domainname.com/public_html```      
            ```ErrorLog ${APACHE_LOG_DIR}/error.log```    
            ```CustomLog ${APACHE_LOG_DIR}/access.log combined```     
        ```</VirtualHost>```     
    *   Check Apache's configuration 
        *   ```$ sudo apache2ctl configtest```  
        *   Result should be **Syntax OK**
    *   Enable virtual host
        *   ```$ sudo a2ensite domainname.com.conf```
        *   ```$ sudo systemctl restart apache2```

---

#   CERTBOT - SSL CERTIFICATION
>   Get a free Let's Encrypt SSL certificate to run your site over HTTPS
-   [Installation](#installation)
-   [Get SSL Certificate](#get-ssl-certificate)
-   [Test SSL Configuration](#test-ssl-configuration)

    *   ### Installation 
        *   ```$ sudo apt update && sudo apt upgrade -y```
        *   ```$ sudo apt install -y certbot python3-certbot-apache```

    *   ### Get SSL Certificate
        *   ```$ sudo certbot --apache```
        *   Enter a valid email adress, it'll be used for renewal !
        *   Agree the terms of service
        *   Share or not your email (not recommended)
        *   Each domain for wich you can activate a certificate, choose one or many, if many separate choice's number by a space
        *   Validate and wait for the certification to be done
        *   Test your website with HTTPS, and the magic happens :magic_wand:
        *   You can use following to check renewal (if no error it's fine)
           *    ```$ sudo systemctl status certbot.timer``` 
            *   ```$ sudo certbot renew --dry-run```
            
    *   ### Test SSL configuration
        *   Find **https://www.ssllabs.com/ssltest/analyze.html?xxxx** link when Certbot finished installing certificate
        *   You'll get a link for each certificates 
        *   Visit this link and wait for the test result, I hope you're A graded ;)

---

#   .HTACCESS
>   Repeat for each of your virtual host
-   [Apache Configuration](#apache-configuration)
-   [.HTACCESS file](#.htaccess-file)
    
    *   ### Set up Apache
        *   ```$ sudo nano /etc/apache2/sites-available/domainname.com.conf```
        *   Add following lines after the **</virtualHost>** line:   
            ```<Directory /var/www/domainname.com/public_html> ```
            ```    Options Indexes FollowSymLinks  ```
            ```    AllowOverride All   ```
            ```    Require all granted ```
            ```</Directory>   ```
        *   ```$ sudo systemctl restart apache2```
    
    *   ### Create & configure .HTACCESS file
        *   ```$ cd /var/www/domainname.com/public_html```
        *   ```$ sudo touch .htacess```
        *   ```$ sudo nano .htaccess``` and add
            *   ```Options -Indexes```
        *   This file can be edited for redirection, 404 page, filters, ...
        
---

#   WORDPRESS
>   The most used CMS currently 
-   [Create Database](#create-database)
-   [Additionnal PHP Extensions](#additionnal-php-extensions)
-   [Enable .HTACCESS Overrides](#enabling-.htaccess-overrides)
-   [Enable Rewrite Module](#enable-rewrite-module)
-   [Get Wordpress](#get-wordpress)
-   [Configure Wordpress Directory](#configure-wordpress-directory)
-   [Configure Wordpress Configuration File](#configure-wordpress-directory)
-   [Complet Installation Online](#complete-installation-online)


    *   ### Create Database
        *   ```$ mysql -u root -p```
        *   ```mysql> CREATE DATABASE wordpress DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;```
        *   ```mysql> CREATE USER 'wordpressuser'@'%' IDENTIFIED WITH mysql_native_password BY 'password';```
        *   ```mysql> GRANT ALL PRIVILEGES ON wordpress.* TO 'wordpressuser'@'%';```
        *   ```mysql> FLUSH PRIVILEGES;```
        *   ```mysql> EXIT;```

    *   ### Additionnal PHP Extensions
        *   ```$ sudo apt update && sudo apt upgrade -y```
        *   ```$ sudo apt install -y php-curl php-gd php-mbstring php-xml php-xmlrpc php-soap php-intl php-zip```
        *   ```su```

    *   ### Enable .HTACCESS Overrides
        *   ```$ sudo nano /etc/apache2/sites-available/domainname.com.conf```
        *   Add followings:
            ```<Directory /var/www/domainname/public_html/>```      
            ```     AllowOverride All```    
            ```</Directory>```

    *   ### Enable Rewrite Module
        *   ```$ sudo a2enmod rewrite```
        *   ```$ sudo apache2ctl configtest```
        *   ```$ sudo systemctl restart apache2```

    *   ### Get Wordpress
        *   ```$ cd /tmp```
        *   ```$ curl -O https://wordpress.org/latest.tar.gz```
        *   ```$ tar xzvf latest.tar.gz```
        *   ```$ touch /tmp/wordpress/.htaccess```
        *   ```$ cp /tmp/wordpress/wp-config-sample.php /tmp/wordpress/wp-config.php```
        *   ```$ mkdir /tmp/wordpress/wp-content/upgrade```
        *   ```$ sudo cp -a /tmp/wordpress/. /var/www/domainname/public_html```
    
    *   ### Configure Wordpress Directory
        *   ```$ sudo chown -R www-data:www-data /var/www/domainname/public_html``` 
        *   ```$ sudo find /var/www/domainname/public_html -type d -exec chmod 750 {} \;```
        *   ```$ sudo find /var/www/domainname/public_html -type f -exec chmod 640 {} \;```

    *   ### Configure WordPress Configuration File
        *   ```$ curl -s https://api.wordpress.org/secret-key/1.1/salt/```
        *   Copy the 8 security keys
        *   ```$ sudo nano /var/www/domainname/public_html/wp-config.php```
        *   Replace default keys by pasting in the good section
        *   Replace database default values by your database informations
        *   Below database informations, add: **define('FS_METHOD', 'direct');**
    
    *   ### Complete Installation Online
        *   Go to: **https://server_domain** or **https://ip**
        *   Select language
        *   Choose a site name, username, strong password and email
        *   Validate and on the next page, log in and enjoy ;)
        *   (If you follow this guide from the start don't forget to delete the **index.html** file in your **/var/www/domainname/public_html** directory

--- 

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


### **BeCode** Intensive Bootcamp     
This project took place in my leearning path in BeCode (see below) to Junior App & Web Developer.
In ten months, you have a wonderful opportunity to become a great junior web developer. 
We are motivated by inclusion and the spirit of sharing!   
The bootcamp aims at acquiring self-learning skills and mastering a junior web developer path, both frontend and backend. 
Support is provided by a team of great coaches who will guide you and help you overcome the various peaks of difficulty encountered.

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
