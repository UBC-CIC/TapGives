# Requirements

Before you deploy, you must have the following in place:
*  [AWS Account](https://aws.amazon.com/account/) 
*  [GitHub Account](https://github.com/) 
*  [AWS CLI](https://aws.amazon.com/cli/) 
*  [AWS SAM](https://aws.amazon.com/serverless/sam/)  


# Step 1: Clone The Repository

First, you will need to clone the github repository onto your machine. To do this:
1. Create a folder on your desktop to contain the code.
2. Open terminal (or command prompt if on windows) and **cd** into the above folder.
3. Clone the github repository by entering the following:
```bash
git clone https://github.com/UBC-CIC/TapGives-Challenge.git
```

The code should now be present in the above folder.  


# Step 2: Frontend Deployment

Before installing Amplify we need to create the IAM Role that associate the policies need to implement this solution. From the cloned directory, execute the follow CloudFormation template:

```bash
aws cloudformation deploy --template-file cfn-amplifyRole.yaml --stack-name amplifyconsole-tapgives-backend-role --capabilities CAPABILITY_NAMED_IAM
```
It creates the role name **amplifyconsole-tapgives-backend-role** that will be used on the next step.

The **Deploy to Amplify Console** button will take you to your AWS console to deploy the front-end solution.

<a href="https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/UBC-CIC/TapGives-Challenge">
    <img src="https://oneclick.amplifyapp.com/button.svg" alt="Deploy to Amplify Console">
</a>

1. ![alt text](images/amplify-console-01.png)
2. Select the **amplifyconsole-tapgives-backend-role** for deployment![alt text](images/amplify-console-02.png)
3. Continue, and wait until the project is finished deployment (wait until the verify is green and checked) ![alt text](images/amplify-console-03.png)
4. Open left taskbar, Rewrites and redirects, and open edit ![alt text](images/amplify-console-04.png)
5. Change first rule's source address (or add a rule if there is none) to ```</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>```, target address to ```/index.html```, and type to ```200 (Rewrite)```, then save![alt text](images/amplify-console-05.png)

Congratulations, your web app is now deployed!

# Step 3: USSD Deployment

### Collect Prerequisite Information

Firstly, ensure you have created a Daraja account, a USSD application, and have the following information on hand:
- Business Short Code
- Client Key
- Client Secret
- Pass Key
If not, follow [these instructions]() first.  

Next, log into the AWS Console using your account details: 
![alt text](images/console_home.png)  
1. Collect the AppSync API URL and AppSync API ID  
![alt text](./images/appsync1.png)
![alt text](./images/appsync2.png)
![alt text](./images/appsync3.png)
![alt text](./images/appsync4.png)
2. Collect the S3 Bucket Name and Languages File Path (default path is *public/basePhrases.json*)  
![alt text](./images/s31.png)
![alt text](./images/s32.png)
![alt text](./images/s33.png)
![alt text](./images/s34.png)  

### AWS Deployment 

With this information, we can now deploy on AWS. To build and deploy the application, run the following in your shell in the application directory:

```bash
sam build
sam deploy --guided --capabilities CAPABILITY_NAMED_IAM
```  

When the configurations prompts appear, enter information similar to the below. Default values appear within the default brackets.

```bash
Setting default arguments /for sam deploy
=========================================
Stack Name [sam-app]: ussd-app
AWS Region [us-east-1]:  #see AWS Regions for more information
Parameter ProjectName [ussd-app]: 
Parameter EnvironmentName [dev]:  #typically dev or prod
Parameter AppSyncApiUrl []: <YOUR APPSYNC API URL>
Parameter GraphQLApiId []: <YOUR APPSYNC API ID>
Parameter S3BucketName []: <YOUR BUCKET NAME>
Parameter LanguagesFilePath []: <PATH TO FILE>
Parameter MpesaAccessTokenUrl []: <MPESA URL FOR ACCESS TOKENS> # provide
#The below will be the name that appears in the M-Pesa prompt
Parameter MpesaAccountReference []: <YOUR ACCOUNT REFERENCE NAME>
Parameter MpesaBusinessShortcode []: <YOUR BUSINESS SHORTCODE>
#You can include a callback URL if you like - it is not necessary.
#Below is the M-Pesa simulation default.
Parameter MpesaCallbackURL []: https://mydomain.com/path
Parameter MpesaClientKey []: <YOUR MPESA CLIENT KEY>
Parameter MpesaClientSecret []: <YOUR MPESA CLIENT SECRET>
Parameter MpesaPassKey []: <YOUR MPESA PASS KEY>
Parameter MpesaInitiatePaymentUrl []: <MPESA URL FOR LIPA NA MPESA INITIATION> # provide
Parameter MpesaQueryUrl []: <MPESA URL FOR LIPA NA MPESA QUERY> # provide
#Shows you resources changes to be deployed and requires a 'Y' to initiate deploy
Confirm changes before deploy [y/N]:
Allow SAM CLI IAM role creation [Y/n]:  
Disable rollback [y/N]: 
#This enables the USSD Menu lambda function to be invoked by API Gateway
USSDMenu may not have authorization defined, Is this okay? [y/N]: y
Save arguments to configuration file [Y/n]: 
SAM configuration file [samconfig.toml]: 
SAM configuration environment [default]:
```  

**Important:**  
You can find your API Gateway Endpoint URL in the output values displayed after deployment. This URL will be provided to Africa's Talking as the *callbackUrl*. The output should look like so:  

![alt text](images/sam_output.png)


### Final Steps

Lastly, follow [these instructions](./AfricasTalkingDeployment.md) to launch a USSD service code via Africa's Talking. Keep the API Gateway URL from above on hand.