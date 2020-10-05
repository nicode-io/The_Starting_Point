from django.shortcuts import render
from django.http import HttpResponse
from datetime import date
import calendar

def index(request, year, month):
    year = int(year)
    month = int(month)
    if year < 2000 or year > 2099: year = date.today().year
    month_name = calendar.month_name[month]
    title = "MyClub Event Calendar - %s %s" % (month_name, year)
    return HttpResponse("<h1>%s</h1>" % title)



