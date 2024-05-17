#!/bin/bash

NAS_HOST=$1
NAS_USER=$2
NAS_DEPLOY_PATH=$3
SSH_KEY=$4

echo "Starting deployment..."

ssh-keyscan -H $NAS_HOST >> ~/.ssh/known_hosts

echo "Creating deployment directory on NAS..."
ssh -i $SSH_KEY $NAS_USER@$NAS_HOST "mkdir -p $NAS_DEPLOY_PATH"

echo "Copying build files to NAS..."
rsync -avz -e "ssh -i $SSH_KEY" build/ $NAS_USER@$NAS_HOST:$NAS_DEPLOY_PATH

echo "Deployment completed successfully."
