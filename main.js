            var images = ["family.jpg","bro.jpg","sister.jpg","mother.jpg","father.jpg","grand-father.png"];
            var names =["My family","carter","sadie","Ruby","julius","orirs"];
            var i = 0;

            function update() {
                i++;
                var numbers_of_people = 5
                if (i > numbers_of_people) {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedNames = names[i];
               
                document.getElementById("familyimages").src = updatedImage;
                document.getElementById("familynames").innerHTML = updatedNames;
            }
