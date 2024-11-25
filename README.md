Open two terminal and run react and django simantalinously

## run react.js 

cd frontend 
npm start

## migrate the changes in the app


python manage.py makemigrations assets
python manage.py migrate


### RESET the project 

To reset your Django project and start from an initial migration, you can follow these steps. This will clear your database and migrations, and then apply the initial migration again:

1. **Delete Migrations Files**:
   Go to each app's migrations directory and delete all migration files except for the `__init__.py` file.

   ```bash
   find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
   find . -path "*/migrations/*.pyc"  -delete
   ```

2. **Drop and Recreate the Database**:
   If you are using SQLite, simply delete the database file. For other databases, you will need to drop and recreate the database.

   For SQLite:
   ```bash
   rm db.sqlite3
   ```

   For PostgreSQL:
   ```bash
   psql
   DROP DATABASE your_database_name;
   CREATE DATABASE your_database_name;
   ```

   For MySQL:
   ```bash
   mysql -u root -p
   DROP DATABASE your_database_name;
   CREATE DATABASE your_database_name;
   ```

3. **Create Initial Migrations**:
   Generate new initial migration files for all apps.

   ```bash
   python manage.py makemigrations
   ```

4. **Apply Migrations**:
   Apply the new initial migration to your database.

   ```bash
   python manage.py migrate
   ```

5. **Create/Update the Superuser**:
   If you haven't already, you might want to create or update your superuser to manage your models through the Django admin interface.

   ```bash
   python manage.py createsuperuser
   ```

6. **Run the Server**:
   Start your Django development server to see your changes in action.

   ```bash
   python manage.py runserver
   ```

This will completely reset your Django project and apply the initial migrations. Remember to back up any important data before you start this process.

Feel free to reach out if you need further assistance or if you encounter any issues!