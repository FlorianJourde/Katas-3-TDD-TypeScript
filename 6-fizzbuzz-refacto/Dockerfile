FROM alpine:3.20

# Install default packages
RUN apk update \
    && apk upgrade \
    && apk add git unzip bash

# Install and configure PHP packages
RUN apk add php83-cli php83-pecl-xdebug php83-pecl-apcu php83-dom \
    php83-intl php83-openssl php83-phar php83-iconv php83-opcache php83-pecl-ds \
    php83-xml php83-xmlreader php83-mbstring php83-xmlwriter php83-tokenizer php83-ctype

# Install Composer
RUN /usr/bin/php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && /usr/bin/php composer-setup.php --filename=composer --install-dir=/usr/local/bin \
    && /usr/bin/php -r "unlink('composer-setup.php');"

RUN echo "zend_extension=xdebug.so" >> /etc/php83/conf.d/50_xdebug.ini \
    && echo "xdebug.mode=coverage" >> /etc/php83/conf.d/50_xdebug.ini

WORKDIR /app

CMD /bin/bash -c "trap : TERM INT; sleep infinity & wait"
