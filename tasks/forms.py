from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['title', 'description', 'important', 'assigned_to']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Escribe el titulo'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Escribe la descripción'}),
            'important': forms.CheckboxInput(attrs={'class': 'form-check-input ms-auto'}),
            'assigned_to': forms.Select(attrs={'class': 'form-select mb-3'})
        }