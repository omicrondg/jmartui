FROM nginx:alpine

RUN rm /etc/nginx/nginx.conf && rm /etc/nginx/conf.d/default.conf

# Add default configuration
COPY conf/server.conf /etc/nginx/conf.d/server.conf
COPY conf/nginx.conf /etc/nginx/nginx.conf

COPY src /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx"]
