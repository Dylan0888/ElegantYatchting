const shortTours =[
    {
        src:"imgs/gallery-imgs/yatch7.jpg",
        title:"Golden Hour Escap",
        duration:"2", // hours
        price:"299",
        activities: {
            a1: "Private yacht experience",
            a2: "Complimentary champagne (bottle)",
            a3: "Ambient background music",
            a4: "Crew and light service staff"
        }
    },
    {
        src:"imgs/gallery-imgs/yatch3.jpg",
        title:"Midday Leisure Cruise",
        duration:"4", // hours
        price:"999",
        activities: {
            a1: "Light brunch or lunch (gourmet picnic or cold platter)",
            a2: "Sun deck loungers",
            a3: "Snorkeling gear",
            a4: "Towel and soft drink service"
        }
    },
    {
        src:"imgs/gallery-imgs/yatch4.jpg",
        title:"Champagne  Brunch Cruise",
        duration:"4", // hours
        price:"699",
        activities: {
            a1: "Mimosa's and fresh fruit platter",
            a2: "Gourmet brunch onboard",
            a3: "Soft jazz and sun deck relaxation",
            a4: "Sea swimming at a scenic cove"
        }
    },
    {
        src:"imgs/gallery-imgs/yacht-night.jpg",
        title:"Starlight Serenity Cruise",
        duration:"2.5", // hours
        price:"849",
         activities: {
            a1: "Cruise under the stars",
            a2: "Ambient lighting and lounge seating",
            a3: "Wine and a chocolate pairing",
            a4: "Romantic atmosphere"
        }
    }
]

let shortToursTemplate = ""
shortTours.forEach((tour)=>{

    shortToursTemplate += 
    `
    <section class="short-tour-container">
            <div class="tour-title"><h1>${tour.title}e</h1></div>
            <div class="tour-body">
                <div class="tour-img">
                     <img src="${tour.src}">
                </div>
                <div class="tour-details">
                    <div class="tour-info">
                        <p><i class="fa-solid fa-clock"></i> ${tour.duration} Hours</p>
                        <p><i class="fa-solid fa-sterling-sign"></i> ${tour.price}</p>
                        <p>Activities:</p>
                        <ul>
                            <li>${tour.activities.a1}</li>
                            <li>${tour.activities.a2}</li>
                            <li>${tour.activities.a3}</li>
                            <li>${tour.activities.a4}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <button>Book Now</button>
            </div>
        </section>
    `
});

document.querySelector(".short-tour-package").innerHTML = shortToursTemplate

