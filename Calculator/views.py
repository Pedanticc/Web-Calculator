from __future__ import print_function
from tempfile import tempdir
import tempfile
from urllib import request
from django.shortcuts import render
from django.http import HttpResponse
from django.utils.datastructures import MultiValueDictKeyError
from . import calculation
import js2py

adress = "C:/Users/Island/Desktop/The State/Web Calculator/Web_Calculator/Calculator/appss.js"
def home(request):
    global adress
    res = "None"
    
    try:
        num1 = request.POST['num1']
        type_of_operation = request.POST['types']
        num2 = request.POST['num2']

    except Exception:
        res = "None"
        pass

    else:
        res = calculation.check_poin(x = num1, y = num2, z = type_of_operation)


    return render(request, "Calculator/index.html", {"result": res})

