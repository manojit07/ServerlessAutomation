# Create trust between  git action and AWS
to copy files from Git to a AWS s3 bucket is the first step for a CICID pipeline. it can be configured for a specific event on git. And most important thing for this si to set trust between git to AWS. Storing AWS secret key is one way of doing it. But most recommended way is adding git action as a an identity provider in AWS. Details are described in the below link :
https://aws.amazon.com/blogs/security/use-iam-roles-to-connect-github-actions-to-actions-in-aws/


