<?php
if (isset($_POST["email"]) && $_POST["email"] != "") {
	$expediteur = "floriansaintjean.com";
	$destinataire = "florian.saintjean@outlook.fr";
	$objet = $_POST["objet"];
	$entete = "From : " . $expediteur;

	$contenu_message = utf8_decode($_POST["message"]) . "\r\n";
	$contenu_message = "De : " . $_POST["email"] . "<br /><br /><strong>Sujet : " . $objet . "</strong><br /><br /> " . $centenu_message;
	$contenu_message = "<html><body>" . $contenu_message . "</body></html>";

	$reussi = mail($destinataire, $objet, $contenu_message, $entete);
}
?>
<?php
if (isset($reussi) && $reussi == 1)
	echo "Votre message a été envoyé avec succés";
?>