from django import forms
from django.shortcuts import render
from django.http import HttpResponseRedirect

class ContactForm(forms.Form):
    yourname = forms.CharField(max_length=100, label='Your name')
    email = forms.EmailField(required=False, label='Your Email address')
    subject = forms.CharField(max_length=100)
    messsage = forms.CharField(widget=forms.Textarea)

def contact(request):
    submitted = False
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data # normalize data and store them in a dictionary
            assert False
            return HttpResponseRedirect('contact?submitted=True')
    else:
        form = ContactForm()
        if 'submitted' in request.GET:
            submitted = True
    return render(request,
                  'contact/contact.html',
                  {'form': form, 'submitted': submitted}
                  )
