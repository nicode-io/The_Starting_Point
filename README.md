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

