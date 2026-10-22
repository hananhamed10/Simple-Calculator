FROM nginx:stable-alpine
COPY index.html /usr/share/nginx/html/index.html
COPY calculator.js /usr/share/nginx/html/calculator.js
EXPOSE 80
