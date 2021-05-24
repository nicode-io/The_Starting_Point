def cars(manufacturer, model_name, **car_info):
    '''
    Create a dictionary of a car with every time a manufacturer and a model_name,
    it than accepts multiples keywords/arguments
    '''
    car_info['manufacturer'] = manufacturer
    car_info['model_name'] = model_name
    return car_info