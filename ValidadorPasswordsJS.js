				<!--
        <div class="form-horizontal">
                        <div class="form-group">
                            <label for="txtEmail" class="col-sm-3 control-label">
                                <span data-lang="Email"></span>
                            </label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" id="txtEmail" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="txtPasswordC" class="col-sm-3 control-label">
                                <span data-lang="Password"></span>
                            </label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control" id="txtPasswordC"
                                       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                            </div>
                        </div>

                        <div id="message" class=" form-group">
                            <div class="col-sm-3 control-label"></div>
                            <div class="col-sm-9">
                                <span data-lang="PassValidation"></span>
                                <p id="letter" class="invalid" data-lang="Lowercase"></p>
                                <p id="capital" class="invalid" data-lang="Uppercase"></p>
                                <p id="number" class="invalid" data-lang="Number"</p>
                                <p id="length" class="invalid" data-lang="Minimum8"></p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="txtPasswordConfirm" class="col-sm-3 control-label">
                                <span data-lang="ComfirmPass"></span>
                            </label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control" id="txtPasswordConfirm" autocomplete="off" />
                            </div>

                        </div>

                    </div>
				
			-->



///////////////////////////////////////////////////////////////////////////
			if ($("#txtPasswordC").val() == null || $("#txtPasswordC").val() == "") {
                document.getElementById("txtPasswordC").style.borderColor = 'red';
                flag = false;
            }
            else {
                if (validatePass()) {
                    document.getElementById("PasswordString").style.display = "none";
                    if ($("#txtPasswordC").val() === $("#txtPasswordConfirm").val()) {
                        document.getElementById("PasswordDiff").style.display = "none";
                        obj.Password = $("#txtPasswordC").val();
                        document.getElementById("txtPasswordC").style.borderColor = '#cccccc';
                    } else {
                        flag = false;
                        document.getElementById("PasswordDiff").style.display = "Block";
                    }
                } else {
                    flag = false;
                    document.getElementById("PasswordString").style.display = "Block";
                }
                
            }
//////////////////////////////////////////////////////////////////////////			
	 var myInput = document.getElementById("txtPasswordC");
        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var length = document.getElementById("length");
			
		// When the user clicks on the password field, show the message box
        myInput.onfocus = function () {
            document.getElementById("message").style.display = "block";
        }

        // When the user clicks outside of the password field, hide the message box
        myInput.onblur = function () {
            document.getElementById("message").style.display = "none";
        }

        // When the user starts to type something inside the password field
        myInput.onkeyup = function () {
            validatePass();
        }			
					
		function validatePass() {
            flag = true;
            // Validate lowercase letters
            var lowerCaseLetters = /[a-z]/g;
            if (myInput.value.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
                flag = false;
            }

            // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if (myInput.value.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
                flag = false;
            }

            // Validate numbers
            var numbers = /[0-9]/g;
            if (myInput.value.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
                flag = false;
            }

            // Validate length
            if (myInput.value.length >= 8) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            } else {
                length.classList.remove("valid");
                length.classList.add("invalid");
                flag = false;
            }
            return flag;
        }
