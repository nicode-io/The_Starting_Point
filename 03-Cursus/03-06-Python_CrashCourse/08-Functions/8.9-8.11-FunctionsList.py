# 8.9
msg = ['hello you', 'are you fine', 'do you eat with us', 'have a nice evening']
def show_messages(msg_list):
    '''Show messages in a list'''
    for message in msg_list:
        print(message)
show_messages(msg)
print('\n')

# 8.10
msg = ['hello you', 'are you fine', 'do you eat with us', 'have a nice evening']
archived_messages = []
def send_messages(msg_list, archive_list):
    '''
    Show messages before appending in archive_list
    and remove message from msg_list
    '''
    while msg_list:
        temp_msg = msg_list.pop()
        print(temp_msg)
        archive_list.append(temp_msg)
send_messages(msg, archived_messages)
print(msg, archived_messages)
print('\n')

# 8.11
msg = ['hello you', 'are you fine', 'do you eat with us', 'have a nice evening']
archived_messages = []
def send_messages(msg_list, archive_list):
    '''
    Show messages before appending in archive_list
    and remove message from msg_list
    '''
    while msg_list:
        temp_msg = msg_list.pop()
        print(temp_msg)
        archive_list.append(temp_msg)
send_messages(msg[:], archived_messages)
print(msg, archived_messages)
print('\n')
