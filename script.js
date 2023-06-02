function Task2() {
  var formOfAddress = document.getElementById("formOfAddress").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var greeting = "";

// Bei Auswahl der jeweiligen Anrede, kommt die ensprechende Bezeichnung dazu (Dead Mr/ Dear Madam)

  if (formOfAddress === "Mr.") {
    greeting = "Dear Mr. " + lastName;
  } else if (formOfAddress === "Mrs.") {
    greeting = "Dear Madam " + lastName;
  }

  // Diese Zeile dient um das Ergebnis darzustellen.

  document.getElementById("greeting").textContent = greeting;
  
}
