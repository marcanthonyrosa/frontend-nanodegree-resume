/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio, education, work, projects = {};

 bio = {
   "name": "Marc Anthony Rosa",
   "role": "Product Manager",
   "contacts": {
     "mobile": "(239) 287-6019",
     "email": "marc.anthony.rosa@gmail.com",
     "github": "https://github.com/marcanthonyrosa",
     "twitter": "https://twitter.com/marc_rosa",
     "location": "Houston, TX",
     "personalSite": "https://marcanthonyrosa.github.io/"
   },
   "welcomeMessage": "Hello! I'm so glad you're here!",
   "skills": ["Frontend Development", "wireframing", "prototyping", "Product Management"],
   "biopic": "https://marcanthonyrosa.github.io/images/avatar2.jpg",
 };

 education = {
   "schools": [
     {
       "name":"University of Notre Dame",
       "location": "Notre Dame, IN",
       "degree": "Undergraduate - Mendoza College of Business",
       "majors": ["Finance", "Management Entrepreneurship"],
       "dates": "2008-2012"
     }
   ],
   "onlineCourses": [
     {
       "title": "Frontend Nanodegree",
       "school": "Udacity",
       "dates": "2016",
       "url": "https://profiles.udacity.com/u/marcrosa"
     },
     {
       "title": "The Complete Web Developer Course",
       "school": "Udemy",
       "dates": "2016",
       "url": "https://www.udemy.com/complete-web-developer-course"
     }
   ],
 };

work = {
  "jobs": [
    {
      "employer": "Buffer",
      "title": "Product Owner",
      "location": "Houston, TX",
      "dates": "2015-2016",
      "description": "Buffer is a social media SaaS product used by 3 million users",
      "website": "https://www.buffer.com"
    },
    {
      "employer": "Dose Media (formerly Spartz Inc)",
      "title": "Product Manager",
      "location": "Chicago, IL",
      "dates": "2013-2016",
      "description": "Dose Media's mission is to entertain and inspire the media generation",
      "website": "https://www.dose.com"
    },
    {
      "employer": "Red Ventures",
      "title": "Paid Search Analyst",
      "location": "Charlotte, NC",
      "dates": "2013-2013",
      "description": "Red Ventures manages PPC and online lead generation for dozens of premier businesses"
    }
  ],
};

projects = {
  "projects": [
    {
      "title": "Personal Online Resume",
      "dates": "2016",
      "description": "This is my personal online resume, taking advantage of HTML, CSS, and JS (jQuery)",
      "images": ["http://placekitten.com/300/200","http://lorempixel.com/300/200/"]
    },
    {
      "title": "Stanton Ventures",
      "dates": "2016",
      "description": "To help learn front-end development outside of a course, I helped my friend Alison build a simple static landing page for her venture!",
      "images": ["http://lorempixel.com/300/200/","http://placekitten.com/300/200"]
    }
  ],
};



bio.display = function() {
  var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
  var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedSite = HTMLcontactGeneric.replace("%contact%", "Website");
  var formattedSite = formattedSite.replace("%data%", bio.contacts.personalSite);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  var generateSkills = function() {
    var finalOutput = "";
    for (var i =0; i< bio.skills.length; i++) {
      var skills = HTMLskills;
      finalOutput = finalOutput + skills.replace("%data%", bio.skills[i]);
    }
    return finalOutput;
  };

  $("#header").prepend(formattedHeader,formattedHeaderRole )
  $("#topContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedSite, formattedTwitter, formattedLocation);
  $("#header").append(formattedBioPic, formattedWelcome, HTMLskillsStart);
  $("#skills-h3").append(generateSkills());
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedSite, formattedTwitter, formattedLocation);
};

bio.display();

work.display = function () {
  var generateWork = function () {
    var finalOutput = "";
    for (var i=0; i < projects.projects.length; i++) {
      var workOutput = "";
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      if (work.jobs[i].website) {
        formattedWorkEmployer = formattedWorkEmployer.replace("#", work.jobs[i].website);
      }
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      workOutput = formattedWorkEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
      finalOutput = finalOutput + workOutput;
    }
    return finalOutput;
  };

  $("#workExperience").append(HTMLworkStart);
  $("#workExperience").append(generateWork());
};

work.display();



projects.display = function () {
  var generateProjects = function () {
    var finalOutput = "";
    for (var i =0; i<projects.projects.length; i++) {
      var projectOutput = "";
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      var formattedImage = function () {
        var imageOutput = "";
        for (var j =0; j<projects.projects[i].images.length; j++) {
          imageOutput = imageOutput + HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
        }
        return imageOutput;
      };
      projectOutput = formattedProjectTitle + formattedProjectDate + formattedProjectDescription + formattedImage();
      finalOutput = finalOutput + projectOutput;
    }
    return finalOutput;
  };

  $("#projects").append(HTMLprojectStart);
  $("#projects").append(generateProjects());
};

projects.display();

education.display = function () {
  var generateEducation = function () {
    var finalOutput = "";
    for (var i =0; i < education.schools.length; i++) {
      var schoolsOutput = "";
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolMajors = function () {
        var majorsOutput = "";
        for (var j = 0; j < education.schools[i].majors.length; j++) {
          majorsOutput = majorsOutput + HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
        }
        return majorsOutput;
      };
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      schoolsOutput = formattedSchoolName + formattedSchoolDegree + formattedDates + formattedSchoolLocation + formattedSchoolMajors();
      finalOutput = finalOutput + schoolsOutput;
    }
  return finalOutput;
  };

  var generateOnlineClasses = function () {
    var finalOutput = "";
    for (var i = 0; i <education.onlineCourses.length; i++) {
      var onlineClassesOutput ="";
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      onlineClassesOutput = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
      finalOutput = finalOutput + onlineClassesOutput;
    }
    return finalOutput;
  };

  $("#education").append(HTMLschoolStart);
  $("#education").append(generateEducation());
  $("#education").append(HTMLonlineClasses);
  $("#education").append(generateOnlineClasses());

};

education.display();

$("#mapDiv").append(googleMap);
