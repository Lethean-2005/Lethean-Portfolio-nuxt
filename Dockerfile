# ---- Build Stage ----
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/.output ./

EXPOSE 3000

CMD ["node", "server/index.mjs"]
