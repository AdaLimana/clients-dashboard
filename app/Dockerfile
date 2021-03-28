FROM debian:10

ARG DEBIAN_FRONTEND=noninteractive

RUN apt update
RUN apt install apache2 -y

RUN mkdir -p /var/www/clients-dashboard-app

WORKDIR /var/www/clients-dashboard-app

RUN mkdir -p /var/log/apache2/clients-dashboard-app/

RUN a2enmod rewrite

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]