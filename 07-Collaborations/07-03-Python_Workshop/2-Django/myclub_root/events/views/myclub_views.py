from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.template.response import TemplateResponse
from django.core.paginator import Paginator
from datetime import date
import calendar
from calendar import HTMLCalendar
from events.models import Event, Venue, MyClubUser
from events.forms import VenueForm


def index(request, year=date.today().year, month=date.today().month):
    year = int(year)
    month = int(month)
    if year < 2000 or year > 2099: year = date.today().year
    month_name = calendar.month_name[month]
    title = "MyClub Event Calendar - %s %s" % (month_name, year)
    cal = HTMLCalendar().formatmonth(year, month)
    announcements = [
        {
            'date': '6-10-2020',
            'announcement': "Club Registrations Open"
        },
        {
            'date': '6-15-2020',
            'announcement': "Joe Smith Elected New Club President"
        }
    ]
    return TemplateResponse(request,
                            'events/calendar_base.html',
                            {'title': title, 'cal': cal, 'announcements': announcements}
                            )


def all_events(request):
    # event_list = Event.objects.all()
    # Need to use this version after Chapter 9:
    event_list = Event.events.all()
    return render(request,
                  'events/event_list.html',
                  {'event_list': event_list}
                  )


def add_venue(request):
    submitted = False
    if request.method == 'POST':
        form = VenueForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/add_venue/?submitted=True')
    else:
        form = VenueForm()
        if 'submitted' in request.GET:
            submitted = True
    return render(request,
                  'events/add_venue.html',
                  {'form': form, 'submitted': submitted}
                  )


def list_subscribers(request):
    p = Paginator(MyClubUser.objects.all(), 3)
    page = request.GET.get('page')
    subscribers = p.get_page(page)
    return render(request,
                  'events/subscribers.html',
                  {'subscribers': subscribers}
                  )
