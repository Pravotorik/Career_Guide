const testQuestions = [
    {
        question: "What type of work environment appeals to you most?",
        options: [
            { text: "Working with tools, machines, or technology", type: "R" },
            { text: "Researching, analyzing data, solving complex problems", type: "I" },
            { text: "Creating art, music, writing, or design", type: "A" },
            { text: "Helping, teaching, or caring for others", type: "S" }
        ]
    },
    {
        question: "Which activity sounds most interesting to you?",
        options: [
            { text: "Building or repairing things", type: "R" },
            { text: "Conducting experiments or research", type: "I" },
            { text: "Designing visual concepts or performances", type: "A" },
            { text: "Organizing community events", type: "S" }
        ]
    },
    {
        question: "What are your natural strengths?",
        options: [
            { text: "Mechanical and technical skills", type: "R" },
            { text: "Critical thinking and problem-solving", type: "I" },
            { text: "Creativity and imagination", type: "A" },
            { text: "Communication and empathy", type: "S" }
        ]
    },
    {
        question: "How do you prefer to spend your time?",
        options: [
            { text: "Working with my hands on practical projects", type: "R" },
            { text: "Reading, learning, exploring new ideas", type: "I" },
            { text: "Expressing myself through creative outlets", type: "A" },
            { text: "Collaborating and connecting with people", type: "S" }
        ]
    },
    {
        question: "What motivates you in your career?",
        options: [
            { text: "Creating tangible results and solutions", type: "R" },
            { text: "Discovering knowledge and understanding", type: "I" },
            { text: "Freedom to innovate and express ideas", type: "A" },
            { text: "Making a positive impact on lives", type: "S" }
        ]
    },
    {
        question: "Which best describes your work style?",
        options: [
            { text: "Hands-on and practical", type: "R" },
            { text: "Analytical and detail-oriented", type: "I" },
            { text: "Intuitive and spontaneous", type: "A" },
            { text: "Collaborative and people-focused", type: "S" }
        ]
    },
    {
        question: "What type of projects excite you?",
        options: [
            { text: "Engineering or construction projects", type: "R" },
            { text: "Research or analytical projects", type: "I" },
            { text: "Artistic or design projects", type: "A" },
            { text: "Social impact or educational projects", type: "S" }
        ]
    },
    {
        question: "Which role sounds most appealing?",
        options: [
            { text: "Technical specialist or engineer", type: "R" },
            { text: "Scientist or analyst", type: "I" },
            { text: "Designer or artist", type: "A" },
            { text: "Teacher or counselor", type: "S" }
        ]
    },
    {
        question: "How do you approach challenges?",
        options: [
            { text: "Find practical solutions through trial", type: "R" },
            { text: "Research and analyze before acting", type: "I" },
            { text: "Think outside the box creatively", type: "A" },
            { text: "Seek input and collaborate with others", type: "S" }
        ]
    },
    {
        question: "What skills would you like to develop?",
        options: [
            { text: "Technical and mechanical abilities", type: "R" },
            { text: "Research and analytical skills", type: "I" },
            { text: "Artistic and creative talents", type: "A" },
            { text: "Interpersonal and communication skills", type: "S" }
        ]
    },
    {
        question: "Which work setting appeals to you?",
        options: [
            { text: "Workshop, lab, or outdoors", type: "R" },
            { text: "Research facility or office", type: "I" },
            { text: "Studio or creative space", type: "A" },
            { text: "School, hospital, or community center", type: "S" }
        ]
    },
    {
        question: "What brings you satisfaction?",
        options: [
            { text: "Fixing problems and making things work", type: "R" },
            { text: "Understanding complex concepts", type: "I" },
            { text: "Creating something beautiful or unique", type: "A" },
            { text: "Helping others succeed and grow", type: "S" }
        ]
    },
    {
        question: "How do you prefer to learn?",
        options: [
            { text: "Learning by doing and practicing", type: "R" },
            { text: "Reading, researching, and analyzing", type: "I" },
            { text: "Experimenting and exploring freely", type: "A" },
            { text: "Discussing and sharing with others", type: "S" }
        ]
    },
    {
        question: "Which industry interests you most?",
        options: [
            { text: "Manufacturing, construction, engineering", type: "R" },
            { text: "Science, technology, research", type: "I" },
            { text: "Arts, media, entertainment", type: "A" },
            { text: "Education, healthcare, social services", type: "S" }
        ]
    },
    {
        question: "What's your ideal work outcome?",
        options: [
            { text: "A functional product or system", type: "R" },
            { text: "New insights or discoveries", type: "I" },
            { text: "An inspiring creative work", type: "A" },
            { text: "Positive change in people's lives", type: "S" }
        ]
    }
];

// Test state
let currentQuestion = 0;
let answers = [];

// ===========================
// Mock Job Data
// ===========================
const mockJobs = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "TechCorp Inc.",
        logo: '<img src="https://img.icons8.com/?size=32&id=20389&format=png&color=000000" alt="Software" class="job-icon">',
        location: "San Francisco",
        salary: "$120k - $180k",
        category: "IT",
        experience: "Senior",
        tags: ["Remote", "Full-time", "3+ years", "Flexible"],
        type: "I"
    },
    {
        id: 2,
        title: "UX/UI Designer",
        company: "DesignHub",
        logo: '<img src="https://img.icons8.com/?size=32&id=q08Se2BP6PXr&format=png&color=000000" alt="Design" class="job-icon">',
        location: "New York",
        salary: "$80k - $110k",
        category: "Design",
        experience: "Mid",
        tags: ["Hybrid", "Full-time", "2+ years", "Creative"],
        type: "A"
    },
    {
        id: 3,
        title: "Data Scientist",
        company: "Analytics Pro",
        logo: '<img src="https://img.icons8.com/?size=32&id=tiXHrs4AZWUU&format=png&color=000000" alt="Data" class="job-icon">',
        location: "Remote",
        salary: "$100k - $140k",
        category: "IT",
        experience: "Mid",
        tags: ["Remote", "Full-time", "1-3 years", "Python"],
        type: "I"
    },
    {
        id: 4,
        title: "Marketing Manager",
        company: "BrandWorks",
        logo: '<img src="https://img.icons8.com/?size=32&id=hhkaXuC3n9tX&format=png&color=000000" alt="Marketing" class="job-icon">',
        location: "London",
        salary: "$70k - $95k",
        category: "Marketing",
        experience: "Senior",
        tags: ["Office", "Full-time", "5+ years", "Leadership"],
        type: "E"
    },
    {
        id: 5,
        title: "Mechanical Engineer",
        company: "BuildTech",
        logo: '<img src="https://img.icons8.com/?size=32&id=30379&format=png&color=000000" alt="Engineering" class="job-icon">',
        location: "Berlin",
        salary: "$85k - $115k",
        category: "IT",
        experience: "Mid",
        tags: ["Office", "Full-time", "3+ years", "CAD", "Team"],
        type: "R"
    },
    {
        id: 6,
        title: "School Teacher",
        company: "Education First",
        logo: '<img src="https://img.icons8.com/?size=32&id=42366&format=png&color=000000" alt="Teaching" class="job-icon">',
        location: "Remote",
        salary: "$50k - $70k",
        category: "Healthcare",
        experience: "Entry",
        tags: ["Hybrid", "Full-time", "Entry level", "Teaching"],
        type: "S"
    },
    {
        id: 7,
        title: "Product Designer",
        company: "Creative Labs",
        logo: '<img src="https://img.icons8.com/?size=32&id=YShdsBhs1Ie1&format=png&color=000000" alt="Product Design" class="job-icon">',
        location: "San Francisco",
        salary: "$90k - $125k",
        category: "Design",
        experience: "Mid",
        tags: ["Remote", "Full-time", "2+ years", "Figma"],
        type: "A"
    },
    {
        id: 8,
        title: "Business Analyst",
        company: "ConsultPro",
        logo: '<img src="https://img.icons8.com/?size=32&id=qJZbjf2yYHUG&format=png&color=000000" alt="Business" class="job-icon">',
        location: "New York",
        salary: "$75k - $105k",
        category: "Business",
        experience: "Mid",
        tags: ["Office", "Full-time", "2-4 years", "Excel", "Team"],
        type: "C"
    },
    {
        id: 9,
        title: "Frontend Developer",
        company: "WebWorks",
        logo: '<img src="https://img.icons8.com/?size=32&id=53300&format=png&color=000000" alt="Web Development" class="job-icon">',
        location: "Remote",
        salary: "$95k - $130k",
        category: "IT",
        experience: "Mid",
        tags: ["Remote", "Full-time", "2+ years", "React"],
        type: "I"
    },
    {
        id: 10,
        title: "Social Worker",
        company: "CareConnect",
        logo: '<img src="https://img.icons8.com/?size=32&id=96474&format=png&color=000000" alt="Social Work" class="job-icon">',
        location: "London",
        salary: "$45k - $65k",
        category: "Healthcare",
        experience: "Entry",
        tags: ["Office", "Full-time", "Entry level", "Empathy"],
        type: "S"
    },
    {
        id: 11,
        title: "Graphic Designer",
        company: "Artistry Co.",
        logo: '<img src="https://img.icons8.com/?size=32&id=0uwPCR49E1Fa&format=png&color=000000" alt="Graphic Design" class="job-icon">',
        location: "Berlin",
        salary: "$60k - $85k",
        category: "Design",
        experience: "Entry",
        tags: ["Hybrid", "Full-time", "1+ year", "Adobe", "Figma"],
        type: "A"
    },
    {
        id: 12,
        title: "Electrical Engineer",
        company: "PowerTech",
        logo: '<img src="https://img.icons8.com/?size=32&id=48852&format=png&color=000000" alt="Electrical" class="job-icon">',
        location: "San Francisco",
        salary: "$90k - $120k",
        category: "IT",
        experience: "Senior",
        tags: ["Office", "Full-time", "5+ years", "Circuit"],
        type: "R"
    }
];

let displayedJobs = 6;

// ===========================
// Smooth Scrolling
// ===========================
function scrollToTest() {
    document.getElementById('test').scrollIntoView({ behavior: 'smooth' });
}

// ===========================
// Test Logic
// ===========================
function initTest() {
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const question = testQuestions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option.text;
        button.onclick = () => selectOption(index);
        
        if (answers[currentQuestion] === index) {
            button.classList.add('selected');
        }
        
        optionsContainer.appendChild(button);
    });
    
    updateNavigationButtons();
}

function selectOption(optionIndex) {
    answers[currentQuestion] = optionIndex;
    
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach((btn, idx) => {
        btn.classList.toggle('selected', idx === optionIndex);
    });
    
    updateNavigationButtons();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / testQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `Question ${currentQuestion + 1} of ${testQuestions.length}`;
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    prevButton.disabled = currentQuestion === 0;
    nextButton.disabled = answers[currentQuestion] === undefined;
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        updateProgress();
    }
}

function nextQuestion() {
    if (currentQuestion < testQuestions.length - 1) {
        currentQuestion++;
        displayQuestion();
        updateProgress();
    } else {
        completeTest();
    }
}

function completeTest() {
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('test-complete').style.display = 'block';
}

function viewResults() {
    // Calculate personality type
    const scores = calculateScores();
    localStorage.setItem('testResults', JSON.stringify(scores));
    window.location.href = 'test-results.html';
}

function calculateScores() {
    const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    
    answers.forEach((answerIndex, questionIndex) => {
        const question = testQuestions[questionIndex];
        const selectedOption = question.options[answerIndex];
        scores[selectedOption.type]++;
    });
    
    return scores;
}

// ===========================
// Statistics Counter Animation
// ===========================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// ===========================
// Jobs Display & Filtering
// ===========================
function displayJobs(jobsToDisplay = null) {
    const jobsGrid = document.getElementById('jobs-grid');
    const jobs = jobsToDisplay || mockJobs.slice(0, displayedJobs);
    
    jobsGrid.innerHTML = '';
    
    jobs.forEach(job => {
        const jobCard = createJobCard(job);
        jobsGrid.appendChild(jobCard);
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    
    card.innerHTML = `
        <div class="job-company-logo">${job.logo}</div>
        <h3 class="job-title">${job.title}</h3>
        <div class="job-company">${job.company}</div>
        <div class="job-location"><img src="https://img.icons8.com/?size=100&id=85149&format=png&color=a09496" alt="Location" class="location-icon"> ${job.location}</div>
        <div class="job-salary">${job.salary}</div>
        <div class="job-tags">
            ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
        </div>
        <button class="apply-button" onclick="applyToJob(${job.id})">Apply Now</button>
    `;
    
    return card;
}

function filterJobs() {
    const category = document.getElementById('category-filter').value;
    const location = document.getElementById('location-filter').value;
    const experience = document.getElementById('experience-filter').value;
    
    let filtered = mockJobs;
    
    if (category !== 'all') {
        filtered = filtered.filter(job => job.category === category);
    }
    
    if (location !== 'all') {
        filtered = filtered.filter(job => job.location === location);
    }
    
    if (experience !== 'all') {
        filtered = filtered.filter(job => job.experience === experience);
    }
    
    displayJobs(filtered);
}

function loadMoreJobs() {
    displayedJobs += 6;
    displayJobs();
    
    if (displayedJobs >= mockJobs.length) {
        document.querySelector('.load-more-button').style.display = 'none';
    }
}

function applyToJob(jobId) {
    alert(`Application submitted for job ID: ${jobId}! (This is a demo)`);
}

// ===========================
// Page Initialization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize test
    initTest();
    
    // Initialize jobs display
    displayJobs();
    
    // Setup stats observer
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
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