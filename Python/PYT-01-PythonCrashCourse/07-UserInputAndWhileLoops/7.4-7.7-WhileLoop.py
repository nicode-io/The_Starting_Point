# 7.4
topping = ''
while topping != 'quit':
    topping = input('What topping do you want to add to your pizza ? (enter QUIT for none) ')
    if topping != 'quit':
        print(f'{topping.title()} was added to your pizza !')

# 7.5
age = 0 
while True:
    age = int(input('What\'s your age ? ' ))
    if age < 3:
        print('The ticket is free !')
        break
    elif age >= 3 and age <= 12:
        print('The ticket price is 10$')
        break
    if age > 12:
        print('The ticket price is 15$')
        break

# 7.6
topping = ''
while topping != 'quit':
    topping = input('What topping do you want to add to your pizza ? (enter QUIT for none) ')
    if topping == 'quit':
        break
    else:
        print(f'{topping.title()} was added to your pizza !')

# 7.7 Infinite Loop
# while True:
#     print('I\'m an infinite loop')
