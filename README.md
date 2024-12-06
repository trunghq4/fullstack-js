# Store Project

## Project Overview
This project consists of two main parts:
- **Frontend:** A simple Angular app serving a product ordering platform.
- **Backend:** A Node.js API that manages product data, user authentication, and more.

### Technologies Used:
- **Frontend:** Angular, hosted on AWS S3
- **Backend:** Node.js, Express, PostgreSQL, deployed on AWS Elastic Beanstalk
- **Database:** PostgreSQL hosted on AWS RDS

### Hosting:
- **Frontend:** [Web App](http://thq4webapp.s3-website-us-east-1.amazonaws.com)
- **API:** [API](http://nodejs-dev.us-east-1.elasticbeanstalk.com)

## Deployment Process:
1. Frontend is hosted on AWS S3.
2. API is deployed on AWS Elastic Beanstalk using CircleCI.
3. The database is managed using AWS RDS.

### Screenshots:
In Screenshots folder

### How to Run Locally:
1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the backend:
    ```bash
    npm run start
    ```
4. Start the frontend:
    ```bash
    npm run start
    ```
