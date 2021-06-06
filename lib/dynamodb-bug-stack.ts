import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class DynamodbBugStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new dynamodb.Table(this, 'MyTable', {
      partitionKey: { name: "someKey", type: dynamodb.AttributeType.STRING},
      encryption: dynamodb.TableEncryption.DEFAULT
    });

  }
}
