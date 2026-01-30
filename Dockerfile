# Use the official Bun image for the build stage
FROM oven/bun:latest as builder
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy source and build the static site
COPY . .
RUN bun run build

# Use Nginx to serve the static files
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Custom Nginx config to handle Docusaurus routing (optional but recommended)
# This helps with clean URLs and 404s
RUN echo "server { listen 80; location / { root /usr/share/nginx/html; try_files \$uri \$uri/ /404.html; } }" > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]