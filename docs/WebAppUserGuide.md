# Requirements

Before you deploy, you must have the following in place:
*  [Web App Deployment](https://github.com/UBC-CIC/TapGives-Challenge/blob/master/docs/DeploymentGuide.md) 


# Part 1: Register TapGives Admin Account

By some technical restrictions of the development, TapGives Admins must be set on the AWS console.  Here, you'll learn how to register for an account on the web app, then how to set any accounts to TapGives Admin.
1. Enter Web App, press create an account ![alt text](images/webapp0.png)
2. Fill in account details![alt text](images/webapp1.png)
3. Check email, enter verification code ![alt text](images/webapp2.png)
4. Head to AWS online console, search for **Cognito**, and enter ![alt text](images/webapp3.png) 
5. Select user pool corresponding to the project name (Default tapgiveschallenge) ![alt text](images/webapp4.png)
6. Click on user which you want to set to Admin ![alt text](images/webapp5.png)
7. Scroll down, and select **Add user to group** ![alt text](images/webapp6.png)
8. Select **Admins** and press **Add**  ![alt text](images/webapp7.png)
9. Return to TapGives web app, and login.  Your user is now a TapGives Admin!  (If you are having issues, try relogging on the TapGives web app) ![alt text](images/webapp8.png)

# Part 2: Create Water Filtration Sites


# Part 3: Designate Site Managers
We will assume that Site Managers have already created a web app account.  If this is not the case, refer to steps 1-3 in Part 1

1. Open the web app as a TapGives Admin account, and click the dropdown on the top left, click on Administration ![alt text](images/img.png)
2. Select the user you want to designate as a Site Manager ![alt text](images/img_1.png)
3. Select the sites you want them to manage ![alt text](images/img_2.png)
4. Click **Update Site Managed** ![alt text](images/img_3.png)

The user is now a Site Manager, and their phone number should work for the USSD code, and their account should be able to access their designated water sites on the web app.