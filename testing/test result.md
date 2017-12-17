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