/** -------------------------------------------------------
* js/app.js
* ---------------------------------------------------------
*/

// Cible le champ de formulaire
	// /!\ Symfony préfixe l'id des input avec le nom de l'entité; ici 'geocode_'
let oCommune = document.getElementById("commune");

// Exécution de la fonction searchCities() dès la fin de la saisie d'une lettre
oCommune.addEventListener("keyup", searchCities);

function searchCities() {
	// Récupère la valeur du champ (dès la fin de la saisie d'une lettre)
	let sValeur = oCommune.value;

	// Quand il y a au moins 3 lettres
	if (sValeur.length >= 3)
	{
		// Interrogation de l'API Géocode
		// L'url doit être : https://geo.api.gouv.fr/communes?nom=Nan&fields=departement
		// Dans cette url, il nous faut remplacer 'Nan' (pour Nantes, Nancy... donné dans l'exemple de l'API)...
		// ... par la valeur de notre champ 'ville' :

		// +++ TODO : regex pour s'assurer qu'on a bien que des lettres +++

		const sApiGeoUrl = "https://geo.api.gouv.fr/communes?nom="+sValeur+"&fields=codesPostaux";

		// On interroge l'API avec fetch :
		fetch(sApiGeoUrl,
			{ method: 'get' })
			.then(response => response.json())
			.then
			(
				results =>
				{
					// console.log(results);

					// Affichage des résultats
					if (results.length) { // On teste s'il y a des résultats

						let communes_dtl = document.getElementById('communes-dtl');

						// On boucle sur les résultats
						results.forEach
						(
							(value) => {
								// On construit les options de la datalist HTML
								// sHtmlDatalist += "<option value='"+value.nom+"'>"+value.nom+" ("+value.codesPostaux+")</option>\n";
								let option = document.createElement("option");
								option.text = value.nom + '(' + value.codesPostaux + ')';
								communes_dtl.append(option);
						   }
						)
					}
					else
					{
						console.log("Aucun résultat.");
						// +++ TODO : afficher un message HTML +++
					}
				}
			)
			// Erreur dans la réponse de l'API
			.catch(error => {
				console.log(error);
				// +++ TODO : afficher un message HTML +++
			});
	}
} // -- searchCities()
