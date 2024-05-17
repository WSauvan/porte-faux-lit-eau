#!/bin/bash

NAS_HOST=$1
NAS_USER=$2
NAS_DEPLOY_PATH=$3
SSH_KEY=$4

echo "Starting deployment..."

mkdir -p ~/.ssh

ssh-keyscan -H $NAS_HOST >> ~/.ssh/known_hosts

echo "Copying build files to NAS using SFTP..."
sftp -i $SSH_KEY -o StrictHostKeyChecking=no $NAS_USER@$NAS_HOST << EOF
  lcd build
  cd $NAS_DEPLOY_PATH
  put -r * .
  bye
EOF
if [ $? -ne 0 ]; then
  echo "Failed to copy files to NAS."
  exit 1
fi

echo "Deployment completed successfully."
