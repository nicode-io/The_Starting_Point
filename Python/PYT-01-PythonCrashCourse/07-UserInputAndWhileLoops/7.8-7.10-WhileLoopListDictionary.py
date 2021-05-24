# 7.8
sandwich_orders = ['club', 'american', 'tuna', 'vegetables']
finished_sandwiches = []
while sandwich_orders:
    order = sandwich_orders.pop()
    print(f'{order.title()} is prepared...')
    finished_sandwiches.append(order.title())
for sandwich in finished_sandwiches:
    print(f'{sandwich} is ready !')
print('\n')

# 7.9
sandwich_orders = ['pastrami', 'club', 'american', 'tuna', 'pastrami', 'vegetables', 'pastrami']
finished_sandwiches = []
print('We are sorry, we ran out of pastrami')
while 'pastrami' in sandwich_orders:
    sandwich_orders.remove('pastrami')
while sandwich_orders:
    order = sandwich_orders.pop()
    print(f'{order.title()} is prepared...')
    finished_sandwiches.append(order.title())
for sandwich in finished_sandwiches:
    print(f'{sandwich} is ready !')  