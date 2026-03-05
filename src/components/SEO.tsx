import { useEffect } from "react";

const SEO = () => {
  useEffect(() => {
    document.title = "Yuvaraj - QA Engineer & Automation Tester Portfolio";
    
    const meta = [
      { name: "description", content: "Quality Analyst with 1.7 years expertise in Playwright, Selenium, and test automation. View my portfolio of testing projects." },
      { name: "keywords", content: "QA Engineer, Automation Testing, Playwright, Selenium, TypeScript, Test Automation" },
      { property: "og:title", content: "Yuvaraj - QA Engineer Portfolio" },
      { property: "og:description", content: "Quality Analyst specializing in automation testing with Playwright and Selenium" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ];

    meta.forEach(({ name, property, content }) => {
      const element = document.createElement("meta");
      if (name) element.name = name;
      if (property) element.setAttribute("property", property);
      element.content = content;
      document.head.appendChild(element);
    });
  }, []);

  return null;
};

export default SEO;
