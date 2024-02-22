function returnText(postnum) {
            var nameField = document.getElementById('userAnswer' + postnum).value;
    var result = document.getElementById('result' + postnum);
           // alert(nameField);
           const para = document.createElement("p")
           const node = document.createTextNode(nameField)
           para.appendChild(node)
            // result.textContent =  nameField;
          const element = document.getElementById("content" + postnum)

          element.appendChild(para)
            
            }

            var coll = document.getElementsByClassName("collapsible");
            var i;
            
            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });
            }

            function popup(){
                myPopup.classList.add("show");
             
            }
            function closePopup(){
                myPopup.classList.remove("show");
            }
          