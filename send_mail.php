<?php
  require 'phpmailer/class.phpmailer.php';

  $mail = new PHPMailer;
  //$mail->SMTPDebug = 2;
  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = getenv('DefyHost')  // Specify main and backup server
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = getenv('DefyUsername');                            // SMTP username
  $mail->Password = getenv('DefyPassword');                           // SMTP password
  $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

  $mail->From = getenv('DefyFrom');
  $mail->FromName = 'DefyTheme';
  $mail->addAddress(getenv('DefyTo'));  // Add a recipient
  $mail->WordWrap = 50;                                 // Set word wrap to 50 characters
  $mail->isHTML(true);                                  // Set email format to HTML

  $mail->Subject = "Letter from DefyTheme";
  $mail->Body    = "Name: " . $_POST['name'] . "<br/>Email:" . $_POST['email'] . "<br/>Phone: " . $_POST['phone']. "<br/>" . $_POST['text'];
  $mail->AltBody = "Name: " . $_POST['name'] . "\nEmail:" . $_POST['email'] . "\nPhone: " . $_POST['phone'] . "\n\n" . $_POST['text'];

  echo '<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8" /><title>DefyTheme mail</title></head><body>';

  if(!$mail->send()) {
   echo 'Your message has not been sent';
   echo 'Error: ' . $mail->ErrorInfo;
   exit;
  }

  echo 'Your message was sent';

  echo '</body></html>';
