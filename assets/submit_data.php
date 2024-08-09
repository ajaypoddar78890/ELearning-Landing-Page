<?php
include '../../backend/more_db.php';

date_default_timezone_set('Asia/Kolkata');
$user_IP = "";
// if user from the share internet   
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $user_IP = $_SERVER['HTTP_CLIENT_IP'];
}
//if user is from the proxy   
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $user_IP = $_SERVER['HTTP_X_FORWARDED_FOR'];
}
//if user is from the remote address   
else {
    $user_IP = $_SERVER['REMOTE_ADDR'];
}

// Check if it's a POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data from the request body
    $postData = file_get_contents("php://input");
    $formData = json_decode($postData, true);

    //Get Data From Form
    $name = $formData['name'];
    $email = $formData['email'];
    $phone = $formData['phone'];
    $message = $formData['message'];
    $curr_time = date('d.m.Y h:i:sa');

    $formcontent = " From: $name \n Message: $message \n Email: $email \n Phone: $phone \n Received Time: $curr_time \n IP Address: $user_IP";
    $recipient = "contact@morestudios.in,rupansh@moreslides.com,gautam@moreslides.com,devashish@moreslides.com,suraj@morestudios.in";
    $subject = "Message received from " . $name;
    $yourmail = "leads@morestudios.in";
    $mailheader = "From: $yourmail \r\n";

    //Sending Email
    $send_email = mail($recipient, $subject, $formcontent, $mailheader);

    // Process the form data (e.g., store it in a database)
    $sending_data = "INSERT INTO corporate_landing_page (submission_name, submission_email, submission_phone, submission_message, submission_date, ip_address) VALUES ('$name', '$email', '$phone', '$message', '$curr_time', '$user_IP')";
    if (mysqli_query($conn, $sending_data) || $send_email) {

        // For demonstration purposes, we'll just echo back the received data
        echo json_encode(array("success" => true, "data" => $formData));

    } else {
        echo json_encode(array("success" => true, "data" => "error, the data could not save"));
    }
} else {
    // Return an error response for unsupported request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("success" => false, "error" => "Method Not Allowed"));
}

mysqli_close($conn);
?>