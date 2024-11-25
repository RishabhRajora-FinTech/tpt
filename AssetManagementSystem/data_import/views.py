# data_import/views.py

from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import CSVUploadForm
from portfolio.models import Portfolio
import csv

def upload_csv(request):
    if request.method == 'POST':
        form = CSVUploadForm(request.POST, request.FILES)
        if form.is_valid():
            csv_file = request.FILES['csv_file']
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            reader = csv.DictReader(decoded_file)

            # Check for missing keys
            expected_keys = ['portfolio_name', 'portfolio_code', 'school_number', 'full_name',
                             'portfolio_type', 'status', 'type_of_emp', 'father_name',
                             'mother_name', 'cusp', 'entered_by', 'confirmed']
            missing_keys = [key for key in expected_keys if key not in reader.fieldnames]

            if missing_keys:
                messages.error(request, f"Missing keys in CSV file: {', '.join(missing_keys)}")
                return redirect('upload_csv')

            for row in reader:
                Portfolio.objects.create(
                    portfolio_name=row['portfolio_name'],
                    portfolio_code=row['portfolio_code'],
                    school_number=row['school_number'],
                    full_name=row['full_name'],
                    portfolio_type=row['portfolio_type'],
                    status=row['status'],
                    type_of_emp=row['type_of_emp'],
                    father_name=row['father_name'],
                    mother_name=row['mother_name'],
                    cusp=row['cusp'],
                    entered_by=row['entered_by'],
                    confirmed=row['confirmed']
                )
            messages.success(request, "CSV file data has been imported successfully.")
            return redirect('upload_csv')
    else:
        form = CSVUploadForm()

    return render(request, 'data_import/upload_csv.html', {'form': form})
