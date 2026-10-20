const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatClose = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

chatToggle.addEventListener("click", function () {
    chatWindow.classList.toggle("chat-hidden");

    if (!chatWindow.classList.contains("chat-hidden")) {
        chatInput.focus();
    }
});

chatClose.addEventListener("click", function () {
    chatWindow.classList.add("chat-hidden");
});

function addMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAnswer(question) {
    const q = question.toLowerCase();

    if (
        q.includes("what is alpine") ||
        q.includes("about us") ||
        q.includes("about alpine") ||
        q.includes("who are you")
    ) {
        return "Alpine Ascents is a mountaineering and adventure website focused on mountain climbing, expeditions, exploration and helping visitors learn about mountain adventures.";
    }

    if (
        q.includes("expedition") ||
        q.includes("mountain trip") ||
        q.includes("climbing trip")
    ) {
        return "Expeditions involve planning a mountain journey, understanding the route, preparing suitable equipment and checking weather and safety conditions. Explore the Expeditions section of our website for available information.";
    }

    if (
        q.includes("history") ||
        q.includes("everest") ||
        q.includes("annapurna")
    ) {
        return "Visit the History section to learn about mountaineering. Everest and Annapurna are well-known Himalayan peaks. Always check current route conditions and expert guidance before planning a climb.";
    }

    if (
        q.includes("safety") ||
        q.includes("safe") ||
        q.includes("danger")
    ) {
        return "Mountain safety is essential. Check weather forecasts, use suitable equipment, acclimatize gradually, follow trained guides and never ignore altitude sickness symptoms or official warnings.";
    }

    if (
        q.includes("gear") ||
        q.includes("equipment") ||
        q.includes("what should i bring")
    ) {
        return "Common climbing essentials include suitable footwear, layered clothing, navigation tools, water, food, a first-aid kit and activity-specific safety equipment. Your exact gear depends on the route and conditions.";
    }

    if (
        q.includes("prepare") ||
        q.includes("preparation") ||
        q.includes("training")
    ) {
        return "Prepare by building fitness gradually, researching the route, checking the weather, arranging suitable equipment and getting advice from qualified mountain professionals.";
    }

    if (
        q.includes("book") ||
        q.includes("booking") ||
        q.includes("price") ||
        q.includes("cost") ||
        q.includes("fee")
    ) {
        return "For booking and pricing, check the contact or expedition information on this website. Specific prices and booking availability are not provided by this chat.";
    }

    if (
        q.includes("gallery") ||
        q.includes("photo") ||
        q.includes("image")
    ) {
        return "Open the Gallery section of Alpine Ascents to explore mountain views, climbing scenes and adventure photography available on the website.";
    }

    if (
        q.includes("contact") ||
        q.includes("email") ||
        q.includes("phone")
    ) {
        return "Please visit the Contact section of the website for the contact details that are actually listed there.";
    }

    if (
        q.includes("thank") ||
        q.includes("thanks")
    ) {
        return "You're welcome! 🏔️ Happy exploring with Alpine Ascents.";
    }

    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("salam") ||
        q.includes("assalam")
    ) {
        return "Hello, adventurer! 🏔️ Ask me about Alpine Ascents, expeditions, climbing gear or mountain safety.";
    }

    return "I can help with Alpine Ascents, expeditions, mountaineering history, safety, climbing gear, trip preparation, gallery and contact information. Please ask about one of these topics.";
}
chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const question = chatInput.value.trim();

    if (question === "") return;

    addMessage(question, "user-message");
    chatInput.value = "";

    const answer = getAnswer(question);
    addMessage(answer, "bot-message");
});

document.querySelectorAll(".quick-questions button").forEach(function (button) {
    button.addEventListener("click", function () {
        const question = button.dataset.question;

        addMessage(question, "user-message");
        addMessage(getAnswer(question), "bot-message");
    });
});


const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
});

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

document.querySelectorAll(".accordion-btn").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;
        const content = button.nextElementSibling;

        document.querySelectorAll(".accordion-item").forEach(other => {

            if (other !== item) {

                other.classList.remove("open");
                other.querySelector(".accordion-content").style.maxHeight = null;

            }

        });

        item.classList.toggle("open");

        if (item.classList.contains("open")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }

    });

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

function updateTicker() {

    const now = new Date();

    const date = now.toLocaleDateString("en-PK", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const time = now.toLocaleTimeString("en-PK", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    document.getElementById("tickerText").textContent =
        "ALPINE ASCENTS  •  " +
        date +
        "  •  " +
        time +
        "  •  MOUNTAIN EXPLORATION  •";

}

updateTicker();
setInterval(updateTicker, 1000);

const modal = document.getElementById("infoModal");
const modalClose = document.getElementById("modalClose");
const modalLabel = document.getElementById("modalLabel");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDetails = document.getElementById("modalDetails");

function openModal(data) {

    modalLabel.textContent = data.label;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    modalDetails.innerHTML = data.details.map(detail => `

                <div class="modal-detail">
                    <strong>${detail[0]}</strong>
                    <span>${detail[1]}</span>
                </div>

            `).join("");

    modal.classList.add("active");
    document.body.classList.add("modal-open");

}

function closeModal() {

    modal.classList.remove("active");
    document.body.classList.remove("modal-open");

}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

const historyData = [

    {
        label: "HISTORY / 1786",
        title: "The Birth of Modern Alpinism",
        description: "The successful ascent of Mont Blanc is widely regarded as one of the foundational moments of modern mountaineering. It helped transform mountain climbing from exploration into a dedicated sporting and scientific pursuit.",
        details: [
            ["Mountain", "Mont Blanc"],
            ["Era", "18th Century"],
            ["Importance", "Birth of modern alpinism"],
            ["Legacy", "Foundation for alpine climbing"]
        ]
    },

    {
        label: "HISTORY / 1950",
        title: "The First 8,000-Metre Summit",
        description: "Annapurna became the first mountain above 8,000 metres to be successfully climbed. The achievement opened a new chapter in high-altitude mountaineering.",
        details: [
            ["Peak", "Annapurna I"],
            ["Height", "8,091 m"],
            ["Year", "1950"],
            ["Importance", "First 8,000m summit"]
        ]
    },

    {
        label: "HISTORY / 1953",
        title: "Everest Reached",
        description: "The successful ascent of Mount Everest became one of the most celebrated achievements in exploration. It demonstrated what careful preparation, teamwork and determination could accomplish at extreme altitude.",
        details: [
            ["Peak", "Mount Everest"],
            ["Height", "8,849 m"],
            ["Year", "1953"],
            ["Importance", "Historic Everest ascent"]
        ]
    },

    {
        label: "HISTORY / 1970s",
        title: "The Rise of Technical Climbing",
        description: "Advances in equipment, clothing, ropes and climbing techniques allowed mountaineers to attempt increasingly technical routes and difficult mountain faces.",
        details: [
            ["Period", "1970s"],
            ["Development", "Technical climbing"],
            ["Equipment", "Modern climbing systems"],
            ["Impact", "More challenging routes"]
        ]
    },

    {
        label: "HISTORY / TODAY",
        title: "A New Generation",
        description: "Modern mountaineering combines traditional experience with technology, environmental responsibility, advanced communication and improved understanding of mountain conditions.",
        details: [
            ["Focus", "Responsible adventure"],
            ["Technology", "Navigation & communication"],
            ["Priority", "Safety & preparation"],
            ["Future", "Sustainable exploration"]
        ]
    }

];

document.querySelectorAll(".timeline-detail").forEach(button => {

    button.addEventListener("click", () => {

        openModal(
            historyData[
            Number(button.dataset.history)
            ]
        );

    });

});

const expeditionData = [

    {
        label: "EXPEDITION 01",
        title: "High Altitude",
        description: "High-altitude expeditions take climbers into demanding environments where preparation, acclimatization, navigation and teamwork become essential parts of the journey.",
        details: [
            ["Focus", "Extreme altitude"],
            ["Environment", "High mountain terrain"],
            ["Skills", "Acclimatization & navigation"],
            ["Experience", "Advanced preparation"]
        ]
    },

    {
        label: "EXPEDITION 02",
        title: "Alpine Routes",
        description: "Alpine routes combine steep terrain, changing weather and technical climbing. These routes require strong movement skills, route awareness and careful planning.",
        details: [
            ["Focus", "Technical climbing"],
            ["Environment", "Rock & snow"],
            ["Skills", "Rope systems & route planning"],
            ["Style", "Classic alpine climbing"]
        ]
    },

    {
        label: "EXPEDITION 03",
        title: "Wilderness",
        description: "Wilderness expeditions move beyond established trails and into remote mountain landscapes. Self-sufficiency, environmental awareness and responsible travel are central to the experience.",
        details: [
            ["Focus", "Remote exploration"],
            ["Environment", "Untouched wilderness"],
            ["Skills", "Navigation & campcraft"],
            ["Priority", "Leave No Trace"]
        ]
    }

];

document.querySelectorAll(".expedition-card").forEach(card => {

    card.addEventListener("click", () => {

        openModal(
            expeditionData[
            Number(card.dataset.expedition)
            ]
        );

    });

});

const organizationData = [

    {
        label: "MOUNTAIN COMMUNITY",
        title: "Alpine Clubs",
        description: "Alpine clubs bring together climbers, hikers and mountain enthusiasts. They support education, route information, community events and responsible mountain activities.",
        details: [
            ["Community", "Climbers & hikers"],
            ["Purpose", "Education & adventure"],
            ["Activities", "Training & events"],
            ["Focus", "Mountain culture"]
        ]
    },

    {
        label: "EXPEDITION NETWORK",
        title: "Expedition Groups",
        description: "Expedition groups organize structured mountain journeys with experienced teams, logistical planning, camps and carefully developed routes.",
        details: [
            ["Purpose", "Organized expeditions"],
            ["Planning", "Routes & logistics"],
            ["Team", "Guides & climbers"],
            ["Focus", "Exploration"]
        ]
    },

    {
        label: "MOUNTAIN EDUCATION",
        title: "Climbing Schools",
        description: "Climbing schools introduce people to mountain skills through structured education covering movement, equipment, navigation and mountain awareness.",
        details: [
            ["Purpose", "Mountain education"],
            ["Training", "Climbing techniques"],
            ["Skills", "Navigation & equipment"],
            ["Level", "Beginner to advanced"]
        ]
    },

    {
        label: "EMERGENCY SUPPORT",
        title: "Mountain Rescue",
        description: "Mountain rescue organizations provide emergency assistance in difficult terrain. Their work depends on communication, trained teams and coordinated response.",
        details: [
            ["Purpose", "Emergency response"],
            ["Environment", "Mountain terrain"],
            ["Team", "Trained rescuers"],
            ["Priority", "Safety & assistance"]
        ]
    }

];

document.querySelectorAll(".org").forEach(org => {

    org.addEventListener("click", () => {

        openModal(
            organizationData[
            Number(org.dataset.org)
            ]
        );

    });

});

const newsData = [

    {
        label: "TECHNOLOGY / 2026",
        title: "Technology is Changing Modern Expeditions",
        description: "Modern expeditions increasingly use improved navigation systems, weather information, communication equipment and lightweight gear. These developments help teams prepare better and make informed decisions in complex mountain environments.",
        details: [
            ["Area", "Expedition technology"],
            ["Development", "Navigation systems"],
            ["Communication", "Modern satellite tools"],
            ["Impact", "Better preparation"]
        ]
    },

    {
        label: "ENVIRONMENT / 2026",
        title: "Protecting Fragile Mountain Environments",
        description: "Mountain ecosystems are sensitive environments. Responsible mountaineering focuses on reducing waste, respecting wildlife, protecting natural areas and encouraging visitors to leave no trace.",
        details: [
            ["Focus", "Environmental protection"],
            ["Priority", "Leave No Trace"],
            ["Concern", "Fragile ecosystems"],
            ["Goal", "Responsible climbing"]
        ]
    },

    {
        label: "EXPEDITION / 2026",
        title: "The Next Generation of Mountain Explorers",
        description: "A new generation of explorers is combining traditional mountain knowledge with modern technology, improved preparation and a stronger focus on responsible adventure.",
        details: [
            ["Generation", "Modern explorers"],
            ["Focus", "Innovation & experience"],
            ["Skills", "Technical & digital"],
            ["Vision", "Responsible exploration"]
        ]
    }

];

document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", e => {

        e.stopPropagation();

        openModal(
            newsData[
            Number(button.dataset.news)
            ]
        );

    });

});

const locationBtn = document.getElementById("locationBtn");
const locationText = document.getElementById("locationText");

locationBtn.addEventListener("click", () => {

    if (!navigator.geolocation) {

        locationText.textContent =
            "Geolocation is not supported by your browser.";

        return;

    }

    locationText.textContent =
        "Detecting your location...";

    navigator.geolocation.getCurrentPosition(

        position => {

            const lat =
                position.coords.latitude.toFixed(4);

            const lon =
                position.coords.longitude.toFixed(4);

            locationText.innerHTML =
                "Your coordinates: " +
                lat +
                ", " +
                lon +
                "<br>Location detected successfully.";

        },

        () => {

            locationText.textContent =
                "Location permission was not provided.";

        }

    );

});

const galleryCards = document.querySelectorAll(".gallery-card");
const galleryLightbox = document.getElementById("galleryLightbox");
const galleryLightboxImage = document.getElementById("galleryLightboxImage");
const galleryLightboxTitle = document.getElementById("galleryLightboxTitle");
const galleryLightboxCategory = document.getElementById("galleryLightboxCategory");
const galleryLightboxClose = document.getElementById("galleryLightboxClose");
let galleryLastFocused = null;

function openGalleryLightbox(card) {
    const image = card.querySelector("img");
    galleryLastFocused = card;
    galleryLightboxImage.src = image.src;
    galleryLightboxImage.alt = image.alt;
    galleryLightboxTitle.textContent = card.dataset.title || image.alt;
    galleryLightboxCategory.textContent = card.dataset.category || "Alpine Ascents Gallery";
    galleryLightbox.classList.add("open");
    galleryLightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    galleryLightboxClose.focus();
}

function closeGalleryLightbox() {
    galleryLightbox.classList.remove("open");
    galleryLightbox.setAttribute("aria-hidden", "true");
    galleryLightboxImage.src = "";
    document.body.style.overflow = "";
    if (galleryLastFocused) galleryLastFocused.focus();
}

galleryCards.forEach(card => {
    card.addEventListener("click", () => openGalleryLightbox(card));
});

galleryLightboxClose.addEventListener("click", closeGalleryLightbox);
galleryLightbox.addEventListener("click", event => {
    if (event.target === galleryLightbox) closeGalleryLightbox();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && galleryLightbox.classList.contains("open")) {
        closeGalleryLightbox();
    }
});

const form =
    document.getElementById("contactForm");

const fields = {

    name: {
        input: document.getElementById("name"),
        error: document.getElementById("nameError")
    },

    email: {
        input: document.getElementById("email"),
        error: document.getElementById("emailError")
    },

    interest: {
        input: document.getElementById("interest"),
        error: document.getElementById("interestError")
    },

    message: {
        input: document.getElementById("message"),
        error: document.getElementById("messageError")
    }

};

function validateName() {

    const value =
        fields.name.input.value.trim();

    if (value.length < 3) {

        fields.name.error.textContent =
            "Please enter your name.";

        fields.name.input.classList.add("invalid");
        fields.name.input.classList.remove("valid");

        return false;

    }

    fields.name.error.textContent = "";

    fields.name.input.classList.remove("invalid");
    fields.name.input.classList.add("valid");

    return true;

}

function validateEmail() {

    const value =
        fields.email.input.value.trim();

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(value)) {

        fields.email.error.textContent =
            "Please enter a valid email address.";

        fields.email.input.classList.add("invalid");
        fields.email.input.classList.remove("valid");

        return false;

    }

    fields.email.error.textContent = "";

    fields.email.input.classList.remove("invalid");
    fields.email.input.classList.add("valid");

    return true;

}

function validateInterest() {

    if (fields.interest.input.value === "") {

        fields.interest.error.textContent =
            "Please select an expedition interest.";

        fields.interest.input.classList.add("invalid");
        fields.interest.input.classList.remove("valid");

        return false;

    }

    fields.interest.error.textContent = "";

    fields.interest.input.classList.remove("invalid");
    fields.interest.input.classList.add("valid");

    return true;

}

function validateMessage() {

    const value =
        fields.message.input.value.trim();

    if (value.length < 15) {

        fields.message.error.textContent =
            "Please enter at least 15 characters.";

        fields.message.input.classList.add("invalid");
        fields.message.input.classList.remove("valid");

        return false;

    }

    fields.message.error.textContent = "";

    fields.message.input.classList.remove("invalid");
    fields.message.input.classList.add("valid");

    return true;

}

form.addEventListener("submit", e => {

    e.preventDefault();

    const valid =
        validateName() &&
        validateEmail() &&
        validateInterest() &&
        validateMessage();

    if (!valid) return;

    document.getElementById("successMessage")
        .style.display = "block";

    form.reset();

    Object.values(fields).forEach(field => {
        field.error.textContent = "";
        field.input.classList.remove("valid", "invalid");
    });

});

const visitorKey =
    "alpineVisitorCount";

let visitorCount =
    localStorage.getItem(visitorKey);

if (!visitorCount) {

    visitorCount = 1;

} else {

    visitorCount =
        parseInt(visitorCount) + 1;

}

localStorage.setItem(
    visitorKey,
    visitorCount
);

document.getElementById("visitorBadge")
    .textContent =
    "VISITORS " +
    String(visitorCount).padStart(3, "0");

const scrollProgress =
    document.getElementById("scrollProgress");

const backTop =
    document.getElementById("backTop");

function updateScrollUI() {

    const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        scrollable > 0
            ? (window.scrollY / scrollable) * 100
            : 0;

    scrollProgress.style.width =
        progress + "%";

    backTop.classList.toggle(
        "show",
        window.scrollY > 600
    );

}

window.addEventListener(
    "scroll",
    updateScrollUI,
    { passive: true }
);

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

updateScrollUI();

const heroVideo =
    document.querySelector(".hero-video");

if (heroVideo) {

    heroVideo.muted = true;

    heroVideo.play().catch(() => { });

}

const expeditionVideo =
    document.querySelector(".video-box video");

if (expeditionVideo) {

    expeditionVideo.muted = true;

    expeditionVideo.controls = false;

    expeditionVideo.play().catch(() => { });

}
