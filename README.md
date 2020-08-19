# BEGINNER'S GUIDE TO VPS 
> On my way to host multiple websites on my virtual private server


## Description 
> Start 15-08-2020

Beginning with the use of a virtual private server, it seemed appropriate to collect the different sources of information to make a memento and perhaps a guide in the future. 
You are free to share additional data or correct existing ones. 
The information in this document is collected as part of my learning how to use a VPS. It may contain errors, or even create security holes in your installation. 

---

## Index
- [Server Initialisation](#server-initialisation) 
- [Websites Hostings](#websites-hosting)
- [Collaboration](#collaboration)
- [Timeline](#timeline)

---

### SERVER INITIALISATION
*   SSH
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

*   Disabling password authentication on your server
    *   First be sure you have at least root ssh access to your server, ideal would be to have another user with sudo powers and ssh access to your server.
    *   ```$ sudo nano /etc/ssh/sshd_config```
    *   Uncomment line: "PasswordAuthentication yes" and change it to "PasswordAuthentication no"
    *   Save and close file
    *   ```$ sudo systemctl restart ssh```
    *   As precaution, open a new terminal window and teest that the SSH service is running correctly before closing session, and so avoid you can't log on your sever next time

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

### WEBSITES HOSTING
*   Redirect your domain name to VPS
    *   Check on your domain name's provider dashboard a **DNS** section or **A-Records** section
    *   Create a new A-record using the followings :
        *   Host: **@**
        *   Value/IP: **your_vps_ip** (ipv4)  
        *   TTL: **auto** or **30minutes** or specific setting if you need it
        *   Check propagation with : ```$ dig your_domain_name```you should see if the process works 

*   Install APACHE Web Server
    *   ```$ sudo apt-get update```
    *   ```$ sudo apt-get install apache2```

> Repeat followings for each website you host
*   Making file / directory structure and setup permissions
    *   ```$ sudo mkdir -p /var/www/domainname.com/public_html```
    *   ```$ sudo chown -R $USER:$USER /var/www/domainname.com/public_html```
    *   ```$ sudo chmod -R 755 /var/www```
*   Create sample web content page 
    *   ```$ sudo nano /var/www/domainname.com/public_html/index.html```
    *   Add basic HTML page's content 
*   Create virtual host configuration files
    *   ```$ sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/domainname.com.conf```
    *   Overwrite with followings values :   
    ```<VirtualHost *:80>```    
    ```ServerAdmin admin@test.com```     
    ```ServerName test.com```   
    ```ServerAlias www.test.com```  
    ```DocumentRoot /var/www/test.com/public_html```    
    ```ErrorLog ${APACHE_LOG_DIR}/error.log```  
    ```CustomLog ${APACHE_LOG_DIR}/access.log combined```   
    ```</VirtualHost>```    
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