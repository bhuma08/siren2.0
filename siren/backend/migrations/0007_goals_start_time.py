# Generated by Django 3.1.2 on 2020-12-31 11:59

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_remove_goals_start_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='goals',
            name='start_time',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]