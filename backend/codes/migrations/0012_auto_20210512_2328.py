# Generated by Django 3.1.7 on 2021-05-12 23:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('codes', '0011_auto_20210512_2127'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PriorityQueue',
            new_name='AnimationPriorityQueueElement',
        ),
    ]