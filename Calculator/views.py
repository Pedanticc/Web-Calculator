from __future__ import print_function
from urllib import request
from django.shortcuts import render
from django.http import HttpResponse
from django.utils.datastructures import MultiValueDictKeyError
from . import calculation


def home(request):
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
        print(res)


    return render(request, "Calculator/index.html", {"result": res})

