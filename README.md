# Microservice-app

## User Service

### Description
The User Service is a microservice responsible for managing user data and interactions. It handles user creation, retrieval, and management operations.

### Features
- **Get All Users**: Retrieve a list of all users.
- **Get User by ID**: Retrieve detailed information about a specific user.
- **Handle Non-existent User**: Return a 404 status for requests to non-existent users.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Dammbobo/user-service.git
   cd user-service
2. **Install Dependencies
    npm install
3. Run the application manually 
    npm start
## Run with Docker
1. Build the docker image 
    docker build -t user-service 
2. Run the docker container
    docker run -p 3000:3000 user-service
## Testing 
## To run the tests for the User Service
   npm test
## Challenges faced 
Challenges Faced
Testing Framework Issues: Initially, I encountered issues with Jest not recognizing tests because I hadn’t configured the test structure properly. This required some adjustments in the test files and ensuring that Jest was set up correctly in the package.json.

Docker Configuration: When containerizing the application, I faced issues with the Dockerfile configuration. I had to ensure that the correct port was exposed and that all dependencies were installed properly in the image.

Handling User Not Found: Creating the logic to handle non-existent users required careful testing to ensure that it returned the correct 404 response, which was challenging initially.

Step-by-Step Process Recap
Set up an Express application to manage user data.
Created endpoints for:
Retrieving all users.
Retrieving a user by ID.
Handling non-existent users.
Installed Jest and Supertest for testing.
Containerized the application using Docker.
Created unit tests to validate the user service's functionality.
Successfully pushed the user service to GitHub.
