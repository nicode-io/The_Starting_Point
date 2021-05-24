# 7.1
msg = input('What kind of rental car do you like ? ')
print(f'Let\'s see if I have a {msg} available')

# 7.2
msg = int(input('How many people are in your dinner group ? '))
if msg > 8:
    print('Please wait a few minutes for your table, please')
else:
    print('Your table is ready, please have a seat')

# 7.3
msg = int(input('Wich number do you want to test as a multiple of ten ? '))
if (msg % 10) == 0:
    print(f'{msg} is a multiple of 10')
else:
    print(f'{msg} is not a multiple of 10')