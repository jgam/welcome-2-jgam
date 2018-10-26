from selenium import webdriver

options = webdriver.ChromeOptions()


#tell selenium to use the dev channel version of chrome
# NOTE: only do this if you have a good reason to
#options.binary_location = '/usr/bin/google-chrome-ustable'

options.add_argument('headless')

#set the window size
options.add_argument('window-size=1200x600')

#initialize the driver
driver = webdriver.Chrome(chrome_options=options)

driver.get('https://facebook.com')

#wait up to 10 seconds for the elements to become available
#driver.implicitly_wait(10)

#use css selectors to grab the login inputs
#email = driver.find_element_by_css_selector('input[type=email]')
#password = driver.find_element_by_css_selector('input[type=password]')
#login = driver.find_element_by_css_selector('input[value="Log In"]')

#email.send_keys('jgam@alumni.nd.edu')
#password.send_keys('asdfasdf')#wrong password

#driver.get_screenshot_as_file('main-page.png')