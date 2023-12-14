FROM node:16

WORKDIR /app

COPY ./package.json ./package.json

RUN pnpm install

COPY . .

EXPOSE 7890

CMD ["npm", "run", "pro"]