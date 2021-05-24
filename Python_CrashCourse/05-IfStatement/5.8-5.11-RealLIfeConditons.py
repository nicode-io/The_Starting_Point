# 5.8
usernames = ['django', 'python', 'admin', 'pip', 'pipenv', 'mvc']
for username in usernames:
    if username == 'admin':
        print(f'Hello {username.title()}, would you like a report ?')
    else:
        print(f'Hello {username.title()} ! Thanks for logging')
print('\n')

# 5.9
usernames = ['django', 'python', 'admin', 'pip', 'pipenv', 'mvc']
if usernames:
    for username in usernames:
        if username == 'admin':
            print(f'Hello {username.title()}, would you like a report ?')
        else:
            print(f'Hello {username.title()} ! Thanks for logging')
else:
    print('Be sure to create users ;)')
print('\n')

# 5.10
current_users = ['Django', 'python', 'ADMIN', 'pip', 'pipenv', 'mvc']
lower_current_users = [user.lower() for user in current_users]
print(lower_current_users)
new_users = ['django', 'bob', 'renaud', 'neil', 'albert', 'pip']
for new_user in new_users:
    if new_user.lower() in current_users:
        print(f'Sorry, {new_user.title()} is not available')
    else:
        print(f'Welcome {new_user.title()}')
print('\n')

# 5.11
numbers = []
for num in range(1, 10):
    numbers.append(num)
print(numbers)
for num in numbers:
    if num == 1:
        print('1st')
    elif num == 2:
        print('2nd')
    elif num == 3:
        print('3rd')
    else:
        print(f'{num}th')
