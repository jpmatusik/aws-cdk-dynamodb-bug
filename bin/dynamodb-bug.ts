#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DynamodbBugStack } from '../lib/dynamodb-bug-stack';

const app = new cdk.App();
new DynamodbBugStack(app, 'DynamodbBugStack');
