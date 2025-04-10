---
title: Devship
---

### Project Architecture

This Project is divided into Three Steps:

## 1.Upload Phase

- In Deployment we have used amazon s3
- Amazon simple queue service
- EC2 instance with AWS Fargate(it can autoscale server up and down alternative k8,ASG)

## 2.Deployment Phase

- Amazon S3
- SNS queue

## 3.Request Phase

- Amazon Global Accelerator
- AWS Global Network
- AWS EKS
