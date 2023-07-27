# Generated by Django 4.2.3 on 2023-07-27 05:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=40)),
                ('image', models.ImageField(blank=True, null=True, upload_to='place')),
                ('location', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('extra', models.TextField()),
                ('max_guest', models.IntegerField(default=1)),
                ('price', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('host', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='places', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'place',
                'verbose_name_plural': 'places',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='PlaceImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='image')),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='place.place')),
            ],
            options={
                'verbose_name': 'image',
                'verbose_name_plural': 'images',
            },
        ),
        migrations.CreateModel(
            name='Availability',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='availability', to='place.place')),
            ],
        ),
    ]
