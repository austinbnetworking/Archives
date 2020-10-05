<?php

	$formEmailAddress = $_POST['email'];	//pull email address from the form data
	$formTopic = $_POST['topic'];			//pull topic from the form data
?>
<!DOCTYPE html>
<html>
<head>
	<title>PHP Sender</title>
	<meta charset="utf-8">
  	<meta name="description" content="PHP Sender">
  	<meta name="author" content="Austin Brown">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<!-- HTML before messege sent  --> 

<!-- PHP to send data to server -->

<?php
	//          CHANGE THE FOLLOWING INFORMATION TO SEND EMAIL FOR YOU //  

	$toEmail = "austinb@austinb.net";//will send the email to this email address
		
	
	$subject = "Thank you for your message. I will contact you soon.";//Send back message
	

	$fromEmail = "";//email from form  


	//   DO NOT CHANGE THE FOLLOWING LINES  //

	$emailBody = "Form Data\n\n ";//stores the content of the email
	foreach($_POST as $key => $value)//Reads through all the name-value pairs. 	$key: field name   $value: value from the form									
	{
		$emailBody.= $key."=".$value."\n";//Adds the name value pairs to the body of the email, each one on their own line
	}
	
	$headers = "From: $fromEmail" . "\r\n";	//Creates the From header with the appropriate address

 	if (mail($toEmail,$subject,$emailBody,$headers))//puts pieces together and sends the email to your hosting account's smtp (email) server
	{
   		echo("<p>Message successfully sent!</p>");
  	} 
	else 
	{
   		echo("<p>Message delivery failed...</p>");
  	}
?>

<!-- HTML after messege sent  --> 

</body>
</html>
