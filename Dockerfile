
# Stage 1 - the build process
FROM node:7.10 as build-deps
WORKDIR /usr/src/app

COPY src/ ./src
COPY style/ ./style
COPY test/ ./test
COPY package.json ./
COPY index.html ./
COPY webpack.config.js ./

RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
# COPY --from=build-deps /usr/src/app/index.html /usr/share/nginx/html/
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html/dist/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]