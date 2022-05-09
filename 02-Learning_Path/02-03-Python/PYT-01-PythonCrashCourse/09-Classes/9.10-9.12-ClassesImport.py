# 9.10
from module import Restaurant
new_restaurant = Restaurant('chez sam', 'french food')
new_restaurant.describe_restaurant()
print('\n')

# 9.11
from module import User, Admin, Privileges
new_user = Admin('nicolas', 'denoel', 36, 'Belgium')
new_user.privileges.show_privileges()

# 9.12
# Be sure to put correct import on every module and on the final file you're working with and that's all ;)