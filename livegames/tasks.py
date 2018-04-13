# Create your tasks here
from __future__ import absolute_import, unicode_literals
from celery import shared_task

import asyncio
import aiohttp

urls = ['http://www.google.com', 'http://www.yandex.ru', 'http://www.python.org']


async def call_url(url):
    print('Starting {}'.format(url))
    response = await aiohttp.get(url)
    data = await response.text()
    print('{}: {} bytes: {}'.format(url, len(data), data))
    return data

# futures = [call_url(url) for url in urls]

# loop = asyncio.get_event_loop()
# loop.run_until_complete(asyncio.wait(futures))


@shared_task
def add(x, y):
    return x + y


@shared_task
def mul(x, y):
    return x * y


@shared_task
def xsum(numbers):
    return sum(numbers)
