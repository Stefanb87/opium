$(document).ready(function() {

   

    if (window.location.href.endsWith('index.html')) { 
        setTimeout(function(){
            window.location.href = 'home.html';
        }, 5000);
    }

/***** QUESTIONS PART *****/

    var question = 1;
    var points = 0;

    $(".answer").on("click", function(e){

        var answer = $(e.target).text();
        console.log(answer);

        if (question === 0 && answer === 'Με χυμό μήλου') {
            points += 30;
            console.log(points);
            result();
        } else if (question === 0 && answer === 'Με νερό και ζάχαρη') {
            points += 40;
            console.log(points);
            result();
        } else if (question === 0 && answer === 'Με τριμμένο πορτοκάλι και κανέλα') {
            points += 20;
            console.log(points);
            result();
        } else if (question === 0 && answer === 'Διαλύοντας δύο κύβους ζωμού λαχανικών') {
            points += 10;
            console.log(points);
            result();
        }
        
        switch(question) {
            case 1:
                if (answer === 'Λαχανικά') {
                    points += 30;
                } else if (answer === 'Αποξηραμένα φρούτα') {
                    points += 40;
                } else if (answer === 'Κακάο') {
                    points += 20;
                } else {
                    points += 10;
                }
                console.log(points);

                $("#question-number").text("ΕΡΩΤΗΣΕΙΣ 2");
                $("#img-questions").attr('src',"assets/5.jpg");
                $("#question").text("Τι περιλαμβάνει, συνήθως, η γέμιση της χριστουγεννιάτικης γαλοπούλας;");
                $("#answer1 a").text("Αβοκάντο");
                $("#answer2 a").text("Καρότο");
                $("#answer3 a").text("Χαλεπιανά");
                $("#answer4 a").text("Σταφίδες");
                question++;
                break;
            case 2:
                if (answer === 'Αβοκάντο') {
                    points += 10;
                } else if (answer === 'Καρότο') {
                    points += 20;
                } else if (answer === 'Χαλεπιανά') {
                    points += 30;
                } else {
                    points += 40;
                }
                console.log(points);

                $("#question-number").text("ΕΡΩΤΗΣΕΙΣ 3");
                $("#img-questions").attr('src',"assets/6.jpg");
                $("#question").text("Πώς πασπαλίζουμε τα μελομακάρονα;");
                $("#answer1 a").text("Με ζάχαρη άχνη");
                $("#answer2 a").text("Με μέλι και καρύδια");
                $("#answer3 a").text("Με γλάσο καραμέλας");
                $("#answer4 a").text("Με τριμμένο λεμόνι");
                question++;
                break;
            case 3:
                if (answer === 'Με ζάχαρη άχνη') {
                    points += 30;
                } else if (answer === 'Με μέλι και καρύδια') {
                    points += 40;
                } else if (answer === 'Με γλάσο καραμέλας') {
                    points += 20;
                } else {
                    points += 10;
                }
                console.log(points);

                $("#question-number").text("ΕΡΩΤΗΣΕΙΣ 4");
                $("#img-questions").attr('src',"assets/7.jpg");
                $("#question").text("Ποιος είναι ο πιο συνηθισμένος τρόπος τοποθέτησης κέρματος στη βασιλόπιτα;");
                $("#answer1 a").text("Το τυλίγουμε σε αλουμινόχαρτο");
                $("#answer2 a").text("Το τυλίγουμε σε χαρτοπετσέτα");
                $("#answer3 a").text("Το τοποθετούμε σε ένα πλαστικό σακουλάκι");
                $("#answer4 a").text("Το τοποθετούμε χωρίς κάποιο προστατευτικό");
                question++;
                break;
            case 4:
                if (answer === 'Το τυλίγουμε σε αλουμινόχαρτο') {
                    points += 40;
                } else if (answer === 'Το τυλίγουμε σε χαρτοπετσέτα') {
                    points += 30;
                } else if (answer === 'Το τοποθετούμε σε ένα πλαστικό σακουλάκι') {
                    points += 20;
                } else {
                    points += 10;
                }
                console.log(points);

                $("#question-number").text("ΕΡΩΤΗΣΕΙΣ 5");
                $("#img-questions").attr('src',"assets/8.jpg");
                $("#question").text("Πώς φτιάχνουμε το κλασικό σιρόπι των περισσότερων γλυκών;");
                $("#answer1 a").text("Με χυμό μήλου");
                $("#answer2 a").text("Με νερό και ζάχαρη");
                $("#answer3 a").text("Με τριμμένο πορτοκάλι και κανέλα");
                $("#answer4 a").text("Διαλύοντας δύο κύβους ζωμού λαχανικών");
                question = 0;
                break;
        }
    });

/***** RESULT PART *****/

    function result() {
        if (points>=50 && points<=70) {
            if (window.location.href.endsWith('questions.html')) { 
                window.location.href = 'results/result1.html';
            }
        } else if (points>=80 && points<=120) {
            if (window.location.href.endsWith('questions.html')) { 
                window.location.href = 'results/result2.html';
            }
        } else if (points>=130 && points<=170) {
            if (window.location.href.endsWith('questions.html')) { 
                window.location.href = 'results/result3.html';
            }
        } else if (points>=180 && points<=190) {
            if (window.location.href.endsWith('questions.html')) { 
                window.location.href = 'results/result4.html';
            }
        } else if (points == 200) {
            if (window.location.href.endsWith('questions.html')) { 
                window.location.href = 'results/result5.html';
            }
        }
    }
        
        
/***** SLIDER PART *****/


    jQuery('.scrollbar-rail').scrollbar();








});