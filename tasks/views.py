from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError
from .forms import TaskForm
from .models import Task
from django.utils import timezone
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.urls import reverse


# Create your views here.
def home(request):
    return render(request, 'home.html')


def signup(request):
    if request.method == 'GET':
        return render(request, 'signup.html', {
            'form': UserCreationForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(
                    username=request.POST['username'],
                    password=request.POST['password1']
                )
                user.save()
                login(request, user)
                return redirect('/?signup_success=true')
            except IntegrityError:
                # Redirigir con parámetro de usuario ya existente
                return redirect('/signup?user_exists=true')  
        else:
            return redirect('/signup?password_error=true')  # Redirigir con parámetro de error de contraseñas



@login_required
def tasks(request): 
    tasks = Task.objects.filter( Q(user=request.user) | Q(assigned_to=request.user), datecompleted__isnull=True)
    return render(request, 'tasks.html', {'tasks': tasks, 'title': 'Tareas Pendientes'})

@login_required
def tasks_completed(request): 
    tasks = Task.objects.filter( Q(user=request.user) | Q(assigned_to=request.user), datecompleted__isnull=False).order_by
    ('-datecompleted')
    return render(request, 'tasks.html', {'tasks': tasks, 'title': 'Tareas Completadas'})

@login_required
def task_detail(request, task_id):
    if request.method == 'GET':
        task = get_object_or_404(Task, Q(pk=task_id) & (Q(user=request.user) | Q(assigned_to=request.user)))
        form = TaskForm(instance=task)
        return render(request, 'task_detail.html', {'task': task, 'form': form})
    else:
        try:
            task = get_object_or_404(Task, Q(pk=task_id) & (Q(user=request.user) | Q(assigned_to=request.user)))
            form = TaskForm(request.POST, instance=task)
            form.save()
            return redirect(f"{reverse('tasks_pending')}?task_updated=true")
        except ValueError:
            return render(request, 'task_detail.html', {
                'task': task,
                'form': form,
                'error': "Error al actualizar la tarea"
            })

@login_required           
def complete_task(request, task_id):
    task = get_object_or_404(Task, Q(pk=task_id) & (Q(user=request.user) | Q(assigned_to=request.user)))
    if request.method == 'POST':
        task.datecompleted = timezone.now()
        task.save()
        return redirect(f"{reverse('tasks_pending')}?task_completed=true")

@login_required 
def delete_task(request, task_id):
    task = get_object_or_404(Task, Q(pk=task_id) & (Q(user=request.user) | Q(assigned_to=request.user)))
    if request.method == 'POST':
        task.delete()
        return redirect(f"{reverse('tasks_pending')}?task_deleted=true")


@login_required  
def create_task(request):
    
    if request.method == 'GET':
        return render(request, 'create_task.html', {
        'form': TaskForm
    })
    else:
        try:
            form = TaskForm(request.POST)
            new_task = form.save(commit=False)
            new_task.user = request.user
            new_task.save()
            if form.cleaned_data['assigned_to']:
                new_task.assigned_to = form.cleaned_data['assigned_to']
            new_task.save()
            return redirect(f"{reverse('tasks_pending')}?task_created=true")
        except ValueError:
            return render(request, 'create_task.html', {
                'form': TaskForm,
                'error': 'Hubo un error al crear la tarea'
            })

@login_required
def signout(request):
    logout(request)
    return redirect('/?logout_success=true')

def signin(request):
    if request.method == 'GET':
        return render(request, 'signin.html', {
        'form': AuthenticationForm
    })
    
    else:
        user = authenticate(request, username=request.POST['username'],
        password=request.POST['password'])
        if user is None: 
            return redirect(f'/signin/?error=Username%20or%20password%20is%20incorrect')
        else:
            login(request, user)
            return redirect('/?login_success=true')
        
@login_required
def search(request):
    return render(request, 'search.html')
