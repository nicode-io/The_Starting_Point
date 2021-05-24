# 3.4
diner_people = ['albert einstein', 'bob dylan', 'freddy mercury']
print(f'Dear {diner_people[0].title()} we\'d love to meet you for a diner')
print(f'Dear {diner_people[1].title()} we\'d love to meet you for a diner')
print(f'Dear {diner_people[2].title()} we\'d love to meet you for a diner')

# 3.5
decline_people = diner_people.pop()
print(f'\n{decline_people.title()} can\'t join us for the diner')
print(f'{diner_people[1].title()} can\'t join us for the diner')
diner_people[1] = 'louis amstrong'
diner_people.insert(2, 'renaud sechan')
print(f'\nDear {diner_people[0].title()} we\'d love to meet you for a diner')
print(f'Dear {diner_people[1].title()} we\'d love to meet you for a diner')
print(f'Dear {diner_people[2].title()} we\'d love to meet you for a diner')

# 3.6
print('\nDear guests, we\'ve found a bigger spot for the diner')
diner_people.insert(0, 'brigitte bardot')
diner_people.insert(2, 'thomas edison')
diner_people.append('leonardo da vinci')
print(f'\nDear {diner_people[0].title()} we\'d love to meet you for a diner')
print(f'Dear {diner_people[1].title()} we\'d love to meet you for a diner')
print(f'Dear {diner_people[2].title()} we\'d love to meet you for a diner')
print(f'Dear {diner_people[3].title()} we\'d love to meet you for a diner')
print(f'Dear {diner_people[4].title()} we\'d love to meet you for a diner')
print(f'Dear {diner_people[5].title()} we\'d love to meet you for a diner')

# 3.7
print('\nWe\'re verry sorry but since Coronavirus we can just have two of you dear guests')
popped = diner_people.pop(1)
print(f'\nDear {popped.title()} we\'re sorry, maybe next time')
popped = diner_people.pop(1)
print(f'Dear {popped.title()} we\'re sorry, maybe next time')
popped = diner_people.pop(1)
print(f'Dear {popped.title()} we\'re sorry, maybe next time')
popped = diner_people.pop(2)
print(f'Dear {popped.title()} we\'re sorry, maybe next time')
print(f'\nDear {diner_people[0].title()} please join us on 08:00pm')
del diner_people[0]
print(f'Dear {diner_people[0].title()} please join us on 08:00pm')
del diner_people[0]
print(diner_people)