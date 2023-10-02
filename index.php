<?php
$host = "sdb-63.hosting.stackcp.net"; 
$dbname = "assessment-35303335609a"; 
$username = "assessment-35303335609a"; 
$password = "WindBreak2023!";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$conn->close();
?>
