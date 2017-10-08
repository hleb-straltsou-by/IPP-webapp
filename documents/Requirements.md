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

- Yandex (13+)
- Mozilla Firefox (20+)
- Google Chrome (15+)

### 3.1 Functional Requirements
#### 3.1.1 Routing and navigation through web app content

Routing and navigation through webapp must be implemented by clicking on the correspond section from the navigation bars. After clicking content of correspond section appears on the web page. Must be implemented the following navigation bars:

1) Detail navigation bar on the each web page with sections:

- Main
- About the Institute
- Direction of researches
- Framework of organization
- Young Scientists League
- Phytopathological society
- Publications
- Conferences
- Contacts
- Site map
- Product reference book

2) Short navigation bar on the each web page with sections:

- Main
- About
- Researches
- Organization
- Contacts

Views of each section is represented in mockups.
All necessary content for the sections is provided by the institute (text, images, icons, documents).

#### 3.1.2 Footbar with service information
Each web page must contain footbar with service information, which is provided by the institute.

#### 3.1.3 Searching information about publications and the institute staff
Section Publications must contatin search input with buttons find, clear and combo box for structute with options: 1) Management, 2) Laboratory of Herbology, 3)Laboratory of phytopathology, 4) Laboratory of entomology, 5) Laboratory for protection of fodder and industrial crops, 6) Laboratory for the Protection of Vegetable Crops and Potatoes,
7) Laboratory of protection of fruit crops, 8) Laboratory of microbiological method of crop protection against pests and diseases, 9) Laboratory of Pesticide Dynamics, 10) Department of Information, 11) Marketing and Patent Studies.

#### 3.1.4 Downloading documents
In section conferences and publications must be a possibility to download documents by clicking on the correspond download button.

#### 3.1.5 Table view of products from reference book of the institute 
In section Products must be table view of products from reference book of institute with columns: 1) Name, 2) Consumption rate, 3) Culture, 4) Desease, 5) Processing method, 6) Days till last harvest, 7) Multiplicity. Table view must support the following product categories: herbicides, insectisides, fungisides, herbicides-pav, growth-regulators. Before table view must be located form for searching products by name, culture, desease and active substance, with search button. After clicking search button table view must contain only correspond products if there are no corresponding products table view must be empty. Also Table view must contain scroll bar to show all products.

#### 3.1.6 Storing information about products from reference book of the institute
All information about products from reference book of institute must be stored in database.

### 3.2 Non-Functional Requirements

#### 3.2.1 SOFTWARE QUALITY ATTRIBUTES
- Performance - people don't want to wait for many time while web page is loading. To avoid wasting precious time user must wait maximum 1 second to load any page on web app. Measures in time needed to load web page.

- Reability - the web app must be deployed 24 hours per day without troubles to access it. Important because users must know that they can use resource of web app any time they need it. Measures count of situations when user can't load web page (this count must be lower that 5 situations per day).

- Internalization of content in languages: Russian and English - because often website is visited by users from other countries. Measures in part of content which has both russian and english languages.

- Responsive user interface. The content of web app must be readable in mobile and desktop devices - nowadays more and more users surf the internet using only mobile devices. Measures in count of unreadeble content in mobile devices (this count must be as low as possible)

- The web app must support simultaneously at least 500 users at a time - because there can be issues with responding of web content when there are a lot of users on website. Measures in maximum count of users that can use the web app simultaneously.

#### 3.2.2 EXTERNAL INTERFACES

- The web application's user interface must support the minimum screen resolution of 1024 * 768 - to see valid content of web app.

#### 3.2.3 CONSTRAINTS
- Backend of system must be implemented using Java 8 language and Spring Framework of version upper than 4.0.0
- Frontend of the system must be implemented using CSS framework Twitter Bootstrap of version upper than 3.0.0 and Angular framework.
- Database must be implemented using RDBMS MySQL of version upper than 5.5
