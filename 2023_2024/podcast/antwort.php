<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>MySQL Abfrage auf Website</title>
</head>
<body>
    <h2>MySQL Abfrage auf Website</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <label for="query">MySQL-Abfrage:</label><br>
        <textarea name="query" rows="8" cols="80"><?php if(isset($_POST['query'])) echo $_POST['query']; ?></textarea><br><br>
        <input type="submit" value="Abfrage ausführen">
    </form>
 
    <?php
    // Datenbankverbindungsinformationen
    $servername = "localhost"; // oder IP-Adresse des Servers
    $username = "GyLeInf"; // Ihr MySQL-Benutzername
    $password = "GyLeInf"; // Ihr MySQL-Passwort
    $database = "podcast"; // Der Name Ihrer Datenbank
 
    // Verbindung herstellen
    $conn = new mysqli_connect($servername, $username, $password, $database);
 
    // Verbindung überprüfen
    if ($conn->connect_error) {
        die("Verbindung fehlgeschlagen: " . $conn->connect_error);
    }
 
    // SQL-Abfrage ausführen, wenn das Formular abgeschickt wurde
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // SQL-Abfrage aus dem Formular lesen
        $query = $_POST["query"];
 
        // SQL-Abfrage ausführen
        $result = $conn->query($query);
 
        // Überprüfen, ob Datensätze vorhanden sind
        if ($result) {
            echo "<h3>Ergebnis der Abfrage:</h3>";
            echo "<table border='1'>
                <tr>";
            // Spaltenüberschriften ausgeben
            while ($fieldinfo = $result->fetch_field()) {
                echo "<th>" . $fieldinfo->name . "</th>";
            }
            echo "</tr>";
            // Datensätze ausgeben
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                foreach ($row as $value) {
                    echo "<td>" . $value . "</td>";
                }
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "Fehler bei der Abfrage: " . $conn->error;
        }
    }
 
    // Verbindung schließen
    $conn->close();
    ?>
</body>
</html>
 