Following Information can be helpful to explore the app Safe-Csv-Uploader

Code Links
---------

Backend: https://github.com/javedinfinite/csv-uploader-server
Frontend: https://github.com/javedinfinite/safe-csv-uploader

Deployed Links
----------------

Backend: https://safe-csv-uploader.herokuapp.com/api/employee  
Frontend: https://javedinfinite.github.io/safe-csv-uploader/#/


Features Implemented:
------------------------

1. Users can download a sample csv file
2. Users can import a csv file to the ui and view the data in tabular form with pagination and number of pages.
	If data imported does not look good then the user can clear the data and again import another csv file (the format of the csv should be same as sample file)
3.If data imported looks good then user can upload the data to server. After uploading a dialogue will popup, click on "view employee list" to get redirected 
	to view employees page. To go to this page you can also use the app bar.
4. Users can click on the "viewEmployee" link given on the app-bar and see a list of all the employees uploaded to the server so far.
	This page includes feature as below
	a) On initial render 5 data will be loaded from server
	b) On changing row per page, that number of data will be loaded from server
	c) On clicking of next or previous button, next/previous x(=row per page) data will be loaded.
	d) Users can search data by typing "Name" value in the given search-bar from the app-bar. I am using debouncing, so after a user stops typing a keyword in the search
		field, an api will be called after 1000ms to get the searched data. It's the user 's responsibility to clear the search field to get unsearched data.
	e) Users can sort data in the table on each column by clicking header names of the table (except column Date of birth)
	f) Users can select all or some data to be deleted by clicking on checkboxes. (The delete functionality is not integrated with front-end, backend is implemented)


How to run this locally?
--------------------------

1. Clone both the repositories from the given github link.
2. run <npm install> in the root directory of the projects.
3. run <npm start> in react root directory, run <node index.js> in the root directory of node server
