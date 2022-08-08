# Skipper Framework
# Created date: 8/8/2022

FROM 172.18.63.26:5000/node:14-alpine

RUN apk update && apk add bash

# get args and env
# --build-arg NPM_TOKEN=<%= githubToken %>
# --build-arg PNPM_VERSION=$PNPM_VERSION
ARG PNPM_VERSION
ARG NPM_TOKEN
ENV KRATOS_DOCKER true

# Set creds and install pnpm
RUN printf "email=kratos.bot@tokopedia.com\n@tokopedia:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> /root/.npmrc
RUN npm i -g pnpm@${PNPM_VERSION}

# install packages
WORKDIR /code
COPY ./package.json package.json
COPY ./pnpm-lock.yaml pnpm-lock.yaml
RUN pnpm install --frozen-lockfile --prod
RUN rm -rf /root/.npmrc

# Copy scripts
COPY ./scripts scripts

# Copy env
COPY ./.env .env
COPY ./.env.example .env.example

# To make sure symlink paths are not broken
COPY ./build build
COPY ./public public
COPY ./config config

# some static files that is needs to be in a certain paths (because of tech-debt, actually)
COPY ./build/static static
COPY ./build/client/assets.json client/assets.json
COPY ./build/client/modern-assets.json* client/modern-assets.json


EXPOSE 3000
ENV HOST=0.0.0.0

CMD ["node","scripts/pm2/lite-pm2.js"]
