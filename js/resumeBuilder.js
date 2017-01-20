/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Nikhita Sirsikar",
    "role" : "System Engineer",
    "contacts" : {
        "mobile" : "+91809 527 1234",
        "email" : "nikhitasirsikar701@gmail.com",
        "github" : "nikhie-sirsikar",
        "location" : "Karwar, Karnataka India"
    },
    "welcomeMessage" : "Career built in the area of Information Technology, with good experience in Web Developer (Front End).",
    "skills" : [
    "Good leader", "soft skills", "Adaptability", "Collaboration", "Time management" 
    ],
    "biopic" : "images/me.jpg"
 };

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (var skill = 0;  skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
        
        $("#skills").append(formattedSkills);
    }

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $('#topContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
};

var education = {
    "schools" : [
    {
        "name" : "B. V. Bhoomraddi College ",
        "location" : "Hubli, UK, Karnataka India",
        "degree" : "Bachelor of engineering",
        "majors" : ["Biotechology"],
        "dates" : "2012-2016",
        "url" : "http://www.bvb.edu/"
    }],
    "onlineCourses" : [
    {
        "title" : "Front-end Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "2016-2017",
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    for (var school = 0;  school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        var formattedUrl = HTMLonlineURL.replace("%data%",education.schools[school].url);
        
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor, formattedUrl);
    }

    for (var course = 0;  course < education.onlineCourses.length; course++) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var formattedDatess = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var formattedUrls = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);

        $(".education-entry:last").append(formattedTitle + formattedSchool,formattedDatess,formattedUrls);
    }
    
};

var work = {
    "jobs" : [
    {
        "employer" : "Infosys Ltd",
        "title" : "Systems Engineer",
        "location" : "Banglore, Karnataka India",
        "dates" : "February 2017-Future",
        "description" :"Systems engineering uses a host of tools that include modeling and simulation, requirements analysis and scheduling to manage complexity. Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design and manage complex systems over their life cycles."
    },
    {
        "employer" : "Cipla Private Ltd",
        "title" : "Intern",
        "location" : "Verna, Goa India",
        "dates" : "February 2016 - May 2016",
        "description" :"The position of a student or trainee who works in an organization, sometimes without pay, in order to gain work experience or satisfy requirements for a qualification."
    }]
};

work.display = function() {
    for (var job = 0;  job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedLocation,formattedDescription);
    }
};

var projects = {
    "projects" : [
    {
        "title" : "Animal Trading Card",
        "dates" : "2017",
        "description" : "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. ",
        "images" : ["images/project1.png"] 
    },
    {
        "title" : "Build a Portfolio Site",
        "dates" : "2017",
        "description" : "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.  Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.",
        "images" : ["images/project2.png", "images/project3.png"] 
    }]
};

projects.display = function(){
    for (var item = 0;  item < projects.projects.length; item++){
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[item].description);

        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
        
        for (var image = 0;  image < projects.projects[item].images.length; image++) {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[item].images[image]);

            $(".project-entry:last").append(formattedImage);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
