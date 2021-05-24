# 5.1
cat = 'miaouw'
print('Is cat == \'woof\' ? I don\'t think so')
if (cat == 'woof'):
    print('TRUE')
else:
    print('FALSE')

print('\nIs cat == \'miaouw\' ? I think so')
if (cat == 'miaouw'):
    print('TRUE')
else:
    print('FALSE')

# 5.2
car = 'audi'
color = 'blue'
style = 'sport'
if (car=='renault') or (color=='blue') or (style=='sport'):
    print('\nok')
else:
    print('\nnot ok')

car = 'AUDI'
color = 'blue'
style = 'sport'
if (car.lower()=='audi') and (color=='blue') and (style=='sport'):
    print('\nok')
else:
    print('\nnot ok')

ls = ('audi', 'bmw', 'porsche')
car = ('AUDI')
if car.lower() in ls:
    print('\nLet\'s race !')
else: 
    print('\nYou\'re not allowed to take this race')

ls = ('audi', 'bmw', 'porsche')
car = ('renault')
if car not in ls:
    print('\nYou\'re not allowed to take this race')
else: 
    print('\nLet\'s race !')