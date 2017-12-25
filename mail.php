<?php
$recepient = "pelegrin2puk@gmail.com";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = trim($_POST["text"]);

mail($recepient, $email, $name, $phone, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>