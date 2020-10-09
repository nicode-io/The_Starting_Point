# class MyMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response
#
#     def __call__(self, request):
#         #   This code is executed before the
#         #   next middleware or view is called
#         request.META['CUSTOM_FIELD'] = "My middleware custom message"
#
#         response = self.get_response(request)
#
#         #   This code is executed after the view is called
#         #   I.e on the "return journey"
#         assert False
#         return response
