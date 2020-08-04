# 4.10
pizzas = ['margharita', 'four cheeses', 'special', 'peperoni', 'sea', 'four seasons']
print(f'The first item in the list is {pizzas[:1]}')
print(f'Three items in the list are {pizzas[1:4]}')
print(f'Last three items in the list are {pizzas[-3:]}')

# 4.11
pizzas = ['margharita', 'four cheeses', 'special', 'peperoni', 'sea', 'four seasons']
friend_pizzas = pizzas [:]
pizzas.append('calzone')
friend_pizzas.append('mushrooms')
print(f'\nMy favorite pizzas are :')
for pizza in pizzas:
  print(pizza)
print(f'\nMy friend\'s favorite pizzas are :')
for friend_pizza in friend_pizzas:
  print(friend_pizza)

# 4.12
my_food = ['pizza', 'falafel', 'carrot cake', 'cannoli', 'ice cream']
friend_food = ['pasta', 'falafel', 'butter cake', 'bretzel']
for food in my_food:
  print(f'\n{food}')
for food in friend_food:
  print(f'\n{food}')
