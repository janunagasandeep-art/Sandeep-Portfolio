// Project details mapping
const projectData = {
    stock: {
        title: "Stock Market Price Prediction",
        tags: ["Python", "Machine Learning", "Pandas", "Matplotlib", "Seaborn"],
        summary: "Developed a stock market price prediction project utilizing Python and supervised Machine Learning algorithms to identify asset trends.",
        body: `
            <h4>Project Accomplishments & Workflows:</h4>
            <ul>
                <li><strong>Data Acquisition:</strong> Collected and analysed historical stock prices to extract underlying features, seasonal trends, and patterns.</li>
                <li><strong>Data Wrangling:</strong> Handled data cleaning, preprocessing, outlier treatment, and feature selection using Pandas and NumPy to boost prediction accuracy.</li>
                <li><strong>Exploratory Analysis:</strong> Plotted data distributions and metric correlations using Matplotlib and Seaborn visualization libraries.</li>
                <li><strong>Predictive Modeling:</strong> Structured and trained a machine learning regression model to calculate and forecast future price movements.</li>
                <li><strong>Validation:</strong> Evaluated model results using standard metrics (Mean Absolute Error, R-squared) and overlaid actual vs. predicted values inside clear charts.</li>
            </ul>
        `
    },
    chat: {
        title: "Real-Time Chat Application",
        tags: ["Node.js", "Socket.IO", "MongoDB", "HTML/CSS/JS"],
        summary: "Constructed a highly responsive messaging app utilizing Socket.IO web sockets for instant text transmissions and MongoDB cluster storage.",
        body: `
            <h4>Project Accomplishments & Workflows:</h4>
            <ul>
                <li><strong>Web Sockets:</strong> Implemented real-time bi-directional messaging pipelines between clients utilizing Socket.IO events.</li>
                <li><strong>Database Integration:</strong> Styled message history databases and schema properties inside MongoDB to store messaging context securely.</li>
                <li><strong>Responsive UI:</strong> Built a fluid user-centric interface utilizing semantic HTML5, modern CSS3 layout rules, and vanilla JavaScript handlers.</li>
                <li><strong>Optimization:</strong> Refined event listeners and database search speeds, improving overall message delivery rate and client-side responsiveness.</li>
            </ul>
        `
    }
};

// Document initialization
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initSkillsChart();
    initProjectModals();
    initContactForm();
});

// Navigation Menu
function initNavigation() {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const links = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    links.forEach(l => {
        l.addEventListener("click", () => navLinks.classList.remove("active"));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(lk => lk.classList.remove("active"));
                const targetLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (targetLink) targetLink.classList.add("active");
            }
        });
    }, { threshold: 0.25 });

    sections.forEach(sec => observer.observe(sec));
}

// Skills Distribution Radar/Bar Chart
function initSkillsChart() {
    const ctx = document.getElementById("sandeepSkillsChart").getContext("2d");
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Python', 'SQL / MySQL', 'Power BI', 'Pandas & NumPy', 'Matplotlib & Seaborn', 'MongoDB', 'Node.js', 'ML Basics'],
            datasets: [{
                label: 'Sandeep Profile Proficiency',
                data: [92, 90, 88, 87, 85, 80, 75, 70],
                backgroundColor: 'rgba(0, 242, 254, 0.15)',
                borderColor: '#00f2fe',
                pointBackgroundColor: '#00f5a0',
                pointBorderColor: '#060913',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
                    grid: { color: 'rgba(255, 255, 255, 0.08)' },
                    pointLabels: { color: '#94a3b8', font: { family: 'Outfit', size: 10 } },
                    ticks: { display: false },
                    suggestedMin: 40,
                    suggestedMax: 100
                }
            }
        }
    });
}

// Project Details Dialog Modal
function initProjectModals() {
    const modal = document.getElementById("projectModal");
    const modalClose = document.getElementById("modalClose");
    const modalDetails = document.getElementById("modalDetails");
    const links = document.querySelectorAll(".project-link");

    links.forEach(lnk => {
        lnk.addEventListener("click", () => {
            const key = lnk.getAttribute("data-project");
            const data = projectData[key];

            if (data) {
                modalDetails.innerHTML = `
                    <div class="project-tags" style="margin-bottom: 0.8rem;">
                        ${data.tags.map(t => `<span class="project-tag" style="border-color: rgba(0,242,254,0.3); color: var(--accent-cyan);">${t}</span>`).join('')}
                    </div>
                    <h3 class="project-title" style="font-size: 1.8rem; margin-bottom: 0.8rem;">${data.title}</h3>
                    <p style="color: var(--text-secondary); font-style: italic; margin-bottom: 1.2rem;">${data.summary}</p>
                    <div style="border-top: 1px solid var(--border-color); padding-top: 1.2rem;">
                        ${data.body}
                    </div>
                `;
                modal.classList.add("active");
            }
        });
    });

    modalClose.addEventListener("click", () => modal.classList.remove("active"));
    
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });

    // View Certificate Modal Trigger
    const viewCertBtn = document.getElementById("viewCertBtn");
    if (viewCertBtn) {
        viewCertBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modalDetails.innerHTML = `
                <h3 class="project-title" style="font-size: 1.6rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-certificate" style="color: var(--accent-cyan);"></i> Internship Certificate</h3>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Python Full Stack Development (Glossary SoftTech &amp; APSCHE)</p>
                <div style="text-align: center; background: #0d1423; padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <img src="certificate.jpg" alt="Python Full Stack Internship Certificate" style="max-width: 100%; height: auto; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" onerror="this.src='https://placehold.co/600x400/0d1423/f8fafc?text=Please+Save+Your+Certificate+Image+As+certificate.jpg';">
                </div>
            `;
            modal.classList.add("active");
        });
    }

    // View Data Analyst Certificate Modal Trigger
    const viewDataCertBtn = document.getElementById("viewDataCertBtn");
    if (viewDataCertBtn) {
        viewDataCertBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modalDetails.innerHTML = `
                <h3 class="project-title" style="font-size: 1.6rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-graduation-cap" style="color: var(--accent-teal);"></i> Certified Data Analyst</h3>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Certified Data Analyst (DataMites)</p>
                <div style="text-align: center; background: #0d1423; padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <img src="data_analyst_cert.png" alt="Certified Data Analyst Certificate" style="max-width: 100%; height: auto; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                </div>
            `;
            modal.classList.add("active");
        });
    }
}

// AJAX Contact Form Handler (Web3Forms Integration)
function initContactForm() {
    const form = document.getElementById("sandeepContactForm");
    const submitBtn = form.querySelector("button[type='submit']");
    const originalBtnText = submitBtn.innerHTML;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const accessKeyInput = document.getElementById("web3FormsKey");
        if (accessKeyInput.value === "YOUR_ACCESS_KEY_HERE" || !accessKeyInput.value) {
            alert("To enable email notifications, please replace 'YOUR_ACCESS_KEY_HERE' in index.html (line 317) with your free key from web3forms.com!");
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

        const formData = new FormData(form);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Thank you! Your message was sent successfully. You will receive an email confirmation shortly.");
                form.reset();
            } else {
                alert("Form submission failed. Please check your Web3Forms access key.");
            }
        })
        .catch(error => {
            console.error("Submission Error:", error);
            alert("A network error occurred. Please try again later.");
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        });
    });
}
