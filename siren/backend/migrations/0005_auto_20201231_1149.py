# Generated by Django 3.1.2 on 2020-12-31 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_auto_20201112_1705'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goals',
            name='end_time',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='goals',
            name='start_time',
            field=models.DateField(),
        ),
    ]
