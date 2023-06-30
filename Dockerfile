# Use the official Node.js LTS (Long-Term Support) image as the base image
FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Copy the application code to the container
COPY app.js .

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "node", "app.js" ]
