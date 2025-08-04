<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $phone_number = $_POST['phone-number'];
    $location = $_POST['location'];

    $sql = "INSERT INTO users (first_name, last_name, email, password, phone_number, location) 
            VALUES ('$first_name', '$last_name', '$email', '$password', '$phone_number', '$location')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
