# 5.3
alien_color = 'green'
if alien_color == 'green':
    print('You win 5 points !')

# 5.4
if alien_color == 'green':
    print('You win 5 points !')
else:
    print('You win 10 points !')

# 5.5
if alien_color == 'green':
    print('You win 5 points !')
elif alien_color == 'yellow':
    print('You win 10 points !')
else:
    print('You win 15 points !')

# 5.6
age = 20
if age < 2:
    print('You are a baby')
elif age >= 2 and age < 4:
    print('you are a toddler')
elif age >= 4 and age < 13:
    print('you are a kid')
elif age >= 13 and age < 20:
    print('you are a teenager')
elif age >= 20 and age < 65:
    print('you are an adult')
elif age >= 65:
    print('you are an elder')

# 5.7
favorite_fruits = ['apple', 'kiwi', 'banana', 'strawberry', 'lemon', 'orange']
if 'apple' in favorite_fruits:
    print('Apples are great')
if 'strawberry' in favorite_fruits and 'banana' in favorite_fruits:
    print('You like many fruits !')
