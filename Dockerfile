# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the rest of the code
COPY . .

# Expose no ports (Discord bots are outbound only)

# Start the bot
CMD ["node", "index.js"]