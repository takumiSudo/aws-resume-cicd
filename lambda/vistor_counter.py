import json
import boto3
import uuid
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('AccessLogs-Resume')

def lambda_handler(event, context):
    try:
        request_id = str(uuid.uuid4())
        timestamp = datetime.utcnow().isoformat()
        
        log_item = {
            'RequestID': request_id,
            'Timestamp': timestamp,
            'UserAgent': event['headers'].get('User-Agent', 'unknown'),
            'IPAddress': event['requestContext']['identity']['sourceIp']
        }
        
        table.put_item(Item=log_item)
        
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Access logged successfully'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
