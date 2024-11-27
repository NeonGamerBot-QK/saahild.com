<?php
// get useragent header
$user_agent = $_SERVER['HTTP_USER_AGENT'];

if(strpos($user_agent, 'curl') !== false) {
include 'php/curl.php';
} else {
    include 'index.html';
}
?>