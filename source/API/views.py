from django.shortcuts import render
import json
from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
def add_view(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print(data)
            answer = {
                'answer': float(data['A']) + float(data['B'])
            }
            return JsonResponse(answer)
        except ValueError:
            response = JsonResponse({'error': "Error! Wrong input!"})
            response.status_code = 400
            return response
    elif request.method == "GET":
        data = request.body
        print(data)
        response = HttpResponse(data)
        return response


# @ensure_csrf_cookie
def subtract_view(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print(data)
            answer = {
                'answer': float(data['A']) - float(data['B'])
            }
            return JsonResponse(answer)
        except ValueError:
            response = JsonResponse({'error': "Error! Wrong input"})
            response.status_code = 400
            return response


# @ensure_csrf_cookie
def multiply_view(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print(data)
            answer = {
                'answer': float(data['A']) * float(data['B'])
            }
            return JsonResponse(answer)
        except ValueError:
            response = JsonResponse({'error': "Error! Wrong input"})
            response.status_code = 400
            return response


# @ensure_csrf_cookie
def divide_view(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print(data)
            answer = {
                'answer': float(data['A']) / float(data['B'])
            }
            return JsonResponse(answer)
        except ValueError:
            response = JsonResponse({'error': "Error! Wrong input or division by zero!"})
            response.status_code = 400
            return response


