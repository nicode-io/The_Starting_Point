GUIDE TO VPS BEGINNERS
Step-by-Step 

*   SSH
    *   Create SSH key
        *   $ ssh-keygen
        *   Choose name of the key and where to save :  
            /home/.ssh/key_name 
        *   Enter password twice for the key    
    *   Copy SSH key in clipboard   
        *   pbcopy < ~/.ssh/key_name.pub    
            or  (if you don't have pbcopy for example)  
        *   cat ~/.ssh/key_name.pub and copy terminal output

*   Avoid using root user for daily admin usage, cause of too many privileges this user have, instead create a user with sudo powers, it will allow you to do main daily tasks

*   Create user with sudo powers on server  
    *   $ sudo adduser username 
    *   Enter user information and validate 
    *   Add user to sudo group  
        *   $ sudo usermod -aG sudo username    
            check if the user is in sudo group  
        *   $ id username    

*   Disabling password authentication on your server
    *   First be sure you have at least root ssh access to your server, ideal would be to have another user with sudo powers and ssh access to your server.
    *   $ sudo nano /etc/ssh/sshd_config
    *   Uncomment line: "PasswordAuthentication yes" and change it to "PasswordAuthentication no"
    *   Save and close file
    *   $ sudo systemctl restart ssh 
    *   As precaution, open a new terminal window and teest that the SSH service is running correctly before closing session, and so avoid you can't log on your sever next time

*   Setting up basic firewall
    *   Each applications have its own settings for firewall    
        you can see the app list :  
    *   $ sudo ufw app list  
        authorize OpenSSH : 
    *   $ sudo ufw allow OpenSSH 
        enable then firewall :
    *   $ sudo ufw enable   
        check status
    *   $ sudo ufw status
    *   Be sure to allow future applications through the firewall to allow traffic in
