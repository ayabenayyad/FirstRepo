

var contacts = [];

function ajouterContact(contact) {
    
    var existeDeja = contacts.some(function(existingContact) {
        return existingContact.nom === contact.nom;
    });

    if (!existeDeja) {
        contacts.push(contact);
        console.log(contact.nom + " has been added to the list");
    } else {
        console.log(contact.nom + " already exisits");
    }
}

function afficherContacts() {
    console.log("the contact list :");
    contacts.forEach(function(contact) {
        console.log("Full name : " + contact.nom + ", Phone : " + contact.telephone);
    });
}

function supprimerContact(nom) {
    var index = contacts.findIndex(function(contact) {
        return contact.nom === nom;
    });

    if (index !== -1) {
        contacts.splice(index, 1);
        console.log(nom + " has been deleted");
    } else {
        console.log(nom + " doesnt exist");
    }
}

// Exemple d'utilisation
ajouterContact({ nom: "Aya", telephone: "061234567" });
ajouterContact({ nom: "oumaima", telephone: "068754322" });
ajouterContact({ nom: "bou3ou", telephone: "064567655" });
afficherContacts(); 
supprimerContact("bou3ou");
afficherContacts();
