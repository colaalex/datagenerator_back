# Generated by Django 3.0.3 on 2020-03-26 18:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_project'),
    ]

    operations = [
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('device_name', models.CharField(max_length=50)),
                ('device_description', models.TextField(null=True)),
                ('device_project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Project')),
            ],
        ),
    ]
