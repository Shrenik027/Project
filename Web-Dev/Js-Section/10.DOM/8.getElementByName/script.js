function collectData() {
  const languageProficiencyEls = document.getElementsByName(
    "languageProficiency"
  );

  console.log(languageProficiencyEls);

  // Loop THorugh ht enodelist to find the selected radio button

  for (let i = 0; i < languageProficiencyEls.length; i++) {
    if (languageProficiencyEls[i].checked) {
      console.log(`swlected Language is: ${languageProficiencyEls[i].value}`);
    }
  }
  // log all elements with the name 'email'
  const emailsEl = document.getElementsByName("email");
  console.log(emailsEl);
}
