# Pipeline Description

## Steps in CircleCI Pipeline:

1. **Build:** 
   - Install dependencies for both frontend and backend.
   - Build both projects.
   
2. **Test:** 
   - Run backend tests using Jasmine and Jest.
   
3. **Deploy:**
   - Deploy backend API to AWS Elastic Beanstalk.
   - Deploy frontend to AWS S3 using AWS CLI.

Each step runs in separate Docker containers for isolation. 

### Tools Used:
- **CircleCI** for CI/CD pipeline automation.
- **AWS Elastic Beanstalk** for backend deployment.
- **AWS S3** for frontend hosting.
- **AWS RDS** for database management.
