import * as cdk from 'aws-cdk-lib';
import * as DynamodbBug from '../lib/dynamodb-bug-stack';
import { expect as expectCDK, haveResource } from '@aws-cdk/assert';


test('Test DynamoDB Table with SSE', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DynamodbBug.DynamodbBugStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::DynamoDB::Table', {
        SSESpecification: {
          SSEEnabled: true
        }
      }));
});
