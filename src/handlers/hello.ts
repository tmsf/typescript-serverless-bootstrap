import { APIGatewayProxyResult } from 'aws-lambda'

export async function handler (): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!'
    })
  }
}
