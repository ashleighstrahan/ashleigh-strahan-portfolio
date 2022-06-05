<?php

#Receive user input
$name = $_POST['name'];
$email_address = $_POST['email_address'];
$message = $_POST['message'];

#Filter user input
function filter_email_header($form_field) {  
return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
}

$email_address  = filter_email_header($email_address);

#Send email
$headers = "From: $email_address";
$sent = mail('strahanashleigh01@gmail.com', 'Portfolio Contact', $feedback, $headers);