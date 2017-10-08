# Requirements Document 
## 1 Introduction
The designed software is web app represent Republic Scientific Subsidiary Unitary Enterprise "INSTITUTE OF PLANTS PROTECTION". Need to mention that such web app has already existed [INSTITUTE OF PLANTS PROTECTION](http://izr.by/).  The task is to enhance its user interface and backend with modern technologies in order to increase the prestige of the institute in a scientific society and attract more users.
## 2 User Requirements
### 2.1 Software Interfaces
#### Used technologies
- HTML, CSS (Twitter bootstrap), Typescipt and Angular on the front-end
- Java and Spring Framework on the backend
- MySQL RDBMS to store information about product reference book of the institute.

### 2.2 User Interfaces

User interface will provide facilities on the web pages to navigate user through various information about institute, its departments, organization structure, provided matetials, scientific researches, conferences, education, international programs and communication, news and contacts. For more details see mockups.
### 2.3 User Characteristics
- Scientific staff, scientiests and researches from other universities and institutes - high educated people, professionals in sphere of ecology and plant protection.
- Default staff of institute (engineers, laborants, administration, managment)
- People who search for information about products from reference book (agronomists) 
### 2.4 Assumptions and Dependencies
- Issues with rendering of web content in old versions of browsers.
- Easy extensibility and changeability of content
## 3 System Requirements
To use the web app, you need desktop, laptop or mobile device with installed one of the recommended browsers:

- Yandex
- Mozilla Firefox
- Google Chrome

### 3.1 Functional Requirements
3.1.1 Navigation bar on the left side and bottom of each web page with sections (Its content must be on the center of page):

- Main (one picture on the top of the section and text after).
- About the Institute (one picture on the center of the section and text before and after it).
- Direction of researches (only text).
- Framework of organization (sublist of departments of organization with links to detail description).
- Young Scientists League (text on the top of the section and gallery with photos after)
- Phytopathological society (one picture on the center of the section and text before and after it).
- Publications (search form with options: clear, find, structure)
- Conferences (text and links for the documents)
- Contacts (only text)
- Site map (list of links to the sections of the web app)
- Product reference book (contains table with product categories: herbicides, insectisides, fungisides, herbicides-pav, growth-regulators)

All necessary content for the sections is provided by the institute (text, images, icons, documents).

3.1.2 On the center side of each page must be located content according section.

3.1.3 On the top of each page must be located picture with background and logo provided by institute.

3.1.4 Footbar with service information (provided by institute).

3.1.5 Internalization of content in languages: Russian and English.

3.1.6 Implemention of database using MySQL RDBMS storing information about products from reference book of institute. Support product categories are: herbicides, insectisides, fungisides, herbicides-pav, growth-regulators

### 3.2 Non-Functional Requirements
1) Access to the system should be through the HTTPS protocol
2) The web app must support simultaneously at least 1000 users at a time
3) The content must be readable in mobile and desktop devices
#### 3.2.1 SOFTWARE QUALITY ATTRIBUTES
- Performance - people don't wanna wait for many time while web page is loading. To avoid wasting precious time user must wait maximum 1 second to load any page on web app. Measures in time needed to load web page.

- Reability - the web app must be deployed 24 hours per day without troubles to access it. It is important because users must know that they can use resource of web app any time they need it. Measures in count of situations when user can't load web page (this count must be lower that 5 situations per day)
