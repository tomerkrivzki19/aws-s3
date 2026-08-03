# # ---------- Build Stage ----------
# FROM node:20-alpine AS builder

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .


# # ---------- Production Stage ----------
# FROM node:20-alpine

# WORKDIR /app

# COPY --from=builder /app .

# # the solution for root change 
# RUN chown -R node:node /app

# USER node

# EXPOSE 3000

# CMD ["node", "app.js"]

FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force

COPY app.js ./
COPY public ./public

RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD ["node", "app.js"]