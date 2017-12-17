# TEST PLAN OUTLINE (IEEE 829 FORMAT)

1. Test Plan Identifier
2. References
3. Introduction
4. Test items
5. Software Risk Issues
6. Features to be tested
7. Features not to be tested
8. Approach
9. Item Pass/Fail Criteria
10. Suspension Criteria and Resumption Requirements
11. Test Deliverables
12. Remaining Test Tasks
13. Enviromental Needs
14. Staffing and Training Needs
15. Responsibilities
16. Schedule
17. Planning Risks and Contingencies
18. Approvals
19. Glossary

## 1. Test plan identifier
Current test plan identifier (date and time format - ddmmyyyyhhmm): 101220172228

## 2. References
- SRC.md (https://github.com/Strelts0v/IPP-webapp/blob/master/documents/SRC.md)
- Use cases.Spec.md (https://github.com/Strelts0v/IPP-webapp/blob/master/Design%20and%20modeling/Use%20cases.%20Spec.md)
- Functional Requirements (https://github.com/Strelts0v/IPP-webapp/blob/master/Design%20and%20modeling/functional%20requirements.png)
- Components.png (https://github.com/Strelts0v/IPP-webapp/blob/master/Design%20and%20modeling/Components.png)
- Deployment.png (https://github.com/Strelts0v/IPP-webapp/blob/master/Design%20and%20modeling/Deployment.png)
- Glossary.md (https://github.com/Strelts0v/IPP-webapp/blob/master/Design%20and%20modeling/Glossary.md)
- Entities and relations.png (https://github.com/Strelts0v/IPP-webapp/blob/master/Design%20and%20modeling/entities%20and%20relationships.png)

## 3. Introduction


## 4. Test items
- client side app
- server side app

## 5. Software Risk Issues
- Modifications to components with a past history of failure
- Poorly documented modules or change requests
- Ability to use and understand a new package/tool, etc
- Misundestanding of the original requirements

## 6. Features to be tested
1. Browsing content of web app
2. Switching language of the web app content
3. Server API for publications

## 7. Features not to be tested
1. Downloading documents about conferences and publications
2. Browsing and searching information about products
3. Searching for information about publications

## 8. Approach (Strategy)
- Used tools: Protractor, JUnit, Spring Test, Jacoco, Silenium
- Functional tests for client side app with checking the following features:
 1. Browsing content of web app
 2. Switching language of the web app content
- Integration and unit tests for server app with cheking API for publications. Testing controllers and services.

## 9. Item pass/fail criteria
- At the Unit test level all test cases must be completed
- Functional and integration tests must be completed for specified version of app.
- Code coverage must be at least 30%

## 10. Suspension criteria and resumption requirements
- Accetable level of defects that will allow the testing specified by a possibility to launch app and use it's main features.
- Stop page for a test - no result after 8 hours of work with attempts to test some component or feature.

## 11. Test Deliverables

Test results must be desribed by the following plan:

1. Id (date and time format - ddmmyyyyhhmm): 101220172228
2. Name / target
3. Scenario
4. Expected result
5. Actual result
6. Mark

### Test cases:

#### 1 Governing body

1. 141220171257.
2. After clicking on the section of "Framework of organization. Governing body" result html page should contains 6 persons.
3. User clicks on the 'Governing body' link in the Framework of organization section and sees 6 six persons of the reulst html page.
4. Expected 6 persons on the result html page.
5. Returned 6 pesons on the result html page.
6. Test is passed.

#### 2 Direction of researches

1. 141220171305.
2. After clicking on the section of "Direction of researches" result html page should contains 8 directions in block "Area of activities".
3. User clicks link to the section "Direction of researches" and sees direction of researches list.
4. Expected 8 direction of researches on the result html page.
5. Returned 8 direction of researches on the result html page.
6. Test is passed

#### 3 Social network groups

1. 141220171330.
2. After loading main page should contains 4 links to social network groups of university.
3. User load main page and sees 4 links to the social network groups.
4. Expected 4 links: http://www.facebook.com/izr.by/, http://mshp.minsk.by/, http://nasb.gov.by/rus/index.php, http://izis.by/
5. Actual links are correspond to expected.
6. Test is passed.

#### 4 Buttons for changing language

1. 141220171350.
2. After loading main page should contains 2 buttons for changing page language: Ru, Eng.
3. User load main page and sees 2 buttons for changing page language.
4. Expected 2 buttons in the result html page.
5. Actual buttons are correspond to expected.
6. Test is passed.

#### 5 Pictures in 'Young Scientists League' section

1. 151220171847
2. After clicking on the section of "Young Scientists League" result html page should contains 6 pictures.
3. User clicks on the section "Young Scientists League" and sees on the result html page 6 pictures.
4. Expected 6 pictures on the result html page.
5. Actual count pictures correspond to expected.
6. Test is passed.

#### 6 Relative path in 'About the institute' section

1. 151220171925
2. After clicking on the section of "About the institute" user wil be redirected to the '/about' url path.
3. User clicks on the section "About the institute" and sees url path with domen + '/about'.
4. Expected relative path is '/about'.
5. Actual relative path is '/about'.
6. Test is passed.

#### 7 Getting all publications from server API

1. 161220172147.
2. Rest request for getting publications return all publications in JSON format.
3. User type domen/api/publications to the browser and gets all publications in JSON format.
4. Expected 10 publications without count param.
5. Returned 8 publicatons without count param.
6. Test is passed

#### 8 Getting publication by id from server API

1. 161220172204.
2. Rest request for getting publication by id return correspont publication in JSON format.
3. User type domen/api/paublication/4 to the browser and gets publication with id 4 in JSON format.
4. Expected publication with id 4.
5. Returned publication with id 4.
6. Test is passed

## 12. Remaining test tasks
- Testing of sections: Contacts, Conferences, Publications, Site Map

## 13. Enviromental needs
- Separate test database MySQL (version 5.6+)

## 14. Staffing and training needs
- Need lection for using Protractor test framework for testing client side app built on Angular.

## 15. Responsibilities
- Setting risks
- Selecting features to be tested and not tested
- Setting overall strategy for this level of plan
- Ensuring all requred elements are in place for testing

## 16. Schedule
- 10.12.2017 - 14.12.2017 - implementing tests for server side app
- 15.12.2017 - 18.12.2017 - implementing tests for client side app

## 17. Planning risks and contingencies
- Lack of personnel resources when testing is to begin
- Lack of availability of required hardware, software, data or tools
- Late delivery of the software, hardware or tools
- Delays in training on the application and/or tools
- Changes to the original requirements or designs

## 18. Glossary
- Glossary.md (https://github.com/Strelts0v/IPP-webapp/blob/master/Design%20and%20modeling/Glossary.md)
