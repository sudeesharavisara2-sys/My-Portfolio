<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$portfolio = [
    "name" => "Sudeesha Ravisara",
    "title" => "Second-year Undergraduate Software Engineering",
    "location" => "Nittambuwa, Sri Lanka",
    "email" => "sudeesharavisara2@gmail.com",
    "phone" => "0729502816",
    "github" => "https://github.com/sudeesharavisara2-sys",
    "linkedin" => "https://linkedin.com/in/sudeesha-ravisara-073741274",
    "about" => "Second-year Software Engineering undergraduate at NSBM Green University seeking a Internship. Experienced in developing responsive web applications using Java, Spring Boot, and React.",
    "stats" => [
        ["number" => "2nd", "label" => "Year undergraduate"],
        ["number" => "4+", "label" => "Full-stack projects"],
        ["number" => "1+", "label" => "Year work experience"]
    ],
    "skills" => [
        ["category" => "Languages", "items" => [["name" => "Java", "level" => 70], ["name" => "JavaScript", "level" => 70], ["name" => "PHP", "level" => 75]]],
        ["category" => "Frontend & Backend", "items" => [["name" => "React", "level" => 75], ["name" => "Spring Boot", "level" => 70]]]
    ],
    "projects" => [
        ["title" => "NextStep", "description" => "University Management platform.", "tags" => ["React", "Spring Boot"]],
        ["title" => "SpareHubLK", "description" => "Vehicle Parts E-Commerce.", "tags" => ["PHP", "MySQL"]]
    ]
];

echo json_encode($portfolio);
?>