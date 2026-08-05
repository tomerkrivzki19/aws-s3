# Cloud Images - Production Deployment Pipeline

A production-ready Node.js application that allows users to upload images to Amazon S3. The project demonstrates a complete cloud deployment pipeline using Docker, Amazon ECS Fargate, Application Load Balancer, IAM Roles, Amazon ECR, and GitHub Actions.

This project was developed as part of a DevOps coursework assignment focusing on containerization, cloud deployment, infrastructure, and CI/CD automation.

---

# Project Overview

The application allows users to:

- Upload an image from the browser
- Store the image securely in Amazon S3
- Run inside Docker containers
- Deploy automatically to AWS ECS Fargate
- Scale behind an Application Load Balancer
- Use IAM Task Roles instead of AWS credentials

---

# Technologies Used

- Node.js
- Express.js
- Multer
- AWS SDK v3
- Amazon S3
- Docker
- Docker Compose
- Amazon ECS Fargate
- Amazon ECR
- Application Load Balancer (ALB)
- IAM Task Roles
- GitHub Actions
- HTML
- CSS
- JavaScript

---

# Architecture

```
                GitHub
                   │
                   ▼
            GitHub Actions
                   │
                   ▼
             Amazon ECR
                   │
                   ▼
        Amazon ECS Fargate Service
                   │
         ┌─────────┴─────────┐
         │                   │
      Task 1              Task 2
         │                   │
         └─────────┬─────────┘
                   │
                   ▼
      Application Load Balancer
                   │
                   ▼
                Users
                   │
                   ▼
               Amazon S3
```

---

# Project Structure

```
cloud-images/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── styles.css
│
├── app.js
├── Dockerfile
├── docker-compose.yml
├── task-definition.json
├── package.json
├── .dockerignore
└── README.md
```

---

# Features

- Image upload from browser
- Store images in Amazon S3
- Dockerized application
- Local development with Docker Compose
- Production deployment using ECS Fargate
- Application Load Balancer
- Health checks
- IAM Task Role authentication
- Environment variables
- Automatic deployment pipeline

---

# Running Locally

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm start
```

Or using Docker:

```bash
docker compose up --build
```

---

# Environment Variables

Only non-sensitive configuration is stored in the environment.

```env
AWS_REGION=eu-north-1
S3_BUCKET=your-bucket-name
```

AWS credentials are **not** stored inside:

- Source code
- Docker image
- GitHub
- Environment variables

The production application receives temporary credentials automatically through an **IAM Task Role**.

---

# AWS Services Used

This project uses the following AWS services:

- Amazon S3
- Amazon ECS
- Amazon ECR
- Amazon Fargate
- Application Load Balancer
- IAM Roles
- CloudWatch Logs

---

# CI/CD Pipeline

Every push to the **main** branch automatically triggers GitHub Actions.

Pipeline:

```
Git Push
    │
    ▼
GitHub Actions
    │
    ▼
Build Docker Image
    │
    ▼
Push Image to Amazon ECR
    │
    ▼
Deploy Updated Task Definition
    │
    ▼
Amazon ECS Service
```

---

# Security

The project follows AWS security best practices.

Instead of storing:

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

the application authenticates using an IAM Task Role attached to the ECS Task Definition.

This allows temporary credentials to be generated automatically by AWS.

---

# Challenges Solved

During development several production issues were resolved:

- Docker container networking
- ECS Task Definition configuration
- Application Load Balancer setup
- Health check failures
- IAM permissions
- Amazon ECR authentication
- ECS deployment configuration
- Docker multi-stage builds
- Uploading files to Amazon S3 without storing AWS credentials

---

# Learning Objectives

This project demonstrates practical experience with:

- Docker
- Containerization
- Amazon ECS
- Amazon ECR
- Amazon S3
- IAM Roles
- Application Load Balancer
- Production deployments
- CI/CD with GitHub Actions
- Cloud infrastructure
- DevOps workflows

---

# Author

**Tomer Krivizki**

Developed as part of a DevOps Production Deployment Pipeline coursework project.
