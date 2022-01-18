//Oppgave 1 Lag et regnestykke og sett svaret i en variabel 
    
    let x = 864+139
    console.log("x")

//Oppgave 2 del 40 på 6 og legg det inn i en variabel
    
    let y = 40/6
    console.log("y")

//Oppgave 3 legg det som blir til overs i en annen variabel
    
    x = 40
    let y = x % 6;
    console.log("y")

//Oppgave 4 lag to bools, sett den ene til true og den andre til false

    let ilikemeat = true;
    let iamvegiterian = false;

//Oppgave 5 lag en if/else settning som bruker disse
    
    let ilikemeat = true; //To get the diffrent answars switch between true or false 

    if (ilikemeat)
    {
       console.log ("Here you got the meat menue") 
    }
    else 
    {
        console.log ("Here you got the vegeiterien menue")
    }

//Oppgave 6 lag en nested if som velger farge på skoene dine ut fra hvilket vær det er

//endere en påstan til true for å få opp et av sko alternativenen 
    let sunny = false;
    let windy = false;
    let rainy = false;
    let snowy = false;
    
    if (sunny === false)
    {    
        if (windy === false)
        { 
            if (rainy === false) 
            {
                if (snowy === false)
                {
                    console.log ("black shoes")
                }
                else 
                {
                    console.log ("white shoes")
                }
            }
            else 
            {
                console.log ("blue shoes")
            }
        }        
        else 
        {
            console.log ("gry shoes")
        }
            
    }
    else
    {
     console.log ("yellow shoes")   
    }