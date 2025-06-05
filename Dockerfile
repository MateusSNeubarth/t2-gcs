FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 8080

CMD ["npm", "start", "dev"]