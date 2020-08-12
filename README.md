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
    