<?php
$url = $_SERVER['REQUEST_URI']; 
$parts = explode('?', $url);
$repo =  $parts[1];
if($repo == '') {
    header("Location: https://github.com/NeonGamerBot-QK", true, 301);
} else {
header("Location: https://github.com/NeonGamerBot-QK/" . $repo, true, 301);
}
?>
