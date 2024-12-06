# Infrastructure Description

## Backend:
- **API:** Deployed on AWS Elastic Beanstalk. It uses Node.js, Express, and PostgreSQL for data storage. API handles requests from the frontend, performs CRUD operations, and connects to the PostgreSQL database.

## Frontend:
- **Web App:** Deployed on AWS S3 as a static site, built using Angular. It communicates with the backend API for fetching and displaying data.

## Database:
- **RDS:** PostgreSQL instance hosted on AWS RDS. It stores all product and user-related information.

## AWS Services Used:
- **Elastic Beanstalk:** Hosting the backend API.
- **S3:** Hosting the frontend.
- **RDS:** Database for storing application data.
