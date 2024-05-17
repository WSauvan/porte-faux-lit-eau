#!/bin/bash

NAS_HOST=$1
NAS_USER=$2
NAS_DEPLOY_PATH=$3
SSH_KEY=$4

ssh -i $SSH_KEY $NAS_USER@$NAS_HOST "mkdir -p $NAS_DEPLOY_PATH"

rsync -avz -e "ssh -i $SSH_KEY" build/ $NAS_USER@$NAS_HOST:$NAS_DEPLOY_PATH
