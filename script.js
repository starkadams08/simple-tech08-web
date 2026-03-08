function sendMessage(){

    let input = document.getElementById("userInput").ariaValueMax;
    let chatBox = document.getElementById("chatBox");

    let response = "";

    if(input.includes("hours")){
        response = "We are open from 8pm every day.";
    }

    else if(input.includes("location")){
        response = "We are located in Kampala city center.";
    }

    else if(input.includes("services")){
        response = "We repair phones, laptops, and install software.";
    }

    else{
        response = "Please contact us on WhatsApp for more details.";
    }

    chatBox.innerHTML += "<p><b>You:</b> " + input + "</p>";
    chatBox.innerHTML += "<p><b>AI:</b> " + response + "</p>";
}

