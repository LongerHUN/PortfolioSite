"use strict";
//Content
const lastUpdate = "2023.01.26";

const dataBase = [
  {
    id: "01",
    name: "Portfolio Site",
    GitLink: "https://github.com/LongerHUN/PortfolioSite",
    LiveLink: "",
    imagesUrl: "images/PortfolioImg.png",
    imgTitle: "This Website",
    imgAlt: "This Website",

    headText: "This Website",
    pText: "It was interesting for me because this is my first live Web Site",
    devicons: ["html5", "css3", "javascript", "bootstrap"],
  },
  {
    id: "02",
    name: "Angular",
    GitLink: "https://github.com/LongerHUN/AngularPortfolioWebsite",
    LiveLink: "",
    imagesUrl: "images/angularImg.jpg",
    imgTitle: "GitHub Code",
    imgAlt: "Angular logo",

    headText: "Portfolio website using angular framework",
    pText: "full build in Progress...",
    devicons: ["angularjs", "html5", "css3", "bootstrap", "typescript"],
  },
  {
    id: "03",
    name: "FrontendMentorNewsHomePage",
    GitLink: "https://github.com/LongerHUN/FrontendMentorNHP",
    LiveLink: "myProjects/FrontEndMentorNHP/index.html",
    imagesUrl: "myProjects/FrontEndMentorNHP/design/desktop-design.jpg",
    imgTitle: "GitHub Code",
    imgAlt: "frontEndMentorNHPimg",
    headText: "News homepage",
    pText: "Challenge from the Frontend Mentor website",
    devicons: ["html5", "css3", "javascript"],
  },
  {
    id: "04",
    name: "FrontendMentorInteractivePricingComponent",
    GitLink: "https://github.com/LongerHUN/FrontEndMentorInterPriceComp",
    LiveLink: "myProjects/FrontEndMentorInterPriceComp/index.html",
    imagesUrl:
      "myProjects/FrontEndMentorInterPriceComp/images/FrontEndMentorIPCPic.jpg",
    imgTitle: "GitHub Code",
    imgAlt: "frontEndMentorIPCImg",
    headText: "News homepage",
    pText: "Challenge from the Frontend Mentor website",
    devicons: ["html5", "css3", "javascript"],
  },
];

const container = document.getElementById("projects");

dataBase.forEach(function (dataBase) {
  const row = document.createElement("div");
  row.className = "row pt-5";

  const colLeft = document.createElement("div");
  colLeft.className =
    "col-sm-12 col-lg-6 text-center d-flex align-items-center justify-content-center";

  const colRight = document.createElement("div");
  colRight.className =
    "col-sm-12 col-lg-6 text-center d-flex align-items-center justify-content-center";

  const linkWhitImg = document.createElement("a");
  linkWhitImg.target = "_blank";
  if (dataBase.LiveLink == "") {
    linkWhitImg.href = dataBase.GitLink;
  } else {
    linkWhitImg.href = dataBase.LiveLink;
  }

  const image = document.createElement("img");
  image.src = dataBase.imagesUrl;
  image.title = dataBase.imgTitle;
  image.alt = dataBase.imgAlt;
  image.className = "projectsImg rounded responsive";

  const onlydiv = document.createElement("div");

  const texth3 = document.createElement("h3");
  texth3.textContent = dataBase.headText;

  const textP = document.createElement("p");
  textP.textContent = dataBase.pText;

  const devicon2 = document.createElement("p");
  dataBase.devicons.forEach(function (devicon) {
    const devCo = document.createElement("span");
    devCo.className = `prodevicons devicon-${devicon}-plain`;
    devCo.title = `${devicon}`;
    devicon2.appendChild(devCo);
  });

  const GitLink = document.createElement("p");
  GitLink.className = "prodevicons devicon-github-plain";

  const GitLinkText = document.createElement("a");
  GitLinkText.href = dataBase.GitLink;
  GitLinkText.target = "_blank";
  GitLinkText.textContent = "GitHub Code";
  GitLinkText.className = "projectLink";

  const br = document.createElement("br");

  const LiveSiteText = document.createElement("a");
  LiveSiteText.href = dataBase.LiveLink;
  LiveSiteText.target = "_blank";
  LiveSiteText.textContent = " Live Site";
  LiveSiteText.className = "projectLink";
  //Left

  if (dataBase.id % 2 == 0) {
    container.appendChild(row);

    row.appendChild(colLeft);
    colLeft.appendChild(onlydiv);
    onlydiv.appendChild(texth3);
    onlydiv.appendChild(textP);
    onlydiv.appendChild(devicon2);
    onlydiv.appendChild(GitLinkText);
    if (dataBase.LiveLink != 0) {
      onlydiv.appendChild(br);
      onlydiv.appendChild(LiveSiteText);
    }

    //Right
    row.appendChild(colRight);
    colRight.appendChild(linkWhitImg);
    linkWhitImg.appendChild(image);
  } else {
    //Right
    row.appendChild(colRight);
    colRight.appendChild(linkWhitImg);
    linkWhitImg.appendChild(image);

    container.appendChild(row);

    row.appendChild(colLeft);
    colLeft.appendChild(onlydiv);
    onlydiv.appendChild(texth3);
    onlydiv.appendChild(textP);
    onlydiv.appendChild(devicon2);
    onlydiv.appendChild(GitLinkText);
    if (dataBase.LiveLink != 0) {
      onlydiv.appendChild(br);
      onlydiv.appendChild(LiveSiteText);
    }
  }
});
function update() {
  document.getElementById("update").innerHTML = lastUpdate;
}
update();
