<!DOCTYPE html>
<html lang="de">
<head>
        <link rel="stylesheet" href="css/styles.css">
        <meta charset="utf-8">
        <title>Fragen</title>
    </head>
    <body>
        <nav>
            <a href="index.html"><img src="images/PodcastLogo.jpg"></a>
            <ul>
                <li><a class="color-change" href="index.html">Startseite</a></li>
                <li><a class="color-change" href="trueCrime.html">True Crime</a></li>
                <li><a class="color-change" href="buecher.html">Bücher</a></li>
                <li><a class="color-change" href="wieErstelltManEinenPodcast.html">Wie erstellt man einen Podcast</a></li>
                <li><a class="color-change" href="problematikMitPodcast.html">Problematik mit Podcasts</a></li>
                <li><a class="active" href="antwort.php">Fragen</a>
            </ul>
        </nav>
<section>
        <p>Welchen Moderator suchen Sie?</p>
        <form action="antwort.php" method="POST" id="moderator">
            <label for="nachname">Nachname</label>
            <input type="text" name="nachname" id="nachname" maxlength="40"><br>

            <button id="btnSearch" class="submitButton" type="submit">Suchen ...</button>
        </form>
    </section>

    <section>

   
<?php


if(isset($_POST['nachname'])) {
        // Connect to database
        // Run the query
        // Display a message that it was successful or not
    $servername = "localhost";
    $username = "Podcast";
    $password = "Podcast";
    $dbname = "podcast";
    try {
        $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    $result = $conn->query("SELECT ID, Vorname, Nachname, Mail FROM Moderatoren WHERE Nachname LIKE '" . $_POST['nachname'] . "'");
    if ($result->num_rows > 0) {
        echo '<table id="ergebnis"><tr><th>ID</th><th>Name</th><th>Mail</th></tr>';
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row["ID"]. "</td><td>" . $row["Vorname"]. " " . $row["Nachname"] ."</td><td> " .$row["Mail"] ."</td></tr>";
        }
        echo "</table>";
    } else {
        echo "0 results";
    }

    $conn->close();
    
    } catch (Exception $ex) {
        echo '<p class="warn">' . $ex->getMessage() . '</p>'; 
    }
}
?>
</section>
<section>
        <p>Welchen Podcast suchen Sie?</p>
        <form action="antwort.php" method="POST" id="podcast">
            <label for="Podcastname">Podcastname</label>
            <input type="text" name="Podcastname" id="Podcastname" maxlength="60"><br>

            <button id="btnSearch" class="submitButton" type="submit">Suchen ...</button>
        </form>
    </section>

    <section>

   
<?php


if(isset($_POST['podcastname'])) {
        // Connect to database
        // Run the query
        // Display a message that it was successful or not
    $servername = "localhost";
    $username = "Podcast";
    $password = "Podcast";
    $dbname = "podcast";
    try {
        $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    $result = $conn->query("SELECT ID, Podcastname, Startdatum FROM podcast WHERE Podcastname LIKE '" . $_POST['podcastname'] . "'");
    if ($result->num_rows > 0) {
        echo '<table id="ergebnis"><tr><th>ID</th><th>Podcastname</th><th>Startdatum</th></tr>';
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row["ID"]. "</td><td>" . $row["Podcastname"]. "</td><td> " .$row["Startdatum"] ."</td></tr>";
        }
        echo "</table>";
    } else {
        echo "0 results";
    }

    $conn->close();
    
    } catch (Exception $ex) {
        echo '<p class="warn">' . $ex->getMessage() . '</p>'; 
    }
}
?>
</section>

<footer>
        <p> hier geht es zurück zur
        <a class="links" href="index.html">Startseite</a>
        </p>
        <p>© 2023 by Em & An</p>
    </footer>
</html>
