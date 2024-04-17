<DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Liste in html</title>
</head>
    <h1> Hallo </h1>

    <?php

        $array = array("foo", "bar", "hello", "world");
        echo '<ol>';
        foreach ($array as $value)
        {
            echo '<li>'.$value.'</li>';
        }

        echo '</ol>';
    ?>
</html>