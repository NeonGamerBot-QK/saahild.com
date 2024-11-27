<?php

// Set headers to allow streaming
header('Content-Type: text/plain');
header('Cache-Control: no-cache'); // Disable caching
header('Connection: keep-alive');

$content =  array("========================================\n", "Hi welcome to my site?! or curled version\n", "My name is Saahil Dutta and i am from the USA\n", "I am a " .  13 - (2027 - date("Y")) . "th grader in KCD.\n", "Apart from coding, some other activities that I love to do!\n", "Playing Games, ", " Eating different types of food,", "  Robotics.\n", "I started programming during the Covid Pandemic in 2020\n", "I am fluent in new like programming languages such as CSS , HTML, Javascript and Typescript.\n", "My field of Interest's are building new Web Technologies and Products and also in areas related to",  "Backend Services, CLI Services.\n", "Whenever possible, I also apply my passion for developing products with", "Node.js and Modern Javascript Library and Frameworks like React.js\n", "You can find the signature for this message in saahild.com/sig.txt", "\n========================================");
// Turn off PHP output buffering
while (ob_get_level()) {
    ob_end_clean();
}
ob_implicit_flush(true);

// Simulate a long-running process
foreach ($content as $x) {
    echo $x;
    flush(); // Send output to the browser immediately
    sleep(1); // Simulate time-consuming task
}
echo "\n";
sleep(2);
echo "\n";
//echo "Process complete!\n";
?>