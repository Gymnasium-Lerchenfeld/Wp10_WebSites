function getFAQResponse() {
    
    const faqs = {
        "wie kann ich mich registrieren": "Um sich zu registrieren, klicken Sie auf die Schaltfläche 'Registrieren' auf der Startseite und folgen Sie den Anweisungen.",
        "wie kann ich mein passwort zurücksetzen": "Um Ihr Passwort zurückzusetzen, klicken Sie auf 'Passwort vergessen?' und folgen Sie den Anweisungen.",
        "wie kann ich mein profil bearbeiten": "Gehen Sie zu Ihrem Profil und klicken Sie auf 'Profil bearbeiten', um Ihre Daten zu aktualisieren."
    };

    // Eingabe des Benutzers
    const userQuestion = document.getElementById("userQuestion").value.toLowerCase();
    const faqResponse = document.getElementById("faqResponse");

    // Antwort finden
    if (faqs[userQuestion]) {
        faqResponse.textContent = faqs[userQuestion];
    } else {
        faqResponse.textContent = "Leider haben wir momentan keine Antwort auf Ihre Frage. Bitte wenden Sie sich an unseren Support.";
    }
}
