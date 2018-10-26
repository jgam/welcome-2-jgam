Proxy Error?

proxy에 관한 정의를 내릴 수 있을까?
-> server that acts as an intermediary for requests from clients seeking resources from other servers. 간단하게 정리하자면, 의사소통하기 껄끄러운 두사람 사이의 매게체가 된다고 보면된다. 그렇다면, 이런 껄끄러운 상황이 web-api에 어떻게 발생하고 왜 프록시가 필요할까?

web-api에서 이런상황을 만들 수 있는 가장 기본적인 예제는 'scraping' 이라고 할 수 있다. Octoparse.com에 의거하면, "This auto-technique can help us retrieve loads of customized data from Web or database. However, the major issue is that requesting too many pages in too short a preiod of time by a single IP address can be easily traced by the website..." 이미 예상 했겠지만, proxy는 자동화된 request-pinging()에 맞춰 distinct한 IP address를 부여하기때문에, 이러한 상황에 굉장히 적합한 툴이다.

HOWEVER!
Proxy servers are unstable due to cleverness of famous search engines and there always exists one trying to get private data and the other trying to fight against those invaders. I faced an obstacle when Google blocked some of proxies that I had no idea how to attack. What should I do?

Selenium

Also known as, headerless crawling tool. "Headless chrome is going to play an increasingly important role in the headless browser space(and headless Firefox as well, now that it's been released.)" said by intoli.com
Also, they mentioned how headless browsers are particularly useful when dealing with JavaScript heavy sites.

==> I personally find selenium as a somewhat script to "open" the browser and automate steps that we take in order to find the right search results. In the following code, I want to demonstrate the procedure of humans searching for a certain keyword, "kakao."

First, we will open the browser(say the default is chrome)
Second, we will write "kakao" in the search tab
Lastly, we will click the "search tab" to see the results

After these three procedures, things get complicated but we can get scraping information such as ranking of the websites and suggests keywords that relate to the original keyword. This tool can be used in anywhere for scraping as the means of automation!
