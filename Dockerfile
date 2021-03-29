FROM python:3.7-slim
ENV PYTHONUNBUFFERED 1
WORKDIR /peakdb
COPY requirements.txt /peakdb
RUN pip install -r requirements.txt
RUN apt-get update && apt-get -y install binutils libproj-dev gdal-bin libgeos-c1v5
COPY . /peakdb
