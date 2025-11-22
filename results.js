const personalityTypes = {
    R: {
        name: "The Doer",
        code: "Realistic",
        icon: "🔧",
        description: "You're practical, hands-on, and love working with tools, machines, and technology. You prefer concrete results and tangible outcomes. Your strength lies in technical skills and problem-solving through action.",
        strengths: [
            { title: "Technical Expertise", description: "Natural ability to understand and work with mechanical and technical systems" },
            { title: "Practical Problem-Solving", description: "Find efficient solutions through hands-on experimentation" },
            { title: "Attention to Detail", description: "Precision and accuracy in technical work" }
        ],
        careers: [
            { icon: "⚙️", title: "Mechanical Engineer", description: "Design and develop mechanical systems and products", match: "95%" },
            { icon: "💻", title: "Software Developer", description: "Build and maintain software applications", match: "90%" },
            { icon: "🏗️", title: "Civil Engineer", description: "Plan and oversee construction projects", match: "88%" }
        ],
        development: [
            { title: "Communication Skills", description: "Work on expressing technical ideas to non-technical audiences" },
            { title: "Team Collaboration", description: "Develop interpersonal skills for better teamwork" }
        ]
    },
    I: {
        name: "The Investigator",
        code: "Investigative",
        icon: "🔬",
        description: "You're analytical, curious, and love solving complex problems. You thrive on research, data analysis, and understanding how things work. Your strength lies in critical thinking and intellectual exploration.",
        strengths: [
            { title: "Analytical Thinking", description: "Exceptional ability to break down complex problems and find solutions" },
            { title: "Research Skills", description: "Thorough and methodical approach to gathering and analyzing information" },
            { title: "Innovation", description: "Creative problem-solving through scientific and logical methods" }
        ],
        careers: [
            { icon: "📊", title: "Data Scientist", description: "Analyze complex data to drive business decisions", match: "96%" },
            { icon: "🔬", title: "Research Scientist", description: "Conduct experiments and advance scientific knowledge", match: "94%" },
            { icon: "💻", title: "Software Architect", description: "Design complex software systems and solutions", match: "90%" }
        ],
        development: [
            { title: "Practical Application", description: "Focus on translating research into real-world solutions" },
            { title: "Social Skills", description: "Build stronger interpersonal connections" }
        ]
    },
    A: {
        name: "The Creator",
        code: "Artistic",
        icon: "🎨",
        description: "You're creative, expressive, and love bringing ideas to life through art, design, and innovation. You thrive in unstructured environments where you can explore your imagination. Your strength lies in originality and aesthetic vision.",
        strengths: [
            { title: "Creative Vision", description: "Unique ability to see possibilities and create innovative solutions" },
            { title: "Artistic Expression", description: "Natural talent for visual, written, or performing arts" },
            { title: "Innovation", description: "Think outside the box and challenge conventional approaches" }
        ],
        careers: [
            { icon: "🎨", title: "UX/UI Designer", description: "Create beautiful and functional digital experiences", match: "95%" },
            { icon: "✏️", title: "Graphic Designer", description: "Design visual concepts for various media", match: "92%" },
            { icon: "🎬", title: "Creative Director", description: "Lead creative projects and campaigns", match: "90%" }
        ],
        development: [
            { title: "Business Acumen", description: "Learn to balance creativity with commercial viability" },
            { title: "Time Management", description: "Develop structured approaches to creative work" }
        ]
    },
    S: {
        name: "The Helper",
        code: "Social",
        icon: "🤝",
        description: "You're empathetic, caring, and love helping others grow and succeed. You thrive in collaborative environments focused on education, healthcare, or community service. Your strength lies in understanding and supporting people.",
        strengths: [
            { title: "Empathy", description: "Deep understanding of others' needs and emotions" },
            { title: "Communication", description: "Excellent ability to connect and interact with diverse people" },
            { title: "Teaching", description: "Natural talent for explaining concepts and helping others learn" }
        ],
        careers: [
            { icon: "📚", title: "Teacher/Educator", description: "Inspire and educate the next generation", match: "96%" },
            { icon: "❤️", title: "Social Worker", description: "Support individuals and communities in need", match: "94%" },
            { icon: "💼", title: "HR Manager", description: "Develop and support employees in organizations", match: "88%" }
        ],
        development: [
            { title: "Boundaries", description: "Learn to balance helping others with self-care" },
            { title: "Assertiveness", description: "Develop confidence in advocating for yourself" }
        ]
    },
    E: {
        name: "The Entrepreneur",
        code: "Enterprising",
        icon: "💼",
        description: "You're ambitious, persuasive, and love leading projects and people. You thrive in competitive environments where you can make an impact. Your strength lies in leadership and strategic thinking.",
        strengths: [
            { title: "Leadership", description: "Natural ability to motivate and guide teams toward goals" },
            { title: "Strategic Thinking", description: "See the big picture and plan for long-term success" },
            { title: "Persuasion", description: "Convince and influence others effectively" }
        ],
        careers: [
            { icon: "💼", title: "Business Manager", description: "Lead teams and drive business growth", match: "95%" },
            { icon: "📱", title: "Marketing Director", description: "Develop and execute marketing strategies", match: "92%" },
            { icon: "🚀", title: "Entrepreneur", description: "Build and grow your own business ventures", match: "94%" }
        ],
        development: [
            { title: "Patience", description: "Develop tolerance for slower, methodical processes" },
            { title: "Active Listening", description: "Improve ability to hear and value others' input" }
        ]
    },
    C: {
        name: "The Organizer",
        code: "Conventional",
        icon: "📋",
        description: "You're detail-oriented, organized, and love creating order and structure. You thrive in systematic environments with clear procedures. Your strength lies in precision and reliability.",
        strengths: [
            { title: "Organization", description: "Exceptional ability to create and maintain efficient systems" },
            { title: "Accuracy", description: "Meticulous attention to detail and data" },
            { title: "Reliability", description: "Consistently deliver high-quality, error-free work" }
        ],
        careers: [
            { icon: "📊", title: "Business Analyst", description: "Analyze business processes and data", match: "94%" },
            { icon: "💰", title: "Accountant", description: "Manage financial records and reporting", match: "92%" },
            { icon: "📋", title: "Project Manager", description: "Plan and coordinate complex projects", match: "90%" }
        ],
        development: [
            { title: "Flexibility", description: "Adapt to changing circumstances and ambiguity" },
            { title: "Innovation", description: "Balance structure with creative problem-solving" }
        ]
    }
};

// Mock jobs for matching
const mockJobs = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "TechCorp Inc.",
        logo: "💻",
        location: "San Francisco",
        salary: "$120k - $180k",
        tags: ["Remote", "Full-time", "3+ years", "Flexible"],
        types: ["R", "I"]
    },
    {
        id: 2,
        title: "UX/UI Designer",
        company: "DesignHub",
        logo: "🎨",
        location: "New York",
        salary: "$80k - $110k",
        tags: ["Hybrid", "Full-time", "2+ years", "Creative"],
        types: ["A"]
    },
    {
        id: 3,
        title: "Data Scientist",
        company: "Analytics Pro",
        logo: "📊",
        location: "Remote",
        salary: "$100k - $140k",
        tags: ["Remote", "Full-time", "1-3 years", "Python"],
        types: ["I"]
    },
    {
        id: 4,
        title: "School Teacher",
        company: "Education First",
        logo: "📚",
        location: "Remote",
        salary: "$50k - $70k",
        tags: ["Hybrid", "Full-time", "Entry level", "Teaching"],
        types: ["S"]
    },
    {
        id: 5,
        title: "Mechanical Engineer",
        company: "BuildTech",
        logo: "⚙️",
        location: "Berlin",
        salary: "$85k - $115k",
        tags: ["Office", "Full-time", "3+ years", "CAD"],
        types: ["R"]
    },
    {
        id: 6,
        title: "Marketing Manager",
        company: "BrandWorks",
        logo: "📱",
        location: "London",
        salary: "$70k - $95k",
        tags: ["Office", "Full-time", "5+ years", "Leadership"],
        types: ["E", "S"]
    }
];

// ===========================
// Results Page Logic
// ===========================
function displayResults() {
    const resultsData = JSON.parse(localStorage.getItem('testResults'));
    
    if (!resultsData) {
        window.location.href = 'index.html';
        return;
    }
    
    // Find dominant personality type
    const dominantType = Object.keys(resultsData).reduce((a, b) => 
        resultsData[a] > resultsData[b] ? a : b
    );
    
    const personality = personalityTypes[dominantType];
    
    // Display personality type
    displayPersonalityType(personality);
    
    // Display strengths
    displayStrengths(personality.strengths);
    
    // Display personality breakdown
    displayBreakdown(resultsData);
    
    // Display recommended careers
    displayCareers(personality.careers);
    
    // Display matched jobs
    displayMatchedJobs(dominantType);
    
    // Display development areas
    displayDevelopment(personality.development);
}

function displayPersonalityType(personality) {
    document.getElementById('personality-icon').textContent = personality.icon;
    document.getElementById('personality-type').textContent = personality.name;
    document.getElementById('personality-code').textContent = `RIASEC Type: ${personality.code}`;
    document.getElementById('personality-description').textContent = personality.description;
}

function displayStrengths(strengths) {
    const grid = document.getElementById('strengths-grid');
    grid.innerHTML = '';
    
    strengths.forEach(strength => {
        const card = document.createElement('div');
        card.className = 'strength-card';
        card.innerHTML = `
            <h3>${strength.title}</h3>
            <p>${strength.description}</p>
        `;
        grid.appendChild(card);
    });
}

function displayBreakdown(scores) {
    const chart = document.getElementById('breakdown-chart');
    chart.innerHTML = '';
    
    const typeNames = {
        R: 'Realistic (Doer)',
        I: 'Investigative (Thinker)',
        A: 'Artistic (Creator)',
        S: 'Social (Helper)',
        E: 'Enterprising (Leader)',
        C: 'Conventional (Organizer)'
    };
    
    const maxScore = Math.max(...Object.values(scores));
    
    Object.keys(scores).forEach(type => {
        const percentage = (scores[type] / maxScore) * 100;
        
        const bar = document.createElement('div');
        bar.className = 'personality-bar';
        bar.innerHTML = `
            <div class="personality-bar-header">
                <span class="personality-bar-label">${typeNames[type]}</span>
                <span class="personality-bar-value">${scores[type]} points</span>
            </div>
            <div class="personality-bar-track">
                <div class="personality-bar-fill" style="width: 0%" data-width="${percentage}%"></div>
            </div>
        `;
        chart.appendChild(bar);
    });
    
    // Animate bars
    setTimeout(() => {
        document.querySelectorAll('.personality-bar-fill').forEach(fill => {
            fill.style.width = fill.getAttribute('data-width');
        });
    }, 100);
}

function displayCareers(careers) {
    const grid = document.getElementById('careers-grid');
    grid.innerHTML = '';
    
    careers.forEach(career => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.innerHTML = `
            <div class="career-icon">${career.icon}</div>
            <h3>${career.title}</h3>
            <p>${career.description}</p>
            <span class="match-score">${career.match} Match</span>
        `;
        grid.appendChild(card);
    });
}

function displayMatchedJobs(dominantType) {
    const grid = document.getElementById('matched-jobs-grid');
    grid.innerHTML = '';
    
    const matchedJobs = mockJobs.filter(job => 
        job.types.includes(dominantType)
    ).slice(0, 3);
    
    matchedJobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <div class="job-company-logo">${job.logo}</div>
            <h3 class="job-title">${job.title}</h3>
            <div class="job-company">${job.company}</div>
            <div class="job-location">📍 ${job.location}</div>
            <div class="job-salary">${job.salary}</div>
            <div class=\"job-tags\">
                ${job.tags.map(tag => `<span class=\"job-tag\">${tag}</span>`).join('')}
            </div>
            <button class=\"apply-button\" onclick=\"applyToJob(${job.id})\">Apply Now</button>
        `;
        grid.appendChild(card);
    });
}

function displayDevelopment(development) {
    const grid = document.getElementById('development-grid');
    grid.innerHTML = '';
    
    development.forEach(area => {
        const card = document.createElement('div');
        card.className = 'development-card';
        card.innerHTML = `
            <h3>${area.title}</h3>
            <p>${area.description}</p>
        `;
        grid.appendChild(card);
    });
}

function applyToJob(jobId) {
    alert(`Application submitted for job ID: ${jobId}! (This is a demo)`);
}

// ===========================
// Page Initialization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    displayResults();
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeInObserver.observe(section);
    });
});
