# Generated by Django 3.1.2 on 2020-12-31 11:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20201231_1149'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='goals',
            name='start_time',
        ),
    ]
