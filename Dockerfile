# 1. Use lightweight Node Alpine image
FROM node:20-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy all source files
COPY . .

# 5. Expose React default port
EXPOSE 3000

# 6. Start the React development server
CMD ["npm", "start"]
