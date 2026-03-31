FROM nginx:1.27-alpine
RUN apk update && apk upgrade
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

EXPOSE 80