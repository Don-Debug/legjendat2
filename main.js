fetch('https://api.ipregistry.co/?key=j6ibf1n9rb4mjzo3')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        console.log(payload)
        console.log(payload.location.country.name + ', ' + payload.location.city + ', ' + payload.ip + ', ' + payload.connection.domain + ', ' + payload.connection.type);
        let request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/839811644065972235/XqSTYgFkDpYPMibbi83dneqidedLTQFA2QTwiFDb23GcXudHJfvZwu56j9AeiYd3ds3g");
        // again, replace the url in the open method with yours
        request.setRequestHeader('Content-type', 'application/json');

        let myEmbed = {
            author: {
                name: payload.ip
            },
            title: "New Visitor",
            description: "Country: " + payload.location.country.name + "City: " + payload.location.city + "Provider: " + payload.connection.domain + "Type Of Provider: " + payload.connection.type, 
            color: hexToDecimal("#ff0000")
        }

        let params = {
            username: "https://legjendat.vercel.app",
            embeds: [myEmbed]
        }

        request.send(JSON.stringify(params));

        // function that converts a color HEX to a valid Discord color
        function hexToDecimal(hex) {
            return parseInt(hex.replace("#", ""), 16)
        }
    });
const shkollat = document.querySelector(".click");
const arrow = document.getElementById("down-arrow");
const emrat = document.querySelector(".emrat");

function down() {
    if (emrat.classList.contains("baby")) {
        arrow.classList.remove("rotate");
        emrat.classList.remove("baby");
    } else {
        arrow.classList.add("rotate");
        emrat.classList.add("baby");
    }
};

shkollat.addEventListener("click", down);


const menu = document.querySelector(".menu");
const navi = document.querySelector(".navi");
const flayer = document.querySelector(".flayer");
const slayer = document.querySelector(".slayer");
const tlayer = document.querySelector(".tlayer");

function opened() {
    if (flayer.classList.contains("one")) {
        flayer.classList.remove("one");
        slayer.classList.remove("two");
        tlayer.classList.remove("three");
        navi.classList.remove("navi-move");
    } else {
        flayer.classList.add("one");
        slayer.classList.add("two");
        tlayer.classList.add("three");
        navi.classList.add("navi-move");
    }
};

menu.addEventListener("click", opened);
